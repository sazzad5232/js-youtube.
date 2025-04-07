const score = 400
const balance = new Number(100)

console.log(balance)
console.log(score)

console.log(balance.toString().length)//3
console.log(balance.toFixed(2)) //100.00 this formula is used when u make a e-commerce website//

const otherNumber = 23.8962

console.log(otherNumber.toPrecision(3))//23.9 eta carefully use korte hobe jodi on 1123.8962 hoi ans 1.12e+3 hobe

const hundreds = 1000000
console.log(hundreds.toLocaleString())//1,000,000 us er value asbe
console.log(hundreds.toLocaleString('en-IN'))//10,00,000 IND value asbe

// +++++++++++++++++++++ Maths +++++++++++++++++++++++ //

console.log(Math)
console.log(Math.abs(-4)) // 4 ja minus ke plus hisabe dekhabe
console.log(Math.round(4.6)) // 5 ja use korai best cause .5 er upore gale porer number hobe
console.log(Math.ceil(4.2)) // 5 ja 4 er por dosomik aslei next number hobe jemon 5, use na korai valo
console.log(Math.floor(4.8)) // 4 ja .5 er besi holeo 4 hobe karon purno number hote hobe, use na korai valo
console.log(Math.min(4,3,6,8)) //3
console.log(Math.max(4,3,6,8)) //8

console.log(Math.random()) // 0-1 er modhe value hobe
console.log((Math.random()*10)+1)
console.log(Math.floor(Math.random()*10)+1) // video dekhe bujte hobe na bujle

const min = 10
const max = 20

console.log(Math.floor(Math.random()*(max-min +1))+min)//13,19,18 evabe ek bar ek value asbe