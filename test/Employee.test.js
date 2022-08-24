const Employee = require('../lib/Employee');
//const employee = new Employee('Josh', '1001', 'jsmith@company.com');
test('Employee instance is initiated', () => {
    const e = new Employee();
    expect(typeof(e).toBe('object');
});

test('constructor values for name', () => {
    const name = "Josh"
    const e = new Employee(name);
    expect(e.name).toBe(name);
    
});

test('constructor values for id', () => {
    const valueTest  = 1001
    const e = new Employee("Josh", valueTest);
    expect(e.id).toBe(valueTest);
    
});

test('constructor values for email', () => {
    const valueTest  = "jsmith@company.com"
    const e = new Employee("Josh", 1001, valueTest);
    expect(e.email).toBe(valueTest);
    
});
    
test('name from getName()', () => {
    const valueTest = "Josh"
    const e = new Employee(valueTest);
    expect(e.getName()).toBe(valueTest);
});

test('id from getId()', () => {
    const valueTest = 1001
    const e = new Employee("Josh", valueTest);
    expect(e.getId()).toBe(valueTest);
});

test('email from getEmail()', () => {
    const valueTest = "jsmith@company.com";
    const e = new Employee("Josh", 1001, valueTest);
    expect(e.getEmail()).toBe(valueTest);
});

test('getRole() should return \"Employee\"', () => {
    const valueTest = "Employee";
    const e = new Employee("Josh", 1001, "jsmith@company");
    expect(e.getRole()).toBe(valueTest);
});