const user = {
    username: 'Hitesh',
    loginCount : 8,
    signedIn : true,

    getUserDetails : function(){
        console.log('Get user details form the user Database');
        // console.log(`The user name is ${this.username}`);
        console.log(this);
    }
}

function User(username,loginCount,isLoggedin){
    this.username = username
    this.loginCount = loginCount
    this.isLoggedin = isLoggedin

    this.greeting = function(){
        console.log(`Welcom ${this.username}`);
    }

    return this
}

// console.log(user.username);
// console.log(user.getUserDetails());

const userOne = new User("Hitesh" , 8 , true)
const userTwo = new User ("javascript" , 7 , false)
// console.log(userOne);
// console.log(userTwo);

console.log(userOne.constructor);