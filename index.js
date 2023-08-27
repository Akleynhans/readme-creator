// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Title of the project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter Description of project:',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Enter installation instructions:',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Enter usage information:',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Enter contributing guidelines:',
    },
    {
        type: 'input',
        name: 'test',
        message: 'Enter test instructions:',
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter Github username:',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter email:',
    },
    {
        type: 'input',
        name: 'license',
        message: 'Select license:',
    },
];

// TODO: Create a function to write README file
// function writeToFile({title, description, installation, usage, license, contributing, test, github, email}) { 
//     `#${title}

//     ##Table of Contents

//     Descriptions
//     Installations
//     Usage
//     License
//     Contributing
//     Tests
//     Questions
    
//     ##Description
//     ${description}

//     ## Installation
//     ${installation}

//     ## Usage
//     ${usage}

//     ## Licenses
//     ${license}

//     ## Contributing
//     ${contributing}

//     ## Tests
//     ${test}

//     ## Questions
//     ${github}
//     ${email}
    
//     `
// }

const writeToFile = ({ title, description, installation, usage, license, contributing, test, github, email }) =>
`#${title}

## Table of Contents

Descriptions<br>
Installations<br>
Usage<br>
License<br>
Contributing<br>
Tests<br>
Questions

## Description
${description}

## Installation
${installation}

## Usage
${usage}

## Licenses
${license}

## Contributing
${contributing}

## Tests
${test}

## Questions
Github Username: ${github}
Email: ${email}

`;

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {
            const readmeContent = writeToFile(answers);

            fs.writeFile('README.md', readmeContent, (err) =>
                err ? console.log(err) : console.log('Successfully created README.md!')
            );
        });


}

// Function call to initialize app
init();
