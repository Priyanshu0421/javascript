let score = "33abc"
let score1 = null
let score2 = undefined
let score3 = true

// console.log(typeof score);
// console.log(typeof (score1));
// console.log(typeof (score2));
// console.log(typeof (score3));

let valueInNumber = Number(score) // convets into Nan if string contains elements other than number

let valueInNumber1 = Number(score1) // converts null into 0

let valueInNumber2 = Number(score2) // converts undefined into Nan

let valueInNumber3 = Number(score3) // true = 1 and false = 0

// console.log(typeof valueInNumber3); 

// console.log(valueInNumber3);  


// "33" => 33
// "33ab" => Nan
//  true => 1 & false => 0


let isLoggedIn = ""

let booleanIsLoggedIn = Boolean(isLoggedIn)

console.log(booleanIsLoggedIn);
