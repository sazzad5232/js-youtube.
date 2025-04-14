const tinderUser = new Object() // 2 tai niom e correct
// const tinderUser = {}  // 2 tai niom e correct


tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser)

const regularUser ={
    email:"me@gmail.com",
    fullname: {
        userfullname:{
          firstname:"sazzad",
          lastname:"rahman"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname) //sazzad

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}
const obj4 = {5:"a", 6:"b"}

// const obj3 = Object.assign(obj1,obj2) //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

// const obj3 = Object.assign({},obj1,obj2,obj4) // { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }

const obj3 = {...obj1,...obj2} // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' } ei niom standard.

console.log(obj3)

console.log(Object.keys(tinderUser))  //[ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(tinderUser)) //  [ '123abc', 'Sammy', false ]
console.log(Object.entries(tinderUser)) //  [ '123abc', 'Sammy', false ]
console.log(tinderUser.hasOwnProperty("isLoggedIn"))  //true er modhe isLoggedIn name e key acha.
console.log(tinderUser.hasOwnProperty("isLogged"))  //false er modhe isLogged name e kono key nei.