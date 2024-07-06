const myArr = ["ruby","java","js","swift","kotlin","flutter"]

// myArr.forEach(function (val) {
//     console.log(val);
// })


//  we can use Arrow functions as well

// myArr.forEach( (item) => {
//     console.log(item);
// })


// const printMe = (item) => {
//     console.log(item);
// }

// myArr.forEach(printMe)


// function printMe(item) {
//     console.log(item);
// }

// myArr.forEach(printMe)

// myArr.forEach( (item,index,arr) => {
//     console.log(item,index,arr);
// })


const myCoding = [
    {
        languageName : "JavaScript",
        langiageFileName : "js"
    },
    {
        languageName : "java",
        langiageFileName : "java"
    },
    {
        languageName : "python",
        langiageFileName : "py"
    }
]


//  now we can easily iterate object in the array

myCoding.forEach( (item) => {
    console.log(item.langiageFileName);
})