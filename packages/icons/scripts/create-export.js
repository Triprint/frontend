const fs = require('node:fs/promises');
const path = require('path');

function isTsxFile(fileName) {
  return /.tsx$/.test(fileName);
}

function pascalcase(s) {
  return s.replace(/(^\w|-\w)/g, (char) => char.replace(/-/, '').toUpperCase());
}

async function ensureWrite(file, data) {
  await fs.mkdir(path.dirname(file), { recursive: true });
  await fs.writeFile(file, data, 'utf8');
}

function createExportLine(fileName) {
  const fileNameWithoutExt = fileName.replace(/\.tsx$/, '');
  const componentName = `${pascalcase(fileNameWithoutExt)}Icon`;
  return `export { default as ${componentName} } from './${fileNameWithoutExt}';`;
}

async function main() {
  const iconPath = path.resolve(__dirname, '..', 'src', 'icons');
  const iconFiles = await fs.readdir(iconPath).then((files) => files.filter(isTsxFile));
  const exportData = iconFiles.map(createExportLine).join('\n');
  await ensureWrite(path.join(iconPath, 'index.ts'), exportData);
}

console.log('🔨 Start create index.ts...');
main().then(() => {
  console.log('🚀 Create index.ts finished.');
});
