#!/usr/bin/env node

import * as clack from '@clack/prompts';
import { type FoldersAvailable, readFolders } from './utils/readFolders';
import { copyToFolder } from './utils/copyToFolder';
import { setTimeout as sleep } from 'node:timers/promises';
import color from 'picocolors';
import { remove } from './utils/remove';

async function main() {
  clack.intro(color.inverse(' Product Landing Page Template '));
  clack.log.message('🚀 Welcome! Lets create your react product landing page!')

  const mainDirectory = process.cwd();

  const projectName = (await clack.text({
    message: 'Enter the project name:',
    placeholder: 'my-amazing-product',
    validate(value) {
      if (value.length === 0) return `Project name is required`;
    }
  })) as string;

  if (clack.isCancel(projectName)) {
    clack.cancel('Operation cancelled');
    return process.exit(0);
  }

  let templates: FoldersAvailable[] = [];

  try {
    templates = await readFolders(`${__dirname}/templates/base`);
  } catch (error) {
    clack.log.error('🛑 Error reading templates folder.');
    if (error instanceof Error) clack.log.info(error.message as string);
    process.exit(1);
  }

  const selectProjectType = (await clack.select({
    message: 'Select a template for you new product page:',
    options: templates
  })) as string;

  if (clack.isCancel(selectProjectType)) {
    clack.cancel('Operation cancelled');
    return process.exit(0);
  }

  const includeAnimations = (await clack.confirm({
    message: 'Include Framer Motion animations?',
    initialValue: false
  })) as boolean;

  if (clack.isCancel(includeAnimations)) {
    clack.cancel('Operation cancelled');
    return process.exit(0);
  }

  const parts = selectProjectType.split('/templates/base');
  const projectPath = parts[0] + (includeAnimations ? '/templates/w-framer' : '/templates/base') + parts[1];

  const s = clack.spinner();
  s.start('🔍 Locating files...');

  try {
    let check: FoldersAvailable[] = [];
    check = await readFolders(projectPath);
    clack.log.success('✅ Template files located.');
  } catch (error) {
    clack.log.error('❌ Error locating template files')
    if (error instanceof Error) clack.log.info(error.message as string);
    process.exit(1);
  }

  
  try {
    s.message('📦 Copying files...');
    await copyToFolder(projectPath, `${mainDirectory}/${projectName}`);
    clack.log.success('✅ Project files copied.');
  } catch (error) {
    clack.log.error('❌ Error creating the project:');
    if (error instanceof Error) clack.log.info(error.message as string);
    process.exit(1);
  } 

  try {
    s.message('🧹 Cleaning up...');
    // cleanup code goes here
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
    clack.log.error('❌ Error cleaning up project files');
    if (error instanceof Error) clack.log.info(error.message as string);
    process.exit(1);
  }

  s.stop('✅ Finished.');

  clack.log.success('🎉 Project created successfully!')
  clack.note(`  Install packages:\n\n    1. cd ${projectName} \n    2. npm install \n\n  Preview product landing page:\n\n    3. npm run dev`, 'Next Steps:');

  // Outro should contain instruction for the user to initalize the react project
  clack.outro(`🚀 Happy coding!`);
}

main().catch(console.error);