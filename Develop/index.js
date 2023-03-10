// Packages needed for this application
const iq = require('inquirer')
const fs = require('fs')
const util = require('util')
const generateMarkdown = require('./utils/generateMarkdown')

// Array of questions for user input
const questions = [    
    {
        type: 'input',
        name: 'title',
        message: 'enter project title'
    },{
        type: 'confirm',
        name: 'table',
        message: 'include table of contents?'
    },{
        type: 'checkbox',
        name: 'sections',
        message: 'what sections would you like to include in the table of contents?',
        choices: ['Description', 'License', 'Contributing', 'Tests', 'Questions'],
        when (answers) {
            return answers.table
        }
    },{
        type: 'confirm',
        name: 'helper',
        message: 'would you like to enable description helper?'
    },{
        type: 'input',
        name: 'function',
        message: 'what does your application do?',
        when (answers){
            return answers.helper
        }
    },{
        type: 'checkbox',
        name: 'tech',
        message: 'what tech did you use?',
        choices: ['html', 'css', 'javascript', 'node.js'],
        when (answers) {
            return answers.helper
        }
    },{
        type: 'input',
        name: 'challenges',
        message: 'what challenges did you face?',
        when (answers) {
            return answers.helper
        }
    },{
        type: 'input',
        name: 'custom',
        message: 'enter custom description',
        when (answers) {
            return !answers.helper
        }
    },{
        type: 'list',
        name: 'license',
        message: 'which license would you like to use?',
        choices: ['MIT', 'Apache 2.0', 'Mozilla Public 2.0', 'GNU GPL'],
        when (answers) {
            let validate = 'License'
            return answers.sections && answers.sections.includes(validate)
    }
    },{
        type: 'input',
        name: 'contributing',
        message: 'enter contributor name(s)',
        when (answers) {
            let validate = 'Contributing'
            return answers.sections && answers.sections.includes(validate)
    }
    },{
        type: 'input',
        name: 'questionsGit',
        message: 'enter github username',
        when (answers) {
            let validate = 'Questions'
            return answers.sections && answers.sections.includes(validate)
        }
    },{
        type: 'input',
        name: 'questionsEmail',
        message: 'enter your email address',
        when  (answers) {
            let validate = 'Questions'
            return answers.sections && answers.sections.includes(validate)
        }

    }
];

//prompt user function
const promptUser = function(){
    return iq.prompt(questions)
} 

// Function to write README file
function writeToFile(fileName, data) {
    fs.writeFile("${fileName}", generateMarkdown(data),
    function(err){
        if (err)
        return console.log(err)
    })
    console.log('Your README has finished generating.');
}

// Function to initialize app
function init() {
    promptUser()
        .then((answers) => writeToFile('README.md', answers))
        .then(() => console.log('successfully completed the README.md'))
        .catch((err) => console.log(err));
}

// Function call to initialize app
init();
