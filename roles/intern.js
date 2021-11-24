const Employee = require("./employee");

class Intern extends Employee {
    constructor (school) {
    super(name, id, email);
    this.name = name;
    this.id = id;
    this.email = email;
    this.school = school; 
    }
    getSchool() {};
    getRole() {};
}