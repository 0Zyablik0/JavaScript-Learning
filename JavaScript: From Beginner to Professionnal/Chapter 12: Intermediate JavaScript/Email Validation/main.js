let emailPattern = /[a-zA-Z0-9_.-]+@[a-zA-Z0-9_.-]+\.[a-zA-Z0-9_.-]+/g
let validEmail = "maaike_1234@email.com";
let invalidEmail = "maaike_1234@email@.com";
console.log(validEmail.match(emailPattern))
console.log(invalidEmail.match(emailPattern))