const Employee = require("./employee");

class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
    super(name, id, email);
    this.school = officeNumber; 
    }
    getOfficeNumber() {};
    getRole = () => "This person is a manager";
}

module.exports = Manager;