// importing the Employee constructor 
const Employee = require('./Employee');

// intern constructor extends the employee constructor 
class Intern extends Employee  {
    constructor (name, id, email, school) {
        // this is calling the employee constructor
        super (name, id, email); 

        this.school = school; 
    }

    // returning the school from input 
    getSchool () {
        return this.school;
    }

    // override the employee role to intern
    getRole () {
        return "Intern";
    }
}

// to be exported 
module.exports = Intern; 
