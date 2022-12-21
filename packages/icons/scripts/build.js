const fs = require('node:fs/promises');
const path = require('path');
const svgr = require('@svgr/core');
const babel = require('@babel/core');
const rimraf = require('rimraf');

const svgrConfig = {
  ref: true,
  icon: true,
  titleProp: true,
};

function pascalcase(s) {
  return s.replace(/(^\w|-\w)/g, (char) => char.replace(/-/, '').toUpperCase());
}

async function ensureWrite(file, data) {
  await fs.mkdir(path.dirname(file), { recursive: true });
  await fs.writeFile(file, data, 'utf8');
}

async function transform(svg, componentName) {
  const jsxCode = await svgr.transform(svg, svgrConfig, { componentName });
  const { code } = await babel.transformAsync(jsxCode, {
    plugins: ['@babel/plugin-transform-react-jsx'],
  });

  const cjs = code
    .replace('import * as React from "react"', 'const React = require("react")')
    .replace('export default', 'module.exports =');

  return {
    esm: code,
    cjs,
  };
}

async function getIcons() {
  const files = await fs.readdir(path.join(__dirname, '..', 'src'));
  return Promise.all(
    files.map(async (file) => ({
      svg: await fs.readFile(path.join(__dirname, '..', 'src', file), 'utf8'),
      componentName: `${pascalcase(file.replace(/\.svg$/, ''))}Icon`,
    })),
  );
}

function exportAll(icons, format) {
  return icons
    .map(({ componentName }) => {
      if (format === 'esm') {
        return `export { default as ${componentName} } from "./${componentName}.mjs"`;
      }
      if (format === 'types') {
        return `export { default as ${componentName} } from "./${componentName}"`;
      }
      return `module.exports.${componentName} = require("./${componentName}.js")`;
    })
    .join('\n');
}

async function buildIcons() {
  const outDir = path.join(__dirname, '..', 'dist');
  const icons = await getIcons();

  await Promise.all(
    icons.flatMap(async ({ componentName, svg }) => {
      const { esm, cjs } = await transform(svg, componentName);
      const types = `import * as React from 'react';\ndeclare function ${componentName}(props: React.ComponentProps<'svg'> & { title?: string, titleId?: string }): JSX.Element;\nexport default ${componentName};\n`;

      return [
        ensureWrite(path.join(outDir, `${componentName}.js`), cjs),
        ensureWrite(path.join(outDir, `${componentName}.mjs`), esm),
        ensureWrite(path.join(outDir, `${componentName}.d.ts`), types),
      ];
    }),
  );

  await ensureWrite(`${outDir}/index.js`, exportAll(icons, 'cjs'));
  await ensureWrite(`${outDir}/index.mjs`, exportAll(icons, 'esm'));
  await ensureWrite(`${outDir}/index.d.ts`, exportAll(icons, 'types'));
}

async function main() {
  rimraf.sync('dist');

  await buildIcons();
}

main();
