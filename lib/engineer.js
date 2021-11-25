const Employee = require("./employee");

class Engineer extends Employee {
    constructor (name, id, email, gitHub) {
    super(name, id, email);
    this.gitHub = gitHub; 
    }
    getGithub() {};
    getRole = () => "This person is an engineer";
}

module.exports = Engineer; 