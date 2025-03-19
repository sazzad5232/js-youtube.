const accountId = 144552
let accountEmail = "tahib@gmail.com"
var accountPassword = "123456"
accountCity="jaipur"
let accountState;

//accountId = 2// not allowed

accountEmail = "y@gmail.com"
accountPassword = "525252"
accountCity="dhaka"

//prefer not to use var because of issue in block scope and functional scope//

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])