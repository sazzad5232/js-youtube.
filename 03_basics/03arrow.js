const user = {
    username:"hitesh",
    price:999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`)
        console.log(this)  //hitesh , welcome to website
        // {
        //   username: 'hitesh',
        //   price: 999,
        //   welcomeMessage: [Function: welcomeMessage]
        // }
        // sazzad , welcome to website
        // {
        //   username: 'sazzad',
        //   price: 999,
        //   welcomeMessage: [Function: welcomeMessage]
        // }
    }
}

// user.welcomeMessage()  //hitesh , welcome to website

// user.username = "sazzad"
// user.welcomeMessage()  //sazzad , welcome to website

console.log(this)  //{}

function chai (){
    console.log(this) // {} niche jodi chai() na likhi.
}

// chai()//<ref *1> Object [global] eisob likha asbe.

// const addTwo = (num1,num2)=>{
//   return num1 + num2  //  karli braket{} eta likle must return likte hobe. 
// } // eta basic type.
// console.log(addTwo(5,2)) //7

// const addTwo = (num1,num2) =>  num1 + num2 
// console.log(addTwo(5,2))//7

// const addTwo = (num1,num2) => (num1 + num2)
// console.log(addTwo(5,2))//7

//ei niom e user name use korte hole//
const addTwo = (num1,num2) => ({username:"sazzad"})
console.log(addTwo()) //{ username: 'sazzad' }
