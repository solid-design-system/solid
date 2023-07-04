import path from "path";
import TailwindExportConfig from "tailwindcss-export-config";
import theme from "../src/create-theme.cjs";
import fs from "fs";

/**
 * Set configs
 */

const __dirname = new URL(".", import.meta.url).pathname;

const defaultConfig = {
	config: path.join(__dirname, "../tailwind.config.cjs"),
	format: "scss",
	prefix: "sd",
	flat: true,
	quotedKeys: true,
};

const scssConverter = new TailwindExportConfig({
	...defaultConfig,
	destination: "./dist/tokens",
	format: "scss",
	onlyIncludeKeys: [
		"backgroundColor",
		"borderColor",
		"borderRadius",
		"fillColor",
		"fontSize",
		"fontWeight",
		"lineHeight",
		"opacity",
		"spacing",
		"textColor",
	],
});

const jsonConverter = new TailwindExportConfig({
	...defaultConfig,
	destination: "./dist/tokens.tailwind",
	format: "json",
	onlyIncludeKeys: Object.keys(theme),
});

/**
 * Write files
 */

scssConverter
	.writeToFile()
	.then(() => {
		// Remove <alpha-value> from scss file
		// See https://tailwindcss.com/docs/customizing-colors#using-css-variables why this exists
		const file = fs.readFileSync("./dist/tokens.scss", "utf8");
		const newFile = file.replace(/ \/ <alpha-value>/g, "");
		fs.writeFileSync("./dist/tokens.scss", newFile);
		console.log("✅ SCSS written");
	})
	.catch((error) => {
		console.log("❌", error.message);
	});

jsonConverter
	.writeToFile()
	.then(() => {
		console.log("✅ JSON written");
	})
	.catch((error) => {
		console.log("❌", error.message);
	});
