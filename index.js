// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generate = require('./readmeLayout');
const readmeLayout = require('./readmeLayout');

// TODO: Create an array of questions for user input
const questions = [
    {
      type: 'input',
      name: 'title',
      message: 'What is the name of your project title?'
    },
    {
      type: 'input',
      name: 'badge',
      message: 'Provide the project badge.'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a description of your project.'
      },
      {
        type: 'input',
        name: 'installation',
        message: 'Provide installation instructions.'
      },
      {
        type: 'input',
        name: 'usage',
        message: 'What the project usage?'
      },
      {
        type: 'input',
        name: 'license',
        message: 'What is the project license?'
      },
      {
        type: 'input',
        name: 'contributing',
        message: 'Provide other contributors.'
      },
      {
        type: 'input',
        name: 'tests',
        message: 'What are the project tests?'
      },
      {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub username?'
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email?'
      },

  ];
  // TODO: Create a function to write README file
  inquirer.prompt(questions).then(function(data) {
    console.log(data);
    
     var content = readmeLayout(data);
     console.log(content);
      fs.writeFile("./project-readme/ReadMe.md", content, function(err){
          if (err) throw err
          console.log("Your README file was successfully created!");
      });
 } ); 

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
