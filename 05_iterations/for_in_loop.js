const myObject  = {
    js : 'javascript',
    cpp : 'c++',
    rb : 'ruby',
    swift : 'swift by apple'
}

// for (const key in myObject) {
//     console.log(key);              -> to get key pair in the object
// }


// for (const key in myObject) {
//     console.log(`${key} is shortcut for ${myObject[key]}`);         -> myObject[key] to get value in the object
// }

const myArr = ["rb","swift","java","kotlin","flutter"]

// for (const key in myArr) {
//     console.log(key);                 // -> o/p => 0,1,2,3,4

// }


// to get actual value of the Array

for (const key in myArr) {
    console.log(myArr[key]);
}