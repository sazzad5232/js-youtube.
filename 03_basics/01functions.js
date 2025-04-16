
function sayMyName(){
console.log("H");
console.log("I");
console.log("T");
console.log("E");
console.log("S");
console.log("H");
}

//sayMyName() ans HITESH hobe.

// function addTwoNumbers(number1,number2){
// console.log(number1+number2)
// }

// addTwoNumbers(3,4) // 7
//addTwoNumbers(3,"4") // 34
//addTwoNumbers(3,"a") //3a
//addTwoNumbers(3,null) //3
//const result= addTwoNumbers(5,2) // undefined

// console.log(result) //

function addTwoNumbers(number1,number2){
    let result = number1 + number2
    return result
    }

const result= addTwoNumbers(5,2)

// console.log(result) //7

function loginUserMessage(username){
    return `${username} just logged in`
}
console.log(loginUserMessage("hitesh")) //hitesh just logged in
console.log(loginUserMessage()) // undefined just logged in

// function loginUserMessage(username){
//    if(username===undefined){
//     console.log("please enter a username")
//     return
//    } return `${username} just logged in`
// }

//undefined

function loginUserMessage(username){
       if(!username){
        console.log("please enter a username")
        return
       } return `${username} just logged in`
    }

console.log(loginUserMessage()) // undefined 