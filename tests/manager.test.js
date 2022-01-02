const Manager = require("../lib/manager");

describe("Manager", () => {
  it("Testing Manager class properties", () => {
    const newManager = new Manager ("Pedro", 10, "pedro10@company.com", 115);
    expect(newManager.name).toEqual("Pedro");
    expect(newManager.id).toEqual(10);
    expect(newManager.email).toEqual("pedro10@company.com");
    expect(newManager.officeNumber).toEqual(115);
  });
});