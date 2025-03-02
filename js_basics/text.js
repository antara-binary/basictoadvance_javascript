const account_Id=144553//not changable
let account_email="antara7"//changable
var account_password="12345"//changable
accountCity="jaipur"

/*
prefer not to use var
because of issue in block scope and functional scope
*/

account_email=2
console.log(account_email)
account_password="antara"
console.log(accountCity)
console.table([account_Id,account_email,account_password,accountCity]);