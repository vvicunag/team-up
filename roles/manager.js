const Employee = require("./employee");

class Manager extends Employee {
    constructor (officeNumber) {
    super(name, id, email);
    this.name = name;
    this.id = id;
    this.email = email;
    this.school = officeNumber; 
    }
    getSchool() {};
    getRole() {};
}