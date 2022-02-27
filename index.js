// Packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");

// Questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?"
    },
    {
        type: "input",
        name: "description",
        message: "Describe your project."
    },
    {
        type: "input",
        name: "installation",
        message: "Describe how to install your project."
    },
    {
        type: "input",
        name: "usage",
        message: "Describe how your project should be used."
    },
    {
        type: "input",
        name: "contribution",
        message: "How can people contribute to your project?"
    },
    {
        type: "input",
        name: "test",
        message: "Provide instructions for testing the project."
    },
    {
        type: "checkbox",
        name: "license",
        message: "Choose a license.",
        choices: ["MIT", "Apache", "GPL", "None"]
    },
    {
        type: "input",
        name: "github",
        message: "Enter your Github username."
    },
    {
        type: "input",
        name: "email",
        message: "Enter your e-mail address."
    }
];

// Write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if(err) throw err;

        console.log("README generated!")
    })
}

// Initialize app
function init() {
    inquirer.prompt(questions).then(answers => {
        writeToFile("README.md", generateMarkdown(answers));
    })
}

init();
