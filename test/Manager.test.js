const Manager = require('../lib/Manager');
const manager = new Manager('Josh', '1001', 'jsmith@company.com', '220');

test('constructor values for manager', () => {
    expect(manager.name).toBe('Josh');
    expect(manager.id).toBe('1001');
    expect(manager.email).toBe('jsmith@company.com');
    expect(manager.officeNumber).toBe('220');
});

test('name from getName()', () => {
    expect(manager.getName()).toBe('Josh');
});

test('id from getId()', () => {
    expect(manager.getId()).toBe('1001');
});

test('email from getEmail()', () => {
    expect(manager.getEmail()).toBe('jsmith@company.com');
});

test('office number from getOfficeNumber()', () => {
    expect(manager.getOfficeNumber()).toBe('220');
});

