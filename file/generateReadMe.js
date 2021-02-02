// generateReadme function populating the README.md
function generateReadMe(reply) {
    return `
<h1 align="left">${reply.projectTitle}</h1>
  
![badge](https://img.shields.io/badge/license-${reply.license}-brightgreen)<br />
## Description
${reply.description}
## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)
## Installation
${reply.installation}
## Usage
${reply.usage}
## License
![badge](https://img.shields.io/badge/license-${reply.license}-brightgreen)
<br />
${reply.license}
## Contributing
${reply.contributing}
## Tests
${reply.tests}
## Questions
${reply.questions}<br />
<br />
Email: ${reply.email}<br /><br /> 

`};

  
module.exports = generateReadMe