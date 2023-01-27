// Function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(lic) {
  
  if (lic.license == 'MIT'){
    console.log('MIT Chosen')
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
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

// Function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// Function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
