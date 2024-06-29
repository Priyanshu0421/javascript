// arrays 

const myArr = [1,2,3,4,5]

const newArr = [1,2,3,true,"shaktiman","Hello"]

const myArr2 = new Array(1,2,3,4)

// console.log(newArr);


// Array methods

// myArr.push(6)

// myArr.pop()

// myArr.unshift(9)

// myArr.shift()
// myArr.shift()


// console.log(myArr);

// console.log(myArr.includes(9));
// console.log(myArr.includes(4));

// console.log(myArr.indexOf(4));

const newArr2 = myArr.join()
// console.log(typeof newArr2);   -> Stirng
// console.log(newArr2);   -> 1,2,3,4,5


console.log("A ", myArr);

const myn1 = myArr.slice(1,3)

console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1,3)
console.log("C ", myArr);
console.log(myn2);

