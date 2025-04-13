// singleton


// object literals
const mySym = Symbol("key1")

const JsUser = {
    name : "sazzad",
    [mySym] : "myky1",
    age : 18,
    location:"jaipur",
    email : "sr@gmail.com",
    isLoggedIn : false,
    lastLoggedInDays : ["monday","saturday"]
}

console.log(JsUser.email) //  sr@gmail.com, einiom use karai ordinary.
console.log(JsUser["email"]) // sr@gmail.com, einiom use kora standard.
console.log(JsUser[mySym]) // myky1
console.log(typeof JsUser.mySym) //  string

JsUser.email = "sr@chatgpt.com"
Object.freeze(JsUser["email"]) /// eivabe email ke freeze kora jai.
JsUser.email = "sr@chatgpt52.com"  // eivabe value change kora jai.
console.log(JsUser["email"])//  sr@chatgpt52.com

JsUser.greeting = function(){
    console.log("hello JS user");
}

JsUser.greetingTwo = function(){
    console.log(`hello JS user,${this.name}`);
}

console.log(JsUser.greeting()) //  hello JS user

console.log(JsUser.greetingTwo())  // hello JS user,sazzad
