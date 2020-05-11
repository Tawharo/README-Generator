const inquirer = require("inquirer");
const api = require("./utils/api");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");
const fs  = require('fs');
const questions = [
    {
       type: "input",
       name: "github",
       message: "What is your Github username?"
    },
    {
      type: "input",
      name: "userEmail",
      message: "What is your e-mail address?"
   },
   {
       type: "input",
       name: "URL to project",
       message: "What is the URL to your aopplication?"
   },
    {
        type: "input",
        name: "title",
        message: "What is the name of your application?"
     },
     {
      type: "input",
      name: "projectDescription",
      message: "Please write a description of the application"
   },
   {
    type: "input",
    name: "tableOfContents",
    message: "What is your Table of Contents?"
 },
   {
       type: "list",
       name: "license",
       message: "What kind of license should your application have?",
       choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"]
   },
     {
        type: "input",
        name: "installation",
        message: "What command should be run to install the application?",
        default: "npm i"
     },
     {
         type: "input",
         name: "test",
         message: "What command should be run to run tests to your application?",
         default: "npm test"
     },
   {
      type: "input",
      name: "usage",
      message: "How is the application used?"
   },
   {
      type: "input",
      name: "contributing",
      message: "How can other developers contribute to the application?"
   },
   {
      type: "input",
      name: "questions",
      message: "How can users report issues or ask questions?"
   }
];

function createBadge(license) {
   return `https://img.shields.io/badge/License-${license}-yellow.svg)](https://opensource.org/licenses/MIT)`;
}

function writeToFile(fileName, data) {
   return fs.writeFileSync(path.join(__dirname,fileName),data)
}

console.log(__dirname)

function init() {
    inquirer.prompt(questions).then(function(data) {
        api.getUser(data.githubUsername).then(response => {
            console.log(response.data.avatar_url);
            console.log(createBadge(data.badgeChoice));
            writeToFile("README.md",generateMarkdown(data));
        });
    });
}

init();