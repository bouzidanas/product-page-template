#!/usr/bin/env node
"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// src/index.ts
var clack = __toESM(require("@clack/prompts"));

// src/utils/readFolders.ts
var fs = __toESM(require("fs/promises"));
var readFolders = async (path2) => {
  const folderNames = await fs.readdir(path2);
  const folders = folderNames.map((folderName) => {
    return {
      label: folderName,
      value: `${path2}/${folderName}`
    };
  });
  return folders;
};

// src/utils/copyToFolder.ts
var fs2 = __toESM(require("fs/promises"));
var path = __toESM(require("path"));
var copyRecursive = async (source, destination) => {
  const stats = await fs2.lstat(source);
  if (stats.isDirectory()) {
    await fs2.mkdir(destination, { recursive: true });
    const items = await fs2.readdir(source);
    for (const item of items) {
      const srcPath = path.join(source, item);
      const destPath = path.join(destination, item);
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
var import_picocolors = __toESM(require("picocolors"));

// src/utils/remove.ts
var fs3 = __toESM(require("fs/promises"));
var remove = async (path2, dir = false) => {
  await fs3.rm(path2, { recursive: dir });
};

// src/index.ts
async function main() {
  clack.intro(import_picocolors.default.inverse(" Product Landing Page Template "));
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
