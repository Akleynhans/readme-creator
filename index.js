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
        choices: ['Apache License 2.0', 'GNU General Public License v3.0', 'MIT License', 'BSD 2-Clause "Simplified" License', 'Boost Software License'],

        
    },
];

const writeToFile = ({ title, description, installation, usage, license, contributing, test, github, email, badge }) =>


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
${badge}

## Contributing
${contributing}

## Tests
${test}

## Questions
Github Username: ${github}
Email: ${email}

`;

// select badge
function pickBadge(answers) {
    
    
    if (answers.license == 'Apache License 2.0') {
        var badge = '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
        
        answers.badge = badge;
        
    };
    
    console.log(answers);
    const readmeContent = writeToFile(answers);

    fs.writeFile('README.md', readmeContent, (err) =>
        err ? console.log(err) : console.log('Successfully created README.md!')
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
