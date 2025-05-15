//for of

const arr = [1,2,3,4,5]

for (const num of arr) {
    // console.log(num);  //1 2 3 4 5
}

const greetings = "hello world!"
for (const greet of greetings) {
    // console.log(`each char is ${greet}`) // sob character sob h e l l o eivabe show korbe.
}

//maps//

const map = new Map()
map.set("In","India")
map.set("USA","United States of America")
map.set("Fr","France")

// console.log(map)  // 'In' => 'India','USA' => 'United States of America','Fr' => 'France'

for (const [key, value] of map) {
    // console.log(key, ":", value)  //In : India,USA : United States of America,Fr : France
}

const myCoding = [
    {
        languageName:"javascript",
        lanFileName:"js"
    },
    {
        languageName:"java",
        lanFileName:"java"
    },
    {
        languageName:"python",
        lanFileName:"py"
    },
]

myCoding.forEach(  ( item) => {
    console.log(item.languageName); // javascript java python   
})