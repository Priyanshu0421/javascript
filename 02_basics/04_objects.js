const tinderUser = new Object()  // singleton Object

const tinderUser1 = {}  // Non-Singleton Objects

// console.log(tinderUser); -> {}


// console.log(tinderUser1);  -> {}


tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false


// console.log(tinderUser);


//  Nested Objects


// const regularUser = {
//     email: "some@gmail.com",
//     fullName : {
//         userFullName: {
//             firstName: "hitesh",
//             lastName: "Choudhary"
//         }
//     }
// }

// console.log(regularUser.fullName.userFullName.firstName);


// Operations on javascripts Objects

const obj1 = {1: "a" , 2: "b"};
const obj2 = {3 : "c" , 4: "d"};

const obj5 = Object.assign({},obj1,obj2)


// console.log(obj5);


// other than this method we can use the spread operator which will also the same work

const obj4 = {...obj1,...obj2}

// console.log(obj4);


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    }
]


users[1].email;

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));


//  to find object has it's own property or not?

console.log(tinderUser.hasOwnProperty('isLoggedIn'));
