//  obect literals

mySym = Symbol("key1")

const jsUser = {
    name: "hitesh",
    "full name": "hitesh Choudhary",
    age: 18,
    [mySym] : "myKey1",
    location: "jaipur",
    email: "hiesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Thursday","Friday","Monday"]
}


// console.log(jsUser.name);
// console.log(jsUser["full name"]);  // another method to get access of the key value pair of the objects
// console.log(jsUser["email"]);

// console.log(jsUser.mySym);
// console.log(typeof jsUser.mySym);  //this will show String 


// console.log(jsUser[mySym]);


// if u want to override the values in the objects

jsUser.email = "hitesh@chatgpt.com"

// console.log(jsUser.email);

// Now if u want to freeze the object so that no changes can be done 

// Object.freeze(jsUser)

jsUser.email = "hitesh@microsoft.com"

// console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hello, JS user");
}

jsUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`);
}

// console.log(jsUser.greeting);
console.log(jsUser.greetingTwo());
