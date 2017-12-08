// 'use strict'; // eslint-disable-line

/*
 * Backpack - Skyscanner's Design System
 *
 * Copyright 2017 Skyscanner Ltd
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* eslint-disable no-console */

const fs = require('fs');
const { execSync } = require('child_process');

const getReadmeFile = (componentFileName) => {
  const fileNameSplit = componentFileName.split('/');
  fileNameSplit.pop();
  fileNameSplit[fileNameSplit.length - 1] = 'readme.md';
  const readmeFileName = fileNameSplit.join('/');
  fs.stat(readmeFileName, (err) => {
    if (err == null) {
      return readmeFileName;
    }
    return null;
  });
};

const updateProps = (componentSourceFile, componentReadmeFilePath) => {
  const componentInfo = execSync(`react-docgen ${componentSourceFile}`).toString().split('\n');
  console.log(propInfo);
  // const BpkComponent = require(`../../${componentSourceFile}`);
  // React.render(<Hello name="World" />, document.getElementById('container'));
  // console.log(BpkComponent.propTypes);
};

console.log('Updating prop tables');
console.log('');

let ComponentSourceFiles = execSync('find . * | grep -v node_modules | grep -E ".*Bpk[A-Za-z]+\.js$"').toString().split('\n');
ComponentSourceFiles = ComponentSourceFiles.filter(s => s !== '');

ComponentSourceFiles.forEach((sf) => {
  const componentReadmeFilePath = getReadmeFile(sf);
  console.log(componentReadmeFilePath);
  updateProps(sf, componentReadmeFilePath);
});

// if (errors.length === 0) {
//   console.log('All good.  👍');
// } else if (process.argv.includes('--fix') || process.argv.includes('-f')) {
//   fixDependencyErrors(packageFiles);
//   console.log('\nAll fixed.  👍\n\n');
//   console.log('Now remember to run\n\t _____________\n\t|             |\n\t| npm install |\n\t|_____________|');
// } else {
//   console.log('Some Backpack cross dependencies are outdated  😱');
//   console.log('');
//   errors.forEach((error) => {
//     // eslint-disable-next-line max-len
//     console.log(`${error.packageName} depends on ${error.dependency} ${error.dependencyVersion}, it should be ${error.correctDependencyVersion}`);
//   });
//   console.log('');
//   process.exit(1);
// }
// console.log('');
