const Engineer = require('../lib/Engineer');
const engineer = new Engineer('Josh', '1001', 'jsmith@company.com', 'jsmith123');

test('constructor values for engineer', () => {
    expect(engineer.name).toBe('Josh');
    expect(engineer.id).toBe('1001');
    expect(engineer.email).toBe('jsmith@company.com');
    expect(engineer.github).toBe('jsmith123')
});

test('name from getName()', () => {
    expect(engineer.getName()).toBe('Josh');
});

test('id from getId()', () => {
    expect(engineer.getId()).toBe('1001');
});

test('email from getEmail()', () => {
    expect(engineer.getEmail()).toBe('jsmith@company.com');
});

test('github username from getGitHub()', () => {
    expect(engineer.getGitHub()).toBe('jsmith123');
});

