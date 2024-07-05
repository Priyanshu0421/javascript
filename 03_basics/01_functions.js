function sayMyName(){
    console.log("hitesh");
}

// sayMyName.  -> Refrence of the Function

// sayMyName()  // excecution of the function

// function addTwoNumbers(num1, num2){
//     console.log(num1 + num2);
// }

// addTwoNumbers(3,null).  -> 3

// addtwoNumbers(3,"5").  -> 35

// const result = addTwoNumbers(3,5);

// console.log("Result is: ", result);    -> Result is undefined because function is not returning anything so it will print undefined


function addTwoNumbers(num1,num2) {
    return num1 + num2;
    // console.log("Hitesh"). -> this is unreachable code as it is wriiten after the return statement
}

const result = addTwoNumbers(3,5);

// console.log("Result is: ", result);


function loggedInUser(username = "sam") {  // sam is a default value
    return `${username} just logged in`
}

// console.log(loggedInUser("hitesh"));  -> hitesh just logged in

// console.log(loggedInUser()); // here we are not passing anything so  what will happen 

// o/p is ->> undefined just logged in ->>>> because we haven't yet defined the parameter


//  To avoid the undefined case in the functions we can do 

// console.log(loggedInUser());   //->>> sam just logged in

// console.log(loggedInUser("hitesh"));   //-> hitesh just logged in 

// ->> will override the default value if we will give any value to it otherwise it will take the default value to avoid the undefined case



// function calculateCartPrice(num1) {
//     return num1
// }

function calculateCartPrice(...num1) {
    return num1
}

// console.log(calculateCartPrice(200,500,400,2000)); // in such cases we use spread rest operator
// to make it store in a single array then we can easilt do our operations


// Functions with Objects

const user = {
    username : "sam",
    price: 199
}

function handleObject(anyobject) {
    return `username is ${anyobject.username} and the price is ${anyobject.price}`
}

// console.log(handleObject(user));

// console.log(handleObject(
//     user1 = {
//         username: "hitesh",
//         price: 299
//     }
// ));



//  Functions with the Array

const myNewArray = [200,800,50,2000]

function getSecondValue(getArray) {
        return getArray[1]
}

// console.log(getSecondValue(myNewArray));

console.log(getSecondValue([500,430,32,13,3432,45]));