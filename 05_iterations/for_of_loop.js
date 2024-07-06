const arr = [1,2,3,4,5];

// for(const num of arr){
//     console.log(num);
// }


const greeting = "Hello World"

// for(const greet of greeting){
//     console.log(`Each char is ${greet}`);
// }


const map = new Map();

map.set("In" , "India")
map.set("USA" , "united States Of America")
map.set("Fra" , "France")

// for (const key of map) {
//     console.log(key);
// }

for (const key in map) {
    console.log(key);
}

// for (const [keys , value] of map) {
//     console.log(`${keys}  -> ${value}`);
// }


const myObject = {
    game1 : 'NSF',
    game2 : 'Fifa 21'
}

// for (const [keys] of myObject) {
//     // console.log(keys);      -> Objects are not iterable
// }