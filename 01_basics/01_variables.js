const accountId= 12345  // value cant be changed
let accountEmail= "arnav@gmail.com"
var accountPassword= "123456"
accountCity= "jaipur"
let accountState;

//accountId =2 // not allowed

accountEmail= "khandelwal@gmail"
accountPassword= "2345"
accountCity="bangalore"

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])

/*
prefer not use var because of issue in block scope 
and functional scope
*/