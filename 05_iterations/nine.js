// video-30 array.reduce()
const myNums = [1,2,3]

// const myAdd= myNums.reduce(function (acc, curval){
    // return acc + curval
// }, 0)
// console.log(myAdd) //6

// const myAdd= myNums.reduce(function (acc, curval){
//     console.log(`acc: ${acc} and current val ${curval}`); //acc: 0 and current val 1,acc: 1 and current val 2,acc: 3 and current val 3    
//     return acc + curval
// }, 0)
// console.log(myAdd)

// const myAdd= myNums.reduce(function (acc, curval){
//     console.log(`acc: ${acc} and current val ${curval}`); //acc: 3 and current val 1,acc: 4 and current val 2,acc: 6 and current val 3    
//     return acc + curval //ei niom details e likha bujar jonno
// }, 3)
// console.log(myAdd) //9

const myAdd = myNums.reduce((acc,curval) => acc+curval,0)
// console.log(myAdd) //6 eta smart way code likhar.

const shoppingCart = [
    {
        itemName:"js course",
        price:2999,
    },
    {
        itemName:"py course",
        price:999,
    },
    {
        itemName:"c++ course",
        price:999,
    },
    {
        itemName:"ml course",
        price:5999,
    },
]

const priceTopay = shoppingCart.reduce((acc,itemName)=> acc + itemName.price,0)
console.log(priceTopay); //10996
