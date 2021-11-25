class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getName(){};
    getEmail(){};
    getRole = () => "This person is an employee"; 
}

module.exports = Employee; 