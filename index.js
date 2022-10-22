// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');


// TODO: Create an array of questions for user input
inquirer.prompt([
    {
        type: 'input',
        name: 'title',
        message: 'Please enter your Project Title: '
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please enter a description of this project: '
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please enter Installation Instructions: '
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please enter Usage Information: '
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Please enter Contribution Guidelines: '
    },
    {
        type: 'input',
        name: 'test',
        message: 'Please enter Test Instructions: '
    },
    {
        type: 'list',
        name: 'license',
        choices: [
            'MIT',
            'Mozilla Public License 2.0',
            'zLib License',
            'Eclipse Public License 1.0',
            'Apache 2.0'
        ],
        message: 'Please choose a License'
    },
    {
        type: 'input',
        name: 'github',
        message: 'Please enter your Github Username: '
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your Email Address: '
    }
])
.then((responses)=> {
        let badge;
        if(responses.license === 'Apache 2.0') {
            badge = '![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)'
        } else if (responses.license === 'Eclipse Public License 1.0') {
            badge = '![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)'
        } else if (responses.license === 'MIT') {
            badge = '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)'
        } else if (responses.license === 'Mozilla Public License 2.0') {
            badge = '![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)'
        } else if (responses.license === 'zLib License') {
            badge = '![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)'
        }
        responses.badge = badge;

    
const readme =
`
# ${responses.title}     ${responses.badge}
    
## Table of Contents
[Description](#description)<br>
[Installation](#installation)<br>
[Usage](#usage)<br>
[License](#license)<br>
[Contributing](#contributing)<br>
[Tests](#test)<br>
[Questions](#questions)

## Description
    ${responses.description}
    
    
## Installation
    ${responses.installation}
    
## Usage
    ${responses.usage}
    
## License
    ${responses.license}
    
## Contributing
    ${responses.contribution}
    
## Tests
    ${responses.test}
    
## Questions? Email me here:
    ${responses.github}
`

    fs.writeFile(`./readmes/README.md`, readme,
    (err) => err ? console.error(err) : console.log('saved')
    ); 
});

// Create a function to initialize app
function init() {

}

// Function call to initialize app
init();
