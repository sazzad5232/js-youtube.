// video-30  filter map//

const coding = ["js","ruby","java","py","cpp"]

const values = coding.forEach( (item) =>{
    // console.log(item);   //js ruby java py cpp, eta value return kora na.
    return item
})
// console.log(values);

//filter type-1
// const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNums= myNums.filter( (num) => num > 4)
// console.log(newNums);  // [5,6,7,8,9,10], eta value return korbe.

//filter type-2

// const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNum = myNums.filter((num)=>{
//     return num > 4
// })
// console.log(newNum);  // [ 5, 6, 7, 8, 9, 10 ]

//for each type

const neoNum = [1,2,3,4,5,6,7,8,9,10]
const neNum = []
neoNum.forEach( (num)=> {
  if(num>4){
    neNum.push(num)
  }  
})
console.log(neNum); // [5,6,7,8,9,10]

const books = [
  {title:"book one", genre:"fiction", publish:1981, edition:2004},
  {title:"book two", genre:"non-fiction", publish:1992, edition:2008},
  {title:"book three", genre:"history", publish:1999, edition:2007},
  {title:"book four", genre:"non-fiction", publish:1989, edition:2010},
  {title:"book five", genre:"science", publish:2009, edition:2014},
  {title:"book six", genre:"fiction", publish:1987, edition:2010},
  {title:"book seven", genre:"history", publish:1986, edition:1996},
  {title:"book eight", genre:"science", publish:2011, edition:2016},
  {title:"book nine", genre:"non-fiction", publish:1981, edition:1981},
];

// const userBooks = books.filter( (bk) =>bk.genre === "history" )
// console.log(userBooks) //[{title: 'book three',genre: 'history',publish: 1999,edition: 2007},{title: 'book seven',genre: 'history',publish: 1986,edition: 1996}]

// let userBooks = books.filter( (bk) => { return bk.publish >= 2000} )
// console.log(userBooks) //[{title: 'book five',genre: 'science',publish: 2009,edition: 2014},{title: 'book eight',genre: 'science',publish: 2011,edition: 2016}]

userBooks = books.filter( (bk) =>{
  return bk.publish >= 1995 && bk.genre === "history"
} )
console.log(userBooks) //  [{title: 'book three',genre: 'history',publish: 1999,edition: 2007}]
