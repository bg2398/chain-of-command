//Pulling employee data from the chain file created
const Employee = require('../chain/employee');

test('creates an employee card', () => {
    const employee =  new Employee('Carmen', 45, 'carmen.delgado@gmail.com');
    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee,email).toEqual(expect.any(String));
});

//placeholder names as well as adding employees section
test('gets employee name', () => {
    const employee = new Employee('Carmen', 45, 'carmen.delagado@gmail.com');
   
    expect(employee.getName()).toEqual(expect.any(String));
});

test('gets employee ID', () => {
    const employee = new Employee('Carmen', 45, 'nicole.elisaw@gmail.com');

    expect(employee.getId()).toEqual(expect.any(Number));
});


test('gets employee email', () => {
    const employee = new Employee('Carmen', 45, 'nicole.elisaw@gmail.com');

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});

test('gets role of employee', () => {
    const employee = new Employee('Carmen', 45, 'nicole.elisaw@gmail.com');

    expect(employee.getRole()).toEqual("Employee");
}); 
