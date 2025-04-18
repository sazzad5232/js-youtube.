var c = 300
let a = 500

if (true){
    let a = 10
    const b = 20
    var c = 30
    console.log("inner:", a) //inner: 10
    
}
console.log(a)  //500 
// console.log(b)
console.log(c) //30 eitai var er problem tai var na use korai valo

//video 22//

 function one(){
  const username= "hitesh"
  function two(){
    const website ="youtube"
    console.log(username) // hitesh, vitorer function e vairer function er vaiables ke accese korte parbe.
  }
//   console.log(website) //  website is not defined cause unc two er kaj } braketer por ei ses, tai eiti exicute hobe na.
  two()
 }
//  one()

 if (true){
    const username = "hitesh"
    if(username){
        const website = "  youtube"
        console.log(username+website)//hitesh  youtube
    }
    console.log(username) //hitesh
    // console.log(website) // website is not defined cause unc two er kaj } braketer por ei ses, tai eiti exicute hobe na.
 }
 
//++++++++++++++++++++++++++++ interesting ++++++++++++++++++++++++++++++//

//type-1

console.log(addone(5))  // 6
function addone(num){
    return num + 1 
}

//type-2

// console.log(addTwo(5)) // Cannot access 'addTwo' before initialization, upore ei type er khatre addTwo console kore ber kora jabe na.
const addTwo = function(num){
    return num + 2
}
console.log(addTwo(5))   // 7
