
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

function calculateCartPrice(...num1){
    return num1
}
console.log(calculateCartPrice(300,400,500))// [300,400,500] (...num1) eta likhar fole array er modhe ans hobe. 

function calculateCartPrice(val1,val2,...num1){
    return num1
}
console.log(calculateCartPrice(300,400,500,5002)) // [500,5002] 

const user = {
    username:"hitesh",
    price:199
}

function handleObject(anyobject){
 console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)
}
handleObject(user) //username is hitesh and price is 199
handleObject({
    username:"sam",
    price:399
}) //username is sam and price is 399

const myNewArry =[300,400,500,200]

function returnSecondValue(){
    return myNewArry[2]
}

// console.log(returnSecondValue(myNewArry))  //500

console.log(returnSecondValue([300,400,500,200])) // 500 ei 2 vabe kora jai.
