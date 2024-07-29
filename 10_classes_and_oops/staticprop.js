class User {
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`username is ${this.username}`);
    }
    static createId(){
        return `123`
    }
}

class Teacher extends User{
    constructor(username , email){
        super(username);
        this.email = email;
    }
}
const chai = new User("chai");

const moreChai = new Teacher("chai" , "chai@ex.com");

chai.createId();  // we can't access this as this is static 


// Static properties cannot be directly accessed on instances of the class. 
// Instead, they're accessed on the class itself.


// Static methods are often utility functions, such as functions to create or clone objects, whereas static properties are useful for caches,
//  fixed-configuration, 
//  or any other data you don't need to be replicated across instances.