// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown.js')


// TODO: Create an array of questions for user input
//title, Description, Installation, Usage, License, Contributing, Tests, and Questions
const questions = [
    {
        type: 'input',
        message:  'What is the name of your project?',
        name:  'title',
    },
    {
        type: 'input',
        message:  'Breif description of your project!',
        name:  'descripion',
    },
    {
        type: 'input',
        message:  'How to install?',
        name:  'instalation',
    },
    {
        type: 'input',
        message:  'How this project will be implemented',
        name:  'usage',
    },
    {
        type: 'list',
        message: 'Licenses' ,
        choices: ['MIT', 'GPLv2', 'Apache', 'GPLv3', 'BSD 3-clause', 'No license', 'BSD 2-clause '],
        name:  'license',
    },
    {
        type: 'input',
        message: 'How might one contribute?' ,
        name: 'contribute' ,
    },
    {
        type: 'input',
        message: 'How would you test this?' ,
        name: 'test' ,
    },
    {
        type: 'input',
        message: 'What is your Github username?' ,
        name: 'githubUsername' ,
    },
    {
        type: 'input',
        message: 'What is your e-mail address?' ,
        name: 'email' ,
    },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((response) => {
        console.log(response)
        writeToFile('README.md', generateMarkdown({...response}))
        
    })
}

// Function call to initialize app
init()