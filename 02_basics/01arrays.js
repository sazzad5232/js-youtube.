const myArr = [0,1,2,3,4,5]
const myHeros = ["batman","spiderman","superman"]
const myArr2 = new Array(1,2,3,4)

console.log(myArr[3])// 3

//Array methods//

myArr.push(6,7)  //[0,1,2,3,4,5,6,7]
myArr.pop()  //last value keta nibe [0,1,2,3,4,5,6]
console.log(myArr)

myArr.unshift(8)   //[8,0,1,2,3,4,5]
myArr.shift()    //[0,1,2,3,4,5]
console.log(myArr)

console.log(myArr.indexOf(5))  // 5 index (9) dide ba (12) dile ta -1 answer hobe, karon 9 ba 12 porjonto number nei array te

const newArr = myArr.join()
console.log(myArr) // [0,1,2,3,4,5,6]
console.log(newArr)  // 0,1,2,3,4,5,6
console.log(typeof newArr)  // string

//slice & splice //

console.log("A", myArr)
const myn1 = myArr.slice(1,3)
console.log(myn1)  // A[0,1,2,3,4,5,6] ans hobe [1,2] ei niyome index 1 theke suru kore 2 porjonto nibe 3 bad/kata jabe

console.log("B",myArr)
const myn2 = myArr.splice(1,3)
console.log(myn2)   // B[0,1,2,3,4,5,6] ans hobe [1,2,3] 

console.log("C",myArr) //  C [0,4,5,6] ans hobe, eti bujte hobe bar bar video theke karon etar array ei change hoye giye [0,4,5,6] hobe.
console.log(myn2) //[1,2,3]