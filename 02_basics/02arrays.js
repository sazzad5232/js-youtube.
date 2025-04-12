const marvel_heros = ["spiderman","halk","antman"]
const dc_heros = ["batman","superman","flash"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros) //["spiderman","halk","antman"["batman","superman","flash"]] arrayer vitore array chole asche

// console.log(marvel_heros[3][1]) //superman ans hobe karon 3 te batman er 1 no e superman. ei niom use na korai valo.

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);//[ 'spiderman', 'halk', 'antman', 'batman', 'superman', 'flash' ]

const allnewHero = [...marvel_heros,...dc_heros]

console.log(allnewHero) //[ 'spiderman', 'halk', 'antman', 'batman', 'superman', 'flash' ] ans same hobe 2 vabe kora jai

const anotherArr =[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const realanotherArray = anotherArr.flat(Infinity)

console.log(realanotherArray) //[1,2,3,4,5,6,7,6,7,4,5]

console.log(Array.isArray("sazzad")) // false
console.log(Array.from("sazzad"))// [ 's', 'a', 'z', 'z', 'a', 'd' ] array te convert korar niom.

console.log(Array.from({name:"sazzad"})) //interesting, ans hobe [].

let score1 =100
let score2 =200
let score3 =300

console.log(Array.of(score1,score2,score3)) //[ 100, 200, 300 ]

//must porte hobe Array.isArray, Array.from,Array.of// 