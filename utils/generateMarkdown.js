// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string



function renderLicenseBadge(license) {
  if (license === 'No license'){
    return ''
  } 
  return `![Github License](https://img.shields.io/badge/license-${license}-lightgrey.svg)`
}

//https://img.shields.io/badge/<LABEL>-<MESSAGE>-<COLOR>
//![alt text](image.jpg)


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'No license'){
    return ''
  } 
  
  return '* [License](#license)'
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license === 'No license') {
    return ''
  }

  return `## License
  
  This apllication is covered under the ${license} license.`;

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} ${renderLicenseBadge(data.license)}
  
  ## Description

 ${data.descripion}

 ## Table of Contents

* [Installation](#installation)

* [Usage](#usage)
${renderLicenseLink(data.license)}

* [Contributing](#contributing)

* [Tests](#tests)

* [Questions](#questions)

 ## Installation

${data.instalation}

 ## Usage

${renderLicenseSection(data.license)}

## Contributing

${data.contribute}

## Tests

${data.test}

## Questions

If you need to contact me please email: ${data.email}
Please check out my other projects at [${data.githubUsername}](https://github.com/${data.githubUsername})

`;
}

module.exports = generateMarkdown;
