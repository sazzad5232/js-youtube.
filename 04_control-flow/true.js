// const userEmail = "w@gmail.com"

// if(userEmail){
//     console.log("got user email");  //got user email
// }else{
//     console.log("don't have user email");
// }

// const userEmail = ""

// if(userEmail){
//     console.log("got user email");  //don't have user email
// }else{
//     console.log("don't have user email");
// }

// falsy values
// false, 0, -0, "", BigInt 0n, null, undefined, Nan.

// truthy values
// "0", "false", " "-string er vitore space thakleo, [], {}, function(){}.

const userEmail = ""
if (userEmail.length === 0){
    console.log("array is empty");  // array is empty.
}

const emptyObj = {}
if(Object.keys(emptyObj).length === 0){
    console.log("object is empty"); //object is empty
}

// false == "" //true

// 0 == "" //true

// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = /5 ?? 10 // ans 5
// val1 = null ?? 10 // ans 10
// val1 = undefined ?? 10 // ans 10
val1 = null ?? 10 ?? 30 // ans 10

console.log(val1) 

// Terniary Operator

// condition ? true: false

const icePrice = 100
icePrice<= 80? console.log("less than 80"): console.log("more than 80")  //more than 80
