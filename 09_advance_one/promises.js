// 1st example
const promiseOne = new Promise (function(resolve, reject){
    // Do an async task
    // DB calles, cryptography, network
    setTimeout(function(){
        console.log('Async task is complete')    // Async task is complete
    resolve() //Async task is complete, promise consumed 2 tai asbe resolve likhle
    },1000)
})
promiseOne.then(function(){
    console.log("promise consumed"); 
})
// 2nd exam..
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2"); //Async task 2, Async 2 resolved 
    
    resolve()
},1000)
}).then(function(){
    console.log("Async 2 resolved"); 
    
})

//3rd

const promiseThree = new Promise( function(resolve, reject){
    setTimeout(function(){
        resolve({username:"chai",email:"hc@gmail.com"})  //{ username: 'chai', email: 'hc@gmail.com' }
    },1000)
})
promiseThree.then(function(user){
console.log(user);

})

//4th

const promise4 = new Promise(function(resolve, reject) {
   setTimeout(function(){
     let error = false
     if(!error){
        resolve({username:"hitesh", password:"52"})  // { username: 'hitesh', password: '52' } hitesh hobe jodi let error= false hoi.
     }else{
        reject('ERROR: Something went wrong')  // ERROR: Something went wrong hobe jodi let error=true hoi.
     }
   },1000) 
})
promise4.then((user)=>{
    console.log(user);
    return user.username
    
}).then((username)=>{
    console.log(username);
    
}).catch(function(error){
    console.log(error);
    
}).finally( () => console.log("The promise is either resolved or rejected"))  //The promise is either resolved or rejected.

//5th method

const promiseFive = new Promise(function(resolve, reject){
     setTimeout(function(){
     let error = true
     if(!error){
        resolve({username:"javascript", password:"5262"})  
     }else{
        reject('ERROR: JS went wrong')  
     }
   },1000) 
})
async function consumePromiseFive(){
    const response = await promiseFive
    console.log(response);
    
}consumePromiseFive()  //{ username: 'javascript', password: '5262' } error= false hole. error=true hole error hobe.

async function consumePromiseFive(){
   try{ const response = await promiseFive
    console.log(response);    //ERROR: JS went wrong asbe ans. error= true holeo, tai eivabe error handle kora jai error asle.
}catch (error){
    console.log(error);  
    }
    
}
consumePromiseFive()

// async function getAllUsers(){
// try{ 
//     const response = await fetch('https://jsonplaceholder.typicode.com/users') // ei link e je code ache ta show korbe terminal e. 
//  const data = await response.json()
//  console.log(data);
// }catch(error){
//     console.log('E: ', error);
//     }
// }
// getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users') //ei link e je code ache ta show korbe terminal e. eivabe o kora jai, but terminal code file run korle ei link er code sobar agai run hoi keno ta depth e jante hobe.
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))
