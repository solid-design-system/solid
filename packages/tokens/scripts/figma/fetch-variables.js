import { execSync } from 'child_process';
import { existsSync, mkdirSync, rmSync, writeFileSync } from 'fs';
import { join } from 'path';

// Inline the paths instead of using a config file
const FIGMA_VARIABLES_DIR = './src/figma-variables';
const FIGMA_FETCHED_VARIABLES_PATH = join(FIGMA_VARIABLES_DIR, 'variableTokens.json');

// Gets the current git branch name
const getCurrentBranch = () => {
  try {
    return execSync('git rev-parse --abbrev-ref HEAD', { encoding: 'utf8' }).trim();
  } catch (error) {
    console.log('Could not get git branch, using environment or default', error);
    return null;
  }
};

// Finds matching Figma branch for the current git branch
const findFigmaBranch = async (mainFileId, gitBranch, headers) => {
  // If no git branch or it's main/master, use main file
  if (!gitBranch || gitBranch === 'main' || gitBranch === 'master') {
    console.log(`🌟 Using main Figma file for branch: ${gitBranch || 'unknown'}`);
    return mainFileId;
  }

  try {
    console.log(`🔍 Looking for Figma branch: ${gitBranch}`);

    const branchesResponse = await fetch(`https://api.figma.com/v1/files/${mainFileId}/branches`, { headers });

    if (!branchesResponse.ok) {
      console.log(`⚠️ Could not fetch branches (${branchesResponse.status}), using main file`);
      return mainFileId;
    }

    const branchesData = await branchesResponse.json();
    const branches = branchesData.branches || [];

    console.log(`📋 Found ${branches.length} Figma branches`);

    // Try exact match first
    const exactMatch = branches.find(branch => branch.name === gitBranch);
    if (exactMatch) {
      console.log(`✅ Found exact Figma branch match: ${exactMatch.name} (${exactMatch.key})`);
      return exactMatch.key;
    }

    // Try partial match (case insensitive)
    const partialMatch = branches.find(
      branch =>
        branch.name.toLowerCase().includes(gitBranch.toLowerCase()) ||
        gitBranch.toLowerCase().includes(branch.name.toLowerCase())
    );

    if (partialMatch) {
      console.log(`✅ Found partial Figma branch match: ${partialMatch.name} (${partialMatch.key})`);
      return partialMatch.key;
    }

    console.log(`❌ No matching Figma branch found for: ${gitBranch}`);
    console.log(`📝 Available branches: ${branches.map(b => b.name).join(', ')}`);
    console.log(`🌟 Falling back to main file`);

    return mainFileId;
  } catch (error) {
    console.log(`⚠️ Error fetching branches: ${error.message}`);
    console.log(`🌟 Falling back to main file`);
    return mainFileId;
  }
};

// Validates environment variables and returns branch ID and headers
const getApiConfig = async () => {
  // Use FIGMA_FILE_ID from environment variables or default from main branch
  const mainFileId = process.env.FIGMA_FILE_ID || 'dBb3Zm5i3EL3mC1VPUWiBe';

  if (!process.env.FIGMA_FILE_ID) {
    console.log('No FIGMA_FILE_ID provided, using default branch ID:', mainFileId);
  }

  if (!process.env.FIGMA_TOKEN) {
    throw new Error('FIGMA_TOKEN environment variable is not set');
  }

  const headers = { 'X-Figma-Token': process.env.FIGMA_TOKEN };

  // Get current git branch and find matching Figma branch
  const currentBranch = getCurrentBranch();
  console.log(`🌿 Current git branch: ${currentBranch || 'unknown'}`);

  // If FIGMA_FILE_ID is manually provided, use it directly (manual override)
  if (process.env.FIGMA_FILE_ID && process.env.FIGMA_FILE_ID !== 'dBb3Zm5i3EL3mC1VPUWiBe') {
    console.log(`🎯 Using manually specified Figma file: ${process.env.FIGMA_FILE_ID}`);
    return { branchId: process.env.FIGMA_FILE_ID, headers, currentBranch };
  }

  // Otherwise, try to find matching branch
  const figmaBranchId = await findFigmaBranch(mainFileId, currentBranch, headers);

  return { branchId: figmaBranchId, headers, currentBranch };
};

// Filters out hidden variable collections and their associated variables
const filterHiddenCollections = (variableCollections, variables) => {
  // Filter out variable collections that are hidden from publishing
  Object.entries(variableCollections).forEach(([collectionId, collection]) => {
    if (collection.hiddenFromPublishing === true) {
      delete variableCollections[collectionId];
    }
  });

  // Filter out variables that used collections that are hidden from publishing
  Object.entries(variables).forEach(([variableId, variable]) => {
    if (variableCollections[variable.variableCollectionId] === undefined) {
      delete variables[variableId];
    }
  });

  return { variableCollections, variables };
};

// Validates the API response
const validateApiResponse = variablesResponse => {
  if (variablesResponse.error || !variablesResponse.meta) {
    const errorMessage = variablesResponse.error
      ? `Error ${variablesResponse.status} while fetching`
      : 'No metadata found in response';
    throw new Error(`Failed to fetch variables: ${errorMessage}`);
  }
};

// Clean up the output directory if it exists
const cleanUp = () => {
  if (existsSync(FIGMA_VARIABLES_DIR)) {
    rmSync(FIGMA_VARIABLES_DIR, { recursive: true });
  }
  mkdirSync(FIGMA_VARIABLES_DIR, { recursive: true });
};

// Fetches local variables from Figma API and saves them to a JSON file.
const fetchFigmaVariables = async () => {
  cleanUp();

  const { branchId, headers, currentBranch } = await getApiConfig();

  console.log(`🔍 Fetching variables from Figma file: ${branchId}`);

  const variablesFetch = await fetch(`https://api.figma.com/v1/files/${branchId}/variables/local`, { headers });

  const response = await variablesFetch.json();

  validateApiResponse(response);

  const variableCollections = response.meta.variableCollections || {};
  const variables = response.meta.variables || {};

  console.log(
    `📊 Raw data: ${Object.keys(variableCollections).length} collections, ${Object.keys(variables).length} variables`
  );

  const filteredData = filterHiddenCollections(variableCollections, variables);

  console.log(
    `✅ Filtered data: ${Object.keys(filteredData.variableCollections).length} collections, ${Object.keys(filteredData.variables).length} variables`
  );

  // Add metadata about which branch was used
  const outputData = {
    ...filteredData,
    _metadata: {
      figmaBranchId: branchId,
      gitBranch: currentBranch,
      fetchedAt: new Date().toISOString()
    }
  };

  writeFileSync(FIGMA_FETCHED_VARIABLES_PATH, JSON.stringify(outputData, null, 2));

  console.log(`💾 Saved variables to: ${FIGMA_FETCHED_VARIABLES_PATH}`);
  console.log(`🏷️ Branch mapping: ${currentBranch} → ${branchId}`);
};

fetchFigmaVariables().catch(console.error);
