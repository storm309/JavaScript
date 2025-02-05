const accountId = 1445566
let accountemail = "shivamkumarp447@gmail.com"
var accountPassword = "12345"
accountCity = "Phagwara"
let accountState; // automatically printed undefined
// always use let instead of var 

// const cannot be change 
// accountId = 2 // not allowed



accountemail = "hc@hc.com"
accountPassword = "shiv@33"

console.log(accountId);

/*
Prefer not use var
because of issue in block scope and functional scope.
*/



console.table([accountId,accountemail,accountemail,accountPassword,accountCity,accountState]);
