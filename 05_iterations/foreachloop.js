//for each loop video 29

const coding = ["js","ruby","java","py","cpp"]
// coding.forEach ( function (val){
//     console.log(val)  //js ruby java py cpp
// })

// coding.forEach ( (item) =>{
// console.log(item); //js ruby java py cpp
// })

// function printMe(item){
    // console.log(item); // js ruby java py cpp
// }
// coding.forEach(printMe)

coding.forEach ( (item, index,arr)=>{
    console.log(item,index,arr) //js 0 [ 'js', 'ruby', 'java', 'py', 'cpp' ],ruby 1 [ 'js', 'ruby', 'java', 'py', 'cpp' ]-cpp 4 [ 'js', 'ruby', 'java', 'py', 'cpp' ]
})
