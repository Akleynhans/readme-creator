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
        type: 'list',
        name: 'license',
        message: 'Select license:',
        choices: ['Apache License 2.0', 'GNU General Public License v3.0', 'MIT License', 'BSD 2-Clause "Simplified" License', 'GNU General Public License v2.0', 'Eclipse Public License', 'Mozilla Public License', 'None'],

        
    },
];

const writeToFile = ({ title, description, installation, usage, license, contributing, test, github, email, badge }) =>


`# ${title}
${badge}

## Table of Contents

[Descriptions](#description)<br>
[Installations](#installation)<br>
[Usage](#usage)<br>
[License](#licenses)<br>
[Contributing](#contributing)<br>
[Tests](#tests)<br>
[Questions](#questions)

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
Github Link: [${github}](https://github.com/${github})<br>
For any further questions Email the creator at: ${email}

`;

// select badge
function pickBadge(answers) {
    
    
    if (answers.license == 'Apache License 2.0') {
        var badge = '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
    } else if (answers.license == 'GNU General Public License v3.0') {
        var badge ='[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
    } else if (answers.license == 'MIT License') {
        var badge ='[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
    } else if (answers.license == 'BSD 2-Clause "Simplified" License') {
        var badge ='[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)'
    } else if (answers.license == 'GNU General Public License v2.0') {
        var badge ='[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)'
    } else if (answers.license == 'Eclipse Public License') {
        var badge ='[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)'
    } else if (answers.license == 'Mozilla Public License') {
        var badge ='[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
    } else {
        var badge = ''
    }
    ;
    
    answers.badge = badge;
    const readmeContent = writeToFile(answers);

    fs.writeFile('New_README.md', readmeContent, (err) =>
        err ? console.log(err) : console.log('Successfully created new README.md!')
    );

    

}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {

            pickBadge(answers);

        });


};

// Function call to initialize app
init();
