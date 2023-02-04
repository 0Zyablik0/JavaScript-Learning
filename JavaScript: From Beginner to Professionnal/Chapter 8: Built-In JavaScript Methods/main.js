// Global methods

let x = 7;
console.log(Number.isNaN(x))
console.log(isNaN(x))


//Parsing Numbers

console.log(parseInt("6"), typeof parseInt("6"))
console.log(parseInt("7.6"), typeof parseInt("7.6"))
console.log(parseInt("0b1101010"), typeof parseInt("0b1101010"))
console.log(parseInt("hello"), typeof parseInt("hello"))


// Parse floats

console.log(parseFloat("7.6"), typeof parseFloat("7.6"))
console.log(parseFloat("7.6.5"), typeof parseFloat("7.6.5"))
console.log(parseFloat("6"), typeof parseFloat("6"))
console.log(parseFloat("0b1101010"), typeof parseFloat("0b1101010"))
console.log(parseFloat("hello"), typeof parseFloat("hello"))

//Executing Javascript with eval()

eval("console.log('Hello world!')"); // Executing string

