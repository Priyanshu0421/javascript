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
//  "" => false and "hitsh" => true


// let isLoggedIn = 0

// let booleanIsLoggedIn = Boolean(isLoggedIn)

// console.log(booleanIsLoggedIn);



let someNumber = 33

let numberInString = String(someNumber)

// console.log(numberInString);
// console.log(typeof numberInString);


/*-----------------Operations----------------------*/

let value = 3
let negvalue = -value

// console.log(negvalue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);


let str1 = "hello"
let str2 = " hitesh"

let str3 = str1 + str2

// console.log(str3);


// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

// console.log(3 + 4 * 5 % 3);

let gameCouunters = 100
gameCouunters++
console.log(gameCouunters);