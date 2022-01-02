const inquirer = require("inquirer"); 
const fs = require("fs");
const Employee = require("./lib/employee");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const Manager = require("./lib/manager");
const generateHTML = require("./dist/render-profiles"); 
const engineers = [];
const interns = [];
const managers = [];


//Question bank
const initialQuestion = 
[
    {
        type: 'list',
        message: 'Do you want to add an employee?',
        choices: ['Yes', 'No'],
        name: 'addEmployee',
    },  
]

const regularQuestions =
[
    {
        type: 'input',
        message: "What is the employee's name?",
        name: 'employeeName',
    },
    {
        type: 'input',
        message: "What is the employee's id?",
        name: 'employeeID',
    },
    {
        type: 'input',
        message: "What is the employee's email?",
        name: 'employeeEmail',
    }, 
    {
        type: 'list',
        message: 'What role will this employee have?',
        choices: ['Intern', 'Engineer', 'Manager'],
        name: 'employeeRole',
    },     
]

const initialize = () => {
    inquirer.prompt(initialQuestion).then((response) => {
        if(response.addEmployee === "Yes") {
           inquirer.prompt(regularQuestions).then((response) => {
                const employeeData = response;
                if(employeeData.employeeRole === "Engineer") {
                    getEngineerData(employeeData);
                }
                else if(employeeData.employeeRole === "Intern") {
                    getInternData(employeeData);
                }
                else {
                    getManagerData(employeeData);
                }
           }
        )} 
        else {
            generateHTML(engineers, interns, managers)
        }
    }   
)};

getEngineerData = (employeeData) => {
    inquirer.prompt({
        type: 'input',
        message: 'What is the GitHub of this engineer?',
        name: 'engineerGithub',
    }).then((response) => {
        console.log(response);
        employeeData = {
            ...employeeData,
            ...response
        }
        console.log(employeeData);
        generateEngineer(employeeData);
    })
}

generateEngineer = (employeeData) => {
    engineers.push(new Engineer(
        employeeData.employeeName,
        employeeData.employeeID, 
        employeeData.employeeEmail, 
        employeeData.engineerGithub
    )) 
    console.log(engineers);
    initialize();
}

getInternData = (employeeData) => {
    inquirer.prompt({
        type: 'input',
        message: 'What is the school of this intern?',
        name: 'internSchool',
    }).then((response) => {
        console.log(response);
        employeeData = {
            ...employeeData,
            ...response
        }
        console.log(employeeData);
        generateIntern(employeeData);
    })
}

generateIntern = (employeeData) => {
    interns.push(new Intern(
        employeeData.employeeName,
        employeeData.employeeID, 
        employeeData.employeeEmail, 
        employeeData.internSchool,
    )) 
    console.log(interns);
    initialize();
}

getManagerData = (employeeData) => {
    inquirer.prompt({
        type: 'input',
        message: 'What is the office number of this manager?',
        name: 'managerOfficeNumber',
    }).then((response) => {
        console.log(response);
        employeeData = {
            ...employeeData,
            ...response
        }
        console.log(employeeData);
        generateManager(employeeData);
    })
}

generateManager = (employeeData) => {
    managers.push(new Manager(
        employeeData.employeeName,
        employeeData.employeeID, 
        employeeData.employeeEmail, 
        employeeData.managerOfficeNumber
    )) 
    console.log(managers);
    initialize();
}


// Initialize app
initialize();


module.exports = {engineers, interns, managers}; 