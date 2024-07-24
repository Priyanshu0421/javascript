const promiseOne = new Promise(function(resolve , reject){
    // Do an Async Task
    //  DB calss,cryptographic, network

    setTimeout(function (){
        // console.log("Async task is complete");
        resolve();   // it will always after the settimeout function because it depends on the above func then only resolve will work 
    }, 1000)
})

promiseOne.then(function () {
    // console.log("promise consumed");
})


// new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log("Hello");
//         resolve();
//     }, 1000)
// }).then(function(){
//     console.log("finally promise is consumed");
// })


const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function (){
        resolve({
            'username' : "Hitesh",
            'email' : "chaiAurCode@example.com"
        })
    },1000)
})

// promiseThree.then(function(user){
//     console.log(user);
// })

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({
                username: 'hitesh',
                email : 'hitesh@gmail.com',
                password: '123'
            })
        }else{
            reject('Error : Something went wrong')
        }
    },1000)
})

// promiseFour.then(function(user){
//     console.log(user);
//     return user.username
// }).then((username) => {
//     console.log(username);
// }).catch((error) => {
//     console.log(error);
// }).finally('The promise function is either resolved or rejected')


const promseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({
                username: 'hitesh',
                email : 'hitesh@gmail.com',
                password: '123'
            })
        }else{
            reject('Error : Something went wrong')
        }
    },1000)
})

// async function consumePromiseFive(){
//     try {
//         const response = await promseFive;
//         console.log(response);
//     } catch (error) {
//         console.log(error);
//     }
// }

// consumePromiseFive();



// async function getAllUsers(){
//     try {
//         const response = await fetch('https://randomuser.me/api/')
//         console.log(typeof response);
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

// getAllUsers();

fetch('https://randomuser.me/api/').then((response) => {
    return response.json();
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))