/**
 * @typedef {import('@figma/rest-api-spec').GetLocalVariablesResponse} GetLocalVariablesResponse
 * @typedef {import('@figma/rest-api-spec').GetLocalVariablesResponse['meta']} VariablesAndCollections
 * @typedef {VariablesAndCollections['variables']} Variables
 * @typedef {VariablesAndCollections['variableCollections']} VariableCollections
 */
import { existsSync, mkdirSync, rmSync, writeFileSync } from 'fs';
import { FIGMA_FETCHED_VARIABLES_PATH, FIGMA_VARIABLES_DIR } from '../../scripts/config.js';
import { sort } from '@tamtamchik/json-deep-sort';

/**
 * Validates environment variables and returns branch ID and headers
 */
const getApiConfig = () => {
  const branchId = process.env.FIGMA_FILE_ID || 'VTztxQ5pWG7ARg8hCX6PfR';
  if (!process.env.FIGMA_FILE_ID) {
    console.log('No FIGMA_FILE_ID provided, using default branch ID:', branchId);
  }

  if (!process.env.FIGMA_TOKEN) {
    throw new Error('FIGMA_TOKEN environment variable is not set');
  }

  const headers = { 'X-Figma-Token': process.env.FIGMA_TOKEN };
  return { branchId, headers };
};

/**
 * Filters out hidden variable collections and their associated variables
 * @param {VariableCollections} variableCollections - Variable collections object
 * @param {Variables} variables - Variables object
 */
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

/**
 * Validates the API response
 * @param {GetLocalVariablesResponse} variablesResponse - The API response
 */
const validateApiResponse = variablesResponse => {
  if (variablesResponse.error || !variablesResponse.meta) {
    const errorMessage = variablesResponse.error
      ? `Error ${variablesResponse.status} while fetching `
      : 'No metadata found in response';
    throw new Error(`Failed to fetch variables: ${errorMessage}`);
  }
};

// Clean up the output directory if it exists
const cleanUp = () => {
  if (existsSync(FIGMA_VARIABLES_DIR)) {
    rmSync(FIGMA_VARIABLES_DIR, { recursive: true });
    mkdirSync(FIGMA_VARIABLES_DIR, { recursive: true });
  }
};

/**
 * Fetches local variables from Figma API and saves them to a JSON file.
 */
const fetchFigmaVariables = async () => {
  cleanUp();
  const { branchId, headers } = getApiConfig();

  const variablesFetch = await fetch(`https://api.figma.com/v1/files/${branchId}/variables/local`, { headers });

  const response = /** @type {GetLocalVariablesResponse} */ (await variablesFetch.json());

  validateApiResponse(response);
  const variableCollections = response.meta.variableCollections || {};
  const variables = response.meta.variables || {};

  const filteredData = filterHiddenCollections(variableCollections, variables);

  writeFileSync(FIGMA_FETCHED_VARIABLES_PATH, JSON.stringify(sort(filteredData), null, 2));
};

fetchFigmaVariables().catch(console.error);
