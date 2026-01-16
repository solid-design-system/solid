import { exec } from 'child_process';
import { fileURLToPath } from 'url';
import { promisify } from 'util';
import fs from 'fs';
import path from 'path';

const execAsync = promisify(exec);
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const MONOREPO_ROOT = path.resolve(__dirname, '../../..');
const TOKENS_ROOT = path.resolve(__dirname, '..');
const COMPONENTS_ROOT = path.resolve(MONOREPO_ROOT, 'packages/components');
const STYLES_ROOT = path.resolve(MONOREPO_ROOT, 'packages/styles');

// Color codes for terminal output
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  cyan: '\x1b[36m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  white: '\x1b[37m',
  red: '\x1b[31m'
};

const log = (text, color = 'reset') => {
  console.log(`${colors[color]}${text}${colors.reset}`);
};

const logSection = title => {
  log(`\n${Array(61).join('=')}`, 'bright');
  log(title, 'cyan');
  log(`${Array(61).join('=')}\n`, 'bright');
};

const formatRow = (col1, col2, width1 = 60) => {
  const col1Str = String(col1).padEnd(width1);
  const col2Str = String(col2).padStart(10);
  return col1Str + col2Str;
};

/**
 * Extract all --sd-* variables from tailwind.css
 * Captures the full variable name including all segments separated by - or .
 */
function extractFromTailwind(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const variables = new Set();

  // Match var(--sd-...) patterns and capture the full variable name until comma or closing paren
  const regex = /var\((--sd-[^,)]+)/g;
  let match;

  while ((match = regex.exec(content)) !== null) {
    variables.add(match[1]);
  }

  return Array.from(variables).sort();
}

/**
 * Extract only the first --sd-* variable from each line in components.css
 */
function extractFromComponents(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const variables = new Set();

  const lines = content.split('\n');

  for (const line of lines) {
    // Match the first var(--sd-...) on the line, capturing until comma or closing paren
    const match = line.match(/var\((--sd-[^,)]+)/);
    if (match) {
      variables.add(match[1]);
    }
  }

  return Array.from(variables).sort();
}

/**
 * Search for variables in a bundle or CSS file
 * Uses negative lookahead to avoid false positives (e.g., --sd-spacing-1 won't match --sd-spacing-10)
 */
function searchVariablesInFile(filePath, variables) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const usage = {};

  for (const variable of variables) {
    // Escape special regex characters
    const escapedVar = variable.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    // Use negative lookahead (?![\w\-]) to ensure the variable is not followed by word chars or hyphens
    // This prevents matching --sd-spacing-1 within --sd-spacing-10
    const regex = new RegExp(`${escapedVar}(?![\\w\\-])`, 'g');
    const matches = content.match(regex) || [];
    usage[variable] = matches.length;
  }

  return usage;
}

/**
 * Categorize variables as base or component
 */
function categorizeVariables(variables) {
  const baseVars = [];
  const componentVars = [];

  for (const variable of variables) {
    // Component variables typically have more segments (e.g., --sd-button--primary--, --sd-badge--)
    // Base variables are typically simpler (e.g., --sd-color-primary, --sd-spacing-1)
    if (
      variable.match(
        /--sd-(button|badge|checkbox|radio|switch|chip|tag|link|menu|tab|dialog|modal|tooltip|accordion|carousel|datepicker|input|select|form-control|notification|step|breadcrumb|quickfact|teaser|divider|flag|footnotes|header|headline|informational-gradient|interactive|navigable|overlay|panel|audio|brandshape|map-marker|range|video|zoom)/
      )
    ) {
      componentVars.push(variable);
    } else {
      baseVars.push(variable);
    }
  }

  return { baseVars, componentVars };
}

/**
 * Main analysis function
 */
async function analyzeVariables() {
  try {
    logSection('🔍 SOLID DESIGN SYSTEM - VARIABLE USAGE ANALYSIS');

    // Step 1: Extract variables
    log('📝 Step 1: Extracting variables from theme files...', 'blue');

    const tailwindPath = path.join(TOKENS_ROOT, 'themes/tailwind.css');
    const componentsThemePath = path.join(TOKENS_ROOT, 'themes/components.css');

    if (!fs.existsSync(tailwindPath)) {
      throw new Error(`File not found: ${tailwindPath}`);
    }
    if (!fs.existsSync(componentsThemePath)) {
      throw new Error(`File not found: ${componentsThemePath}`);
    }

    const tailwindVars = extractFromTailwind(tailwindPath);
    const componentThemeVars = extractFromComponents(componentsThemePath);

    // Combine all unique variables
    const allVars = [...new Set([...tailwindVars, ...componentThemeVars])].sort();

    log(`✅ Extracted ${tailwindVars.length} variables from tailwind.css`, 'green');
    log(`✅ Extracted ${componentThemeVars.length} unique first-line variables from components.css`, 'green');
    log(`✅ Total unique variables: ${allVars.length}`, 'green');

    // Step 2: Build packages
    logSection('🔨 Step 2: Building packages...', 'blue');

    log('Building @solid-design-system/components...', 'yellow');
    try {
      await execAsync('pnpm build', {
        cwd: COMPONENTS_ROOT,
        stdio: 'pipe'
      });
      log('✅ Components build completed', 'green');
    } catch (error) {
      log(`⚠️  Components build error: ${error.message.substring(0, 100)}`, 'yellow');
    }

    log('Building @solid-design-system/styles...', 'yellow');
    try {
      await execAsync('pnpm build', {
        cwd: STYLES_ROOT,
        stdio: 'pipe'
      });
      log('✅ Styles build completed', 'green');
    } catch (error) {
      log(`⚠️  Styles build error: ${error.message.substring(0, 100)}`, 'yellow');
    }

    // Step 3: Search variables in bundles
    logSection('🔎 Step 3: Searching variables in generated bundles...', 'blue');

    const componentsBundlePath = path.join(COMPONENTS_ROOT, 'cdn/solid-components.bundle.js');
    const componentsCssPath = path.join(COMPONENTS_ROOT, 'cdn/solid-components.css');
    const stylesRootCdn = path.join(STYLES_ROOT, 'cdn');

    let componentsUsage = {};
    let stylesCssUsage = {};

    if (fs.existsSync(componentsBundlePath)) {
      log(`Searching in components bundle (JS)...`, 'cyan');
      componentsUsage = searchVariablesInFile(componentsBundlePath, allVars);
      const usageCount = Object.values(componentsUsage).reduce((a, b) => a + b, 0);
      log(`✅ Components bundle searched (${usageCount} usages found)`, 'green');
    } else {
      log(`⚠️  Components bundle not found`, 'yellow');
    }

    if (fs.existsSync(componentsCssPath)) {
      log(`Searching in components CSS...`, 'cyan');
      const componentsCssUsage = searchVariablesInFile(componentsCssPath, allVars);
      const usageCount = Object.values(componentsCssUsage).reduce((a, b) => a + b, 0);
      log(`✅ Components CSS searched (${usageCount} usages found)`, 'green');
      // Merge CSS usage into components usage
      for (const [variable, count] of Object.entries(componentsCssUsage)) {
        componentsUsage[variable] = (componentsUsage[variable] || 0) + count;
      }
    } else {
      log(`⚠️  Components CSS not found`, 'yellow');
    }

    // Look for CSS files in styles package
    let stylesCdnPath = null;
    if (fs.existsSync(stylesRootCdn)) {
      const files = fs.readdirSync(stylesRootCdn);
      const cssFiles = files.filter(f => f.endsWith('.css'));
      if (cssFiles.length > 0) {
        stylesCdnPath = path.join(stylesRootCdn, cssFiles[0]);
      }
    }

    if (stylesCdnPath && fs.existsSync(stylesCdnPath)) {
      log(`Searching in styles CSS...`, 'cyan');
      stylesCssUsage = searchVariablesInFile(stylesCdnPath, allVars);
      const usageCount = Object.values(stylesCssUsage).reduce((a, b) => a + b, 0);
      log(`✅ Styles CSS searched (${usageCount} usages found)`, 'green');
    } else {
      log(`⚠️  Styles CSS not found`, 'yellow');
    }

    // Step 4: Combine and analyze usage
    logSection('📊 Step 4: Usage Analysis Results', 'blue');

    // Categorize variables
    const { baseVars, componentVars } = categorizeVariables(allVars);

    // Combine usage from both sources
    const combinedUsage = {};
    for (const variable of allVars) {
      const compUsage = componentsUsage[variable] || 0;
      const styleUsage = stylesCssUsage[variable] || 0;
      combinedUsage[variable] = compUsage + styleUsage;
    }

    // Display results - BASE VARIABLES
    log('\n📈 BASE VARIABLES (Core design tokens)', 'magenta');
    log(`${Array(81).join('-')}`);
    log(formatRow('Variable Name', 'Usage'), 'bright');
    log(`${Array(81).join('-')}`);

    const baseUsage = {};
    for (const variable of baseVars) {
      baseUsage[variable] = combinedUsage[variable];
    }

    const sortedBase = Object.entries(baseUsage).sort((a, b) => b[1] - a[1]);

    let baseTotalUsage = 0;
    for (const [variable, count] of sortedBase) {
      log(formatRow(variable, count), count > 0 ? 'green' : 'yellow');
      baseTotalUsage += count;
    }
    log(`${Array(81).join('-')}`);
    log(`Total base variable usage: ${baseTotalUsage}`, 'bright');

    // Display results - COMPONENT VARIABLES
    log('\n🎨 COMPONENT VARIABLES (UI-specific tokens)', 'magenta');
    log(`${Array(81).join('-')}`);
    log(formatRow('Variable Name', 'Usage'), 'bright');
    log(`${Array(81).join('-')}`);

    const componentUsage = {};
    for (const variable of componentVars) {
      componentUsage[variable] = combinedUsage[variable];
    }

    const sortedComponents = Object.entries(componentUsage).sort((a, b) => b[1] - a[1]);

    let componentTotalUsage = 0;
    for (const [variable, count] of sortedComponents) {
      log(formatRow(variable, count), count > 0 ? 'green' : 'yellow');
      componentTotalUsage += count;
    }
    log(`${Array(81).join('-')}`);
    log(`Total component variable usage: ${componentTotalUsage}`, 'bright');

    // Summary
    logSection('📋 SUMMARY', 'green');
    log(`Total unique variables: ${allVars.length}`, 'bright');
    log(`  └─ Base variables: ${baseVars.length}`, 'cyan');
    log(`  └─ Component variables: ${componentVars.length}`, 'cyan');
    log(`\nTotal variable usage across bundles: ${baseTotalUsage + componentTotalUsage}`, 'bright');
    log(
      `  └─ In @solid-design-system/components: ${Object.values(componentsUsage).reduce((a, b) => a + b, 0)}`,
      'cyan'
    );
    log(`  └─ In @solid-design-system/styles: ${Object.values(stylesCssUsage).reduce((a, b) => a + b, 0)}`, 'cyan');

    // Find unused variables
    const unused = allVars.filter(v => combinedUsage[v] === 0);
    if (unused.length > 0) {
      log(`\n⚠️  Unused variables: ${unused.length}`, 'yellow');
      unused.forEach(v => log(`  └─ ${v}`, 'yellow'));
    }

    log(`\n✨ Analysis complete!`, 'green');
  } catch (error) {
    log(`\n❌ Error: ${error.message}`, 'red');
    process.exit(1);
  }
}

// Run analysis
analyzeVariables();
