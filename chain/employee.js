// employee constructor 
class Employee {
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email 
    }

    // returning name from the input
    getName () {
        return this.name;
    }

    // returning ID from the input
    getId () {
        return this.id;
    }   

    // returning email from the input
    getEmail () {
        return this.email;
    }

    // returning the employee type 
    getRole () {
        return 'Employee'; 
    }
};

// to be exported 
module.exports = Employee; 