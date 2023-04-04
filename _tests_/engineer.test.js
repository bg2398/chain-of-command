
// using the Engineer constructor 
const Engineer = require('../chain/Engineer');

// creating the engineer section  
test('creates an Engineer object', () => {
    const engineer = new Engineer('Brandon', 98, 'brandon@gmail.com', 'bg2398');
    
    expect(engineer.github) .toEqual(expect.any(String));
});

// gets your github from getGithub()
test('gets engineer github value', () => {
    const engineer = new Engineer('Brandon', 90, 'brandon@gmail', 'bg2398');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

// gets the assigned role from getRole() 
test('gets role of employee', () => {
    const engineer = new Engineer('Brandon', 90, 'brandon@gmail', 'bg2398');

    expect(engineer.getRole()).toEqual("Engineer");
});