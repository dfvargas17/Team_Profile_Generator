const Manager = require('../lib/Manager');
const Employee = require('../lib/Employee');

test('constructor values for office number', () => {
    const valueTest = 222;
    const e = new Manager("Josh", 1001, "jsmith@company", valueTest);
    expect(e.officeNumber).toBe(valueTest);
});

test('', () => {
    const valueTest = 222;
    const e = new Manager("Josh", 1001, "jsmith@company", valueTest);
    expect(e.officeNumber).toBe(valueTest);
});

