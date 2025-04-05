const name = "sazzad"
const repoCount = 52

//console.log(name+repoCount+"value") //don't use it//
console.log(`hello my name is ${name} and my repo count is ${repoCount}`) // use this way,use it, it is very very important //

const gameName = new String("sazzad-rh")
console.log(gameName[0]) //s//
console.log(gameName.__proto__)

console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(5)) //d//
console.log(gameName.indexOf("d")) //5//

const newString = gameName.substring(0,4)
console.log(newString)
const anotherStrings = gameName.slice(-1,4)
console.log(anotherStrings)
const newStringOne = "   hitesh   "
console.log(newStringOne)
console.log(newStringOne.trim()) // do some research mdn web docs websites //

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace("%20","-"))

console.log(url.includes("hitesh")) //true//
console.log(url.includes("sazzad")) //false//

console.log(gameName.split("-")) //'sazzad', 'rh' // must search mdn docs strings related varriables//
