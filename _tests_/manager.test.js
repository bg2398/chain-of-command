// using the Manager constructor file
const Manager = require('../chain/Manager');

// creating the manager object  
test('creates an Manager object', () => {
    const manager = new Manager('Brandon', 98, 'brandon@gmail', 23);
    
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

// gets the role from getRole()
test('gets role of employee', () => {
    const manager = new Manager('Brandon', 98, 'brandon@gmail.com');

    expect(manager.getRole()).toEqual("Manager");
}); 