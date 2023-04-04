// importing the Employee constructor 
const Employee = require('./Employee');

// manager constructor extends the employee constructor 
class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        // calling the employee constructor
        super (name, id, email); 
        
        this.officeNumber = officeNumber; 
    }

    // override the employee role to manager 
    getRole () {
        return "Manager";
    }
}

// to be exported 
module.exports = Manager; 