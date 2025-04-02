// primitive data types
// 7 types- string, number, boolean, null, undefined, symbol, BigInt.


const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol("123")
const anotherId = Symbol("123")
console.log(id === anotherId);
const bigNumber = 345678952n


//reference (non primitive)
//array, objects(know well if you master at JS), function.

const heros = ["batman","uperman", "spiderman"] //arrays//

let myObj = {
    name:"sazzad",
    age:22,

} //objects

const myFunction = function(){
    console.log("hello world");
}

console.log(typeof myFunction);

// ++++++++++++++++++++++++++++++++++++++++++++++++
//stack & heap memory
// stack(primitive), heap (non-primitive)
let myYc = "hc.com"

let anothername = myYc

anothername = "cac"

console.log(anothername);
console.log(myYc);

let userOne = {
    email:"user@google.com",
    upi:"user@google.ybl"
}

let userTwo = userOne

userTwo.email = "sr@google.com"

console.log(userOne.email);
console.log(userTwo.email);