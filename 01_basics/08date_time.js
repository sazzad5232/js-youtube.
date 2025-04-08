// Dates

let myDate = new Date()
console.log(myDate.toString())  
console.log(myDate.toDateString())// tue apr 08 2025
console.log(myDate.toLocaleString()) //4/8/2025 3:08:22pm
console.log(typeof myDate) //object

let myCreatedDate = new Date(2023,0,23)//2023-01-23... js e month 0 te start hoi tai JAN = 0.

console.log(myCreatedDate.toDateString()) //mon jan 23 2023

// let myIreatedDate = new Date("2025-01-22") // 1/22/2025, 12:00:00 AM
let myIreatedDate = new Date("01-22-2025") // 1/22/2025, 12:00:00 AM
// console.log(myIreatedDate.toLocaleString())

let myTimeStamp = Date.now()
console.log(myTimeStamp)
console.log(myIreatedDate.getTime())
console.log(Date.now()/1000) // 1744128070.934
console.log(Math.floor(Date.now()/1000))//1744128070

let newDate = new Date()
console.log(newDate.getFullYear())//2025

//`${newDate.getDay()} and the time`

newDate.toLocaleString('default',{
    weekday:"long"
})
console.log(newDate) //2025-04-08T16:23:58.214Z