//Pulling employee data from the chain file created
const Employee = require('../chain/employee');

test('creates an employee card', () => {
    const employee =  new Employee('Carmen', 90, 'carmen.delgado@gmail.com');
    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee,email).toEqual(expect.any(String));
});


test('gets employee name', () => {
    const employee = new Employee('Carmen', 90, 'carmen.delagado@gmail.com');
   
    expect(employee.getName()).toEqual(expect.any(String));
});


