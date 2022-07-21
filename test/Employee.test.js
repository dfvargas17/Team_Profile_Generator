const Employee = require('../lib/Employee');
const employee = new Employee('Josh', '1001', 'jsmith@company.com');

test('constructor values for employee', () => {
    expect(employee.name).toBe('Josh');
    expect(employee.id).toBe('1001');
    expect(employee.email).toBe('jsmith@company.com');
});

test('name from getName()', () => {
    expect(employee.getName()).toBe('Josh');
});

test('id from getId()', () => {
    expect(employee.getId()).toBe('1001');
});

test('email from getEmail()', () => {
    expect(employee.getEmail()).toBe('jsmith@company.com');
});
