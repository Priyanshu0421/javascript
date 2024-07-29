const myName = "hitesh    "
// console.log(myName.length);
// console.log(myName.trim().length);

const myHeros = ["Spiderman" , "Thor"]

const heroPower = {
    "Thor" : "hammer",
    spiderman : "Sling",

    getSpideyPower : function(){
        console.log(`The spidey power is ${this.spiderman}`);
    }
}

Object.prototype.hitesh = function(){  // in this we add function hitesh in all the Objects as all the things in js is Objects 
    console.log(`Hitesh in all the Objects`);
}

// heroPower.hitesh();

// myHeros.hitesh();


// inheritence 

const User = {
    name: "chai",
    email : 'chai@google.com'
}

const Teacher = {
    makeVide : true
}

const TeacherSupport = {
    isAvailable : false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeacherSupport
}

Teacher.__proto__ = User

//  modern SyntaxError

Object.setPrototypeOf(TeacherSupport,Teacher)

let anotherUsername = "ChaiAurCode"

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`The Length is ${this.trim().length}`);
}

anotherUsername.trueLength();
"hitesh".trueLength();
"ram   ".trueLength();