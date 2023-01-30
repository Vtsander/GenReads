// Function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(lic) {
  if (lic.license == 'MIT'){
    console.log('MIT Chosen')
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
  } 
  if (lic.license == 'Apache 2.0'){
    console.log('Apache Chosen')
    return '[![License: Apache](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
  } 
  if (lic.license == 'Mozilla Public 2.0'){
    console.log('Mozilla Chosen')
    return '[![License: MPL 2.0](https://img.shields.io/badge/license-MPL_2.0-green)](https://opensource.org/licenses/MPL-2.0)'
  } 
  if (lic.license == 'GNU GPLv3'){
    console.log('GNU Chosen')
    return '[![License: GPL v3](https://img.shields.io/badge/license-GNU_GPLv3-green/)](https://opensource.org/licenses/gpl-3.0)'
  } 
  if (lic.license == 'GNU Lesser General Public License'){
    console.log('GNU Lesser Chosen')
    return '[![License: GNU Lesser General Public License](https://img.shields.io/badge/license-LGPL--3.0-orange)](https://opensource.org/licenses/LGPL-3.0)'
  } 
  if(!lic.license){
    return ''
  }
}
// Function that returns the license info
// If there is no license, return an empty string
function renderLicenseInfo(lic) {
  if(lic.license) {
    return "##license ~This project is under ${lic.license}~"
  }
  else {
    return ""
  }
}

// Function to add description
function renderDescription(lic){
  console.log('description included')
  if (lic.helper){
    console.log('use helper chosen')
    const desList = lic.tech
    const desArray = desList.map((item, i) => `${i+1}. ${item}\n`).join('')
    return `Technology used
${desArray}
## Purpose
${lic.function}
## Challenges 
${lic.challenges}`
  } else{
    console.log('custom description chosen')
    return `${lic.custom}`
  }
}

// Function to add table of contents
// If no table of contents selected return an empty string
function renderTableOfContents(res){

  if(lic.table){
    console.log('table of contents included')
    const tableSections = lic.sections
    const tableArray = tableSections.map((item, i) => `${i+1}. [${item}](#${item})\n`).join('')

    return `## Table of contents
${tableArray}`
  } else {
    console.log('no table of contents included')
    return ''
  }
}

// Function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// Function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
