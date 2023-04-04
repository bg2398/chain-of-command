// using Intern constructor 
const Intern = require('../chain/Intern');

// creates the intern object  
test('creates an Intern object', () => {
    const intern = new Intern('Joe', 47, 'joe@gmail', 'UW');
    
    expect(intern.school) .toEqual(expect.any(String));
});

// gets the school from getSchool()
test('gets employee school', () => {
    const intern = new Intern('Joe', 47, 'joe@gmail', 'UW');
    
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

// gets the role from getRole()
test('gets role of employee', () => {
    const intern = new Intern('Joe', 47, 'joe@gmail.com', 'UW');

    expect(intern.getRole()).toEqual("Intern");
}); 