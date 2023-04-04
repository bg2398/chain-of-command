// importing the Employee constructor 
const Employee = require("./Employee");

// engineer constructor extends the employee constructor 
class Engineer extends Employee {
    constructor (name, id, email, github) {
        // calling the employee constructor 
        super (name, id, email);

        this.github = github; 
    }

    // returning github from the input 
    getGithub () {
        return this.github;
    }

     // override the employee role to engineer
    getRole () {
        return "Engineer";
    }
}

// to be exported 
module.exports = Engineer;