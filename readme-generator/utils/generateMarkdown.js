// Returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license) {
    return `https://img.shields.io/badge/License-${license}-blue`;
  }
  return "";
}

// Returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license) {

  }
  return "";
}

// Returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license) {

  }
  return "";
}

// Generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
