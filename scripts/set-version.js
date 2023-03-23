import fs from 'fs';
import packageJson from '../package.json' assert { type: 'json' };

const packageJsonVersion = packageJson.version;
const pathToDeploymentInfo = 'public/deployment-info.js';
fs.readFile(pathToDeploymentInfo, 'utf8', function (err, data) {
  if (err) {
    return console.log(err);
  }
  const replacementText = `var APP_VERSION = "${packageJsonVersion}";`;

  fs.writeFile(pathToDeploymentInfo, replacementText, 'utf8', function (err) {
    if (err) return console.log(err);
  });
});
