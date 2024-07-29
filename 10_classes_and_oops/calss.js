function setUsername(username) {
    this.username = username;
    console.log("called");
}

function createUser(username,email,password){

    // setUsername(username);  // this fucntion will be called but we can't access the username 

    // setUsername.call(username) // now this will be callled but stil we can't access the username

    setUsername.call(this,username);  // now from this it will point to correct context username otherwise in above cases it was geting out of th ecall stack after the calling of the fuction

    this.email = email
    this.password = password
}

const chai = new createUser("chai" , "chai@gmail.com" , 123);

console.log(chai);