// //if
// const isUserloggedIn = true


if(5==="5"){
   console.log("executed");  
}

//(5=="5")ba(!3=2) hole execute hobe, ar (5==="5") hole execute hobe na.
//  <,>,<=,>=,==,===,!== 

const tempreature = 41
if(tempreature===51){
    console.log("less than 50")
}else{
    console.log("tempreature is above or equal 50")
}

const score = 200
if (score>100){
    let power = "fly"
    // console.log(`user power:${power}`) //user power:fly but console.log(`user power:${power}`) eta {} braketar bahire likle execute hobe na let use korle. 
}
// console.log(`user power:${power}`)

if (score>100){
    var power = "fly"
    console.log(`user power:${power}`) //user power:fly but console.log(`user power:${power}`) eta {} braketar bahire likle execute hobe var use korle,tai eta na use korai valo. 
}
console.log(`user power:${power}`)

const balance = 1000
//if (balance>500)console.log("test"),console.log("test2"); // eivabe code likha jabe na never ever.

// if(balance<500){
// console.log("less than 500")
// }else if(balance<750){
//     console.log("less than 750")
// }else if(balance<900){
//     console.log("less than 900")
// }else{
//     console.log("less than 1100") //less than 1100 cause const balance = 1000.
// }

// const isUserloggedIn = true
// const debitCard = true
// if(isUserloggedIn && debitCard && 5==5){
//   console.log("allow to buy course")  //allow to buy course
// }

// const isUserloggedIn = true
// const debitCard = true
// if(isUserloggedIn && debitCard && 5==2){
//   console.log("allow to buy course")  //code execute hobe na.
// }

const isUserloggedIn = true
const debitCard = true
const loggedinFromGoogle = false
const loggedinFromEmail = true

if(isUserloggedIn && debitCard && 5==5){
  console.log("allow to buy course") 
}

if (loggedinFromGoogle || loggedinFromEmail ){
    console.log("user logged in") //user logged in
}
