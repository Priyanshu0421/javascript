const val  = Math.PI;

// console.log(Object.getOwnPropertyDescriptor(Math , "PI"));  // here we can't override the value of the Math.PI 

const chai = {
    name : "ginger chai", 
    price : 250,
    isAvailable: true
}

// console.log(Object.getOwnPropertyDescriptor(chai , "name"));

// Object.defineProperty(chai , 'name' , {
//     writable : false,
//     enumerable : false,
//     configurable : true
// })

// console.log(Object.getOwnPropertyDescriptor(chai , 'name'));

for (let [key , value] of Object.entries(chai)){
    console.log(`${key} : ${value}`);
}