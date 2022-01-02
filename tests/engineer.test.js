const Engineer = require("../lib/engineer");

describe("Engineer", () => {
  it("Testing Engineer class properties", () => {
    const newEngineer = new Engineer ("Jules", 20, "jules20@company.com", "julesgit");
    expect(newEngineer.name).toEqual("Jules");
    expect(newEngineer.id).toEqual(20);
    expect(newEngineer.email).toEqual("jules20@company.com");
    expect(newEngineer.gitHub).toEqual("julesgit");
  });
});