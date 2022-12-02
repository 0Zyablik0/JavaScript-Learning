/* 
if(expression)
    statement (only one statement!!!)
*/

let username = "";
if (username == null)
    username = "artemkryukov";
console.log(username);


/*
if(expression)
    statement1
else(expression)
    statement2
*/
let n = 3;

if (n == 0)
    console.log("You don't have any messages")
else
    console.log(`You have ${n} messages`)