#!/usr/bin/env node

// node_modules/tsup/assets/esm_shims.js
import { fileURLToPath } from "url";
import path from "path";
var getFilename = () => fileURLToPath(import.meta.url);
var getDirname = () => path.dirname(getFilename());
var __dirname = /* @__PURE__ */ getDirname();

// src/index.ts
import * as clack from "@clack/prompts";

// src/utils/readFolders.ts
import * as fs from "fs/promises";
var readFolders = async (path3) => {
  const folderNames = await fs.readdir(path3);
  const folders = folderNames.map((folderName) => {
    return {
      label: folderName,
      value: `${path3}/${folderName}`
    };
  });
  return folders;
};

// src/utils/copyToFolder.ts
import * as fs2 from "fs/promises";
import * as path2 from "path";
var copyRecursive = async (source, destination) => {
  const stats = await fs2.lstat(source);
  if (stats.isDirectory()) {
    await fs2.mkdir(destination, { recursive: true });
    const items = await fs2.readdir(source);
    for (const item of items) {
      const srcPath = path2.join(source, item);
      const destPath = path2.join(destination, item);
      await copyRecursive(srcPath, destPath);
    }
  } else if (stats.isFile()) {
    await fs2.copyFile(source, destination);
  }
};
var copyToFolder = async (source, destination) => {
  await copyRecursive(source, destination);
};

// src/index.ts
import color from "picocolors";

// src/utils/remove.ts
import * as fs3 from "fs/promises";
var remove = async (path3, dir = false) => {
  await fs3.rm(path3, { recursive: dir });
};

// src/index.ts
async function main() {
  clack.intro(color.inverse(" Product Landing Page Template "));
  clack.log.message("\u{1F680} Welcome! Lets create your react product landing page!");
  const mainDirectory = process.cwd();
  const projectName = await clack.text({
    message: "Enter the project name:",
    placeholder: "my-amazing-product",
    validate(value) {
      if (value.length === 0) return `Project name is required`;
    }
  });
  if (clack.isCancel(projectName)) {
    clack.cancel("Operation cancelled");
    return process.exit(0);
  }
  let templates = [];
  try {
    templates = await readFolders(`${__dirname}/templates/base`);
  } catch (error) {
    clack.log.error("\u{1F6D1} Error reading templates folder.");
    if (error instanceof Error) clack.log.info(error.message);
    process.exit(1);
  }
  const selectProjectType = await clack.select({
    message: "Select a template for you new product page:",
    options: templates
  });
  if (clack.isCancel(selectProjectType)) {
    clack.cancel("Operation cancelled");
    return process.exit(0);
  }
  const includeAnimations = await clack.confirm({
    message: "Include Framer Motion animations?",
    initialValue: false
  });
  if (clack.isCancel(includeAnimations)) {
    clack.cancel("Operation cancelled");
    return process.exit(0);
  }
  const parts = selectProjectType.split("/templates/base");
  const projectPath = parts[0] + (includeAnimations ? "/templates/w-framer" : "/templates/base") + parts[1];
  const s = clack.spinner();
  s.start("\u{1F50D} Locating files...");
  try {
    let check = [];
    check = await readFolders(projectPath);
    clack.log.success("\u2705 Template files located.");
  } catch (error) {
    clack.log.error("\u274C Error locating template files");
    if (error instanceof Error) clack.log.info(error.message);
    process.exit(1);
  }
  try {
    s.message("\u{1F4E6} Copying files...");
    await copyToFolder(projectPath, `${mainDirectory}/${projectName}`);
    clack.log.success("\u2705 Project files copied.");
  } catch (error) {
    clack.log.error("\u274C Error creating the project:");
    if (error instanceof Error) clack.log.info(error.message);
    process.exit(1);
  }
  try {
    s.message("\u{1F9F9} Cleaning up...");
    remove(`${mainDirectory}/${projectName}/node_modules`, true);
    remove(`${mainDirectory}/${projectName}/.git`, true);
    remove(`${mainDirectory}/${projectName}/.github`, true);
    remove(`${mainDirectory}/${projectName}/.vite`, true);
    remove(`${mainDirectory}/${projectName}/.vscode`, true);
    remove(`${mainDirectory}/${projectName}/dist`, true);
    remove(`${mainDirectory}/${projectName}/build`, true);
    remove(`${mainDirectory}/${projectName}/.DS_Store`);
    remove(`${mainDirectory}/${projectName}/package-lock.json`);
    remove(`${mainDirectory}/${projectName}/.gitignore`);
    remove(`${mainDirectory}/${projectName}/.gitattributes`);
    remove(`${mainDirectory}/${projectName}/yarn.lock`);
    remove(`${mainDirectory}/${projectName}/DEV.md`);
  } catch (error) {
    clack.log.error("\u274C Error cleaning up project files");
    if (error instanceof Error) clack.log.info(error.message);
    process.exit(1);
  }
  s.stop("\u2705 Finished.");
  clack.log.success("\u{1F389} Project created successfully!");
  clack.note(`  Install packages:

    1. cd ${selectProjectType} 
    2. npm install 

  Preview product landing page:

    3. npm run dev`, "Next Steps:");
  clack.outro(`\u{1F680} Happy coding!`);
}
main().catch(console.error);
