const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id);
// console.log(anotherId);

// console.log(id === anotherId);


const bigNumber = 34567898765n  // this n => specifies bign number

// console.log(bigNumber);


// Arrays 

const heros = ["Shaktiman", "nagraaj", "doga"]

let myObj = {
    name: "hitesh",
    age: 22
}
// console.log(heros);
// console.log(myObj);

// console.log(myObj.name);


//  we can treat functions as variable in javascript  

const myFunction = function(){
    console.log("Hello World");
}

// myFunction() //op => Hello World

// console.log(typeof myFunction);   //=> function

// console.log(typeof heros);  // => object

// console.log(typeof null);   //o/p => object


/*--------------------------------Memory and Stacks -----------------------*/

                //    Memory
                // 1. Stack(primitive Data type)            2. Heap(Non - primitive Data type)
                //        Copy of the Value                            Refrence of the Value



//  Primitive Data Type 

let name = "hitesh"
let anotherName = name;
anotherName = "priyanshu"


// both will show the different names because here we are getting copy of the value
// so by changing one will not effect the second value

// console.log(name);
// console.log(anotherName); 



let userOne = {
    email : "user@google.com",
    upi   : "user@ybl"
}

let userTwo = userOne

userTwo.email = "hitesh@google.com"

// both will show the same email because here we are getting refrence of the value
// so by changing one will change the second value as well

console.log(userOne.email);
console.log(userTwo.email);