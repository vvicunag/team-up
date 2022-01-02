const Intern = require("../lib/intern");

describe("Intern", () => {
  it("Testing Intern class properties", () => {
    const newEngineer = new Intern ("Patricia", 37, "patricia37@company.com", "ESMT");
    expect(newEngineer.name).toEqual("Patricia");
    expect(newEngineer.id).toEqual(37);
    expect(newEngineer.email).toEqual("patricia37@company.com");
    expect(newEngineer.school).toEqual("ESMT");
  });
});