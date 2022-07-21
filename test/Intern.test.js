const Intern = require('../lib/Intern');
const intern = new Intern('Josh', '1001', 'jsmith@company.com', 'UCF');

test('constructor values for intern', () => {
    expect(intern.name).toBe('Josh');
    expect(intern.id).toBe('1001');
    expect(intern.email).toBe('jsmith@company.com');
    expect(intern.school).toBe('UCF');
});

test('name from getName()', () => {
    expect(intern.getName()).toBe('Josh');
});

test('id from getId()', () => {
    expect(intern.getId()).toBe('1001');
});

test('email from getEmail()', () => {
    expect(intern.getEmail()).toBe('jsmith@company.com');
});

test('email from getSchool()', () => {
    expect(intern.getSchool()).toBe('UCF');
});
