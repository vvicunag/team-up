const Employee = require("../lib/employee");

describe("Employee", () => {
  it("Testing main class properties", () => {
    const newEmployee = new Employee("Juan", 5, "juan5@company.com");
    expect(newEmployee.name).toEqual("Juan");
    expect(newEmployee.id).toEqual(5);
    expect(newEmployee.email).toEqual("juan5@company.com");
  });
});