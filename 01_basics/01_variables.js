const accountId = 94837
let accountEmail = "coder@google.com"
var accountPassword = "11111 "
accountCity = "Delhi"
let accountState; // if its value  not written then it will consider as udefined

 //accountId = 2  change not allowed in const


accountEmail = "cb@cb.com"
accountPassword = "00000000"
accountCity = "jaipur"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])