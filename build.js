const { cpSync, existsSync, mkdirSync, rmSync } = require("node:fs");
const { join } = require("node:path");

const output = join(__dirname, "dist");
const assets = ["index.html", "styles.css", "app.js", "manifest.json", "sw.js"];

if (existsSync(output)) rmSync(output, { recursive: true, force: true });
mkdirSync(output, { recursive: true });
for (const asset of assets) cpSync(join(__dirname, asset), join(output, asset));
console.log(`DASHBOI pronto: ${assets.length} arquivos em dist/`);
