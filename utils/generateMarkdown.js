// Returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license !== "None") {
    return `![${license} License Badge](https://img.shields.io/badge/License-${license}-blue)`;
  }
  return "";
}

// Returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license !== "None") {
    return "LICENSE.txt"
  }
  return "";
}

// Returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license === "None") {
    return "";
  }
  return `## License

  This software provided under the [${license} license](${renderLicenseLink(license)}).
  `
}

function licenseTableOfContents(license) {
  if(license === "None") {
    return "";
  }
  return "- [License](#license)"
}

// Generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Description

  ${data.description}

  ## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [How to Contribute](#how-to-contribute)
  - [Tests](#tests)
  ${licenseTableOfContents(data.license)}
  - [Questions](#questions)

  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ## How to Contribute

  ${data.contribution}

  ## Tests

  ${data.tests}

  ${renderLicenseSection(data.license)}

  ## Questions

  If you have any questions or concerns, feel free to contact me via my [Github](https://github.com/${data.github}) or via [email](mailto:${data.email}).
`;
}

module.exports = generateMarkdown;
