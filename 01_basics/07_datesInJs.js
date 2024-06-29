let myDate = new Date()

// console.log(myDate);

// console.log(myDate.toDateString());  -> Sat Jun 29 2024

// console.log(myDate.toLocaleString());   -> 6/29/2024, 4:34:41 AM

// console.log(myDate.getDay()).  -> 6

// console.log(myDate.getMonth());   -> 5

// console.log(myDate.toISOString());   -> 2024-06-29T04:37:46.216Z

// console.log(myDate.toJSON());   -> 2024-06-29T04:38:59.261Z
// console.log(myDate.toLocaleDateString());   -> 6/29/2024





// console.log(typeof myDate);    -> Object




//  new Dates

let createdDate = new Date(2023,0,24);
// let createdDate = new Date(2023,0,24 , 5, 3);  -> 1/24/2023, 5:03:00 AM

// let createdDate = new Date("01/14/2023")

// console.log(createdDate.toLocaleString());


/*---------------------------TimeStamp ----------------------*/

let myTimeStamp = Date.now()
// console.log(myTimeStamp);

let newTImeStamp = createdDate.getTime();
// console.log(newTImeStamp);

// let timeInSeconds = Math.floor(Date.now()/1000);

let timeInSeconds = new Date();
// console.log(timeInSeconds.getSeconds());  -> it will give seconds

// console.log(timeInSeconds);


let myString = `Hi Guys Today's Date is ${timeInSeconds.toDateString()} and Time Right now is ${timeInSeconds.getHours()}`

// console.log(myString);


console.log(myDate.toLocaleString('default', {
    era: 'long',
    weekday : 'long'
}));