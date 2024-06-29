const score  = 400;

// console.log(score);

const balance = Number(score)
// console.log(balance);

// console.log(balance.toString().length);

// console.log(balance.toFixed(2));     -> 400.00

const otherNumber = 23.8966
// console.log(otherNumber.toPrecision(4));   -> 23.90


const hundreds = 10000000
// console.log(hundreds.toLocaleString('en-In'));


/*-------------------Maths--------------------------*/

// console.log(Math)
// console.log(Math.abs(-4));  -> 4

// console.log(Math.abs(4));  -> 4

// console.log(Math.round(4.3));  -> 4
// console.log(Math.round(4.6));   -> 5

// console.log(Math.ceil(4.2));   -> 5
// console.log(Math.floor(4.9));   -> 4




//  Random

//  it always gives values b/w 0 and 1

// console.log(Math.random());  


//  to get the value in the range 

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1) + min));