// if(true){
//     let a = 10;
//     const b = 20;
//     var c = 30;
// }

// // console.log(a);  ->>> a is not defined
// // console.log(b);  ->>> a is not defined
// console.log(c);   // ->>> 30

// var c = 300;
 
// if(true){
//     let a = 10;
//     const b = 20;
//     var c = 30;
// }

// // console.log(a);  ->>> a is not defined
// // console.log(b);  ->>> a is not defined
// console.log(c);   // ->>> 30. and not 300 this is because it will get value of c inside function first 

 let a = 300;   // ->> Global scope

if(true){
    let a = 10;
    const b = 20;
    var c = 30;   // -> local Scope
    // console.log("Inner a: ", a);
}

// console.log("Outer a: ", a);



function one() {
    let username = "hitesh";

    function Two() {
        const website = "youtube";
        console.log(username);
    }
    // console.log(website);  ->> here website is not defined as parent cannot acces child elements
    Two()
}

// one()


//  more on closure

if(true){
    const username = "hitesh"
    if(username === "hitesh"){
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);  ->. out of the scope
}

// console.log(username);  -> out of the scope


console.log(addOne(5));  //-> this will work before the the call of the function

function addOne(num1) {
    return num1 + 1;
}

// console.log(addTwo(5));   //->> this will not work because of the hoisting

const addTwo = function(num2) {
    return num2 + 2;
}