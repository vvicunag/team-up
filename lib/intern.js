const Employee = require("./employee");

class Intern extends Employee {
    constructor (name, id, email, school) {
    super(name, id, email);
    this.school = school; 
    }
    getSchool() {};
    getRole = () => "This person is an intern";
}

module.exports = Intern;