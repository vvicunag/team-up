const Employee = require("./employee");

class Engineer extends Employee {
    constructor (gitHub) {
    super(name, id, email);
    this.name = name;
    this.id = id;
    this.email = email;
    this.gitHub = gitHub; 
    }
    getGithub() {};
    getRole() {};
}