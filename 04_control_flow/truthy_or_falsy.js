const userEmail = "h@hitesh.ai"

// if(userEmail){
//     console.log("Got ur Email");
// }else{
//     console.log("Please provide your email");
// }


// const one = ""   -> falsy Values

const one = []  // truthy values

// if(one){
//     console.log("Hello, how u doin");
// }else{
//     console.log("oh, ho");
// }

//  Falsy Values

// false,0,-0,BigInt 0n,"",null,undefined,NaN

// Some examples of the truthy values

// "0",'false'," ", [], {}, function(){} ........


//  How to determine if the Array is empty or not?

const arr = []

// if(arr.length === 0){
//     console.log("Array is Empty");
// }

const emptyObject = {
    name : "hitesh",
    occupation: "nothing",
    fullname : {
        firstName: "hitesh",
        lastName: "Choudhary"
    }
}

// if(Object.keys(emptyObject).length === 0){
//     console.log("Object is Empty");
// }else{
//     console.log(Object.keys(emptyObject.fullname).length);    // -> 1
// }


// Nullish coalescing operator (??) : null and undefined

let val1;
// val1 = 5 ?? 10

// val1 = null ?? 10

// val1 = null ?? undefined

val1 = null?? 10?? 20

// console.log(val1);


// Ternary operator 

// Syntax :-> condition ? true : false

const iceTeaPrice = 100

iceTeaPrice >= 80 ? console.log("price more than 80") : console.log("price less than 80");