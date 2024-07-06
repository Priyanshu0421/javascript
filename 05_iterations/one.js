const array = [1,2,3,4,5,6,7,8,9,10]

// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
//     console.log(element);
// }


// for (let i = 0; i < 5; i++) {
//     console.log(`outer loop : ${i}`);
//     for (let j = 0; j < 5; j++) {
//         console.log(`inner loop with ${j} and outer loop is : ${i}`);
//     } 
// }

//  print the table of the 13

// for (let i = 1; i < 10; i++) {
//     const element = 13 * i;
//     console.log(`13 * ${i} = ${element}`);
// }


//  break and Continue

// 1. Break

// for (let i = 0; i < 20; i++) {
//     const element = i;

//     if(element == 5){
//         console.log("Detected 5");
//         break;
//     }
//     console.log(element);
// }

//  o/p = 0,1,2,3,4,Detected 5

// 2. Continue

// for (let i = 0; i < 20; i++) {
//     const element = i;
//     if(element == 5){
//         console.log("Detected 5");
//         continue;   // will skip the printing 5 statement because we have applied the continue statement at 5
//     }
//     console.log(element);
// }