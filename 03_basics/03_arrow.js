const user = {
    username: "hitesh",
    price: 199,
    welcomeMessage: function(){
        console.log(`${this.username} , welcome to the website`);  // this give us current context
        console.log(this);
    }
}

// user.welcomeMessage()

// user.username = "sam"

// user.welcomeMessage() // -> sam ,  welcome to the website

// console.log(this);



// this keyword in the functions

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// }

// chai()




//  Arrow Function

const chai = () => {
    let username = "hitesh";
    return username
}

// console.log(chai());

const addTwoNumbers = (num1,num2) => {
    return num1 + num2;
}

// console.log(addTwoNumbers(3,4));


//  implicit function ->  no need to write return function

const addTwo = (num1,num2) => (num1  + num2)

console.log(addTwo(3,4));