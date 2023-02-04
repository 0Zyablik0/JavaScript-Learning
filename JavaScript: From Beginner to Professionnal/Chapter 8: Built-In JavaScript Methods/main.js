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


//Array methods

let arr = ["grapefruit", 4, "hello", true, 5.6]

arr.forEach((elem, index) =>{
    console.log(`element ${index} is ${elem} of type ${typeof elem}`)
})

//Filtering array

console.log(arr.filter((value) => { return typeof value == "string"}))

//Checking condition for all elements

console.log(arr.every((value) => { return typeof value == "string"})) // checking if true for every element
console.log(arr.every((value) => { return typeof value !== "undefined"}))

// Replacing part of the array with another part of the array:

arr.copyWithin(0, 3, 4)
console.log(arr)

// Mapping the values of an array

arr = [1, 2, 3, 4, 5, 1]
console.log(arr.map((x) => x + 1))
console.log(arr.map((x) => 2**x))

// Finding the last occurrence in an array

console.log(arr.lastIndexOf(1))
console.log(arr.lastIndexOf(6))

// String Methods


// Combining strings
let s1 = "Hello "
let s2 = "Javascript"
let result = s1.concat(s2)
console.log(result)

// Converting strings to array

console.log(result.split(" "))
console.log(result.split(""))

// Converting an array to a string

let letters = ['a', 'b', 'c', 'd']
console.log(letters.join(""))
console.log(letters.join("#"))

// Working with index and positions
let poem = "Roses are red, violets are blue, if I can do JS, then you can too!"
console.log(poem.indexOf("re"))
console.log(poem.lastIndexOf("re"))
console.log(poem.indexOf("python"))

console.log(poem.search("re"))
console.log(poem.search("python"))

console.log(poem.charAt(10))
console.log(poem.charAt(10000)) //empty

// Creating substring

console.log(poem.slice(5))
console.log(poem.slice(0, 3))

// Replacing parts of the string

console.log(poem.replace("JS", "Python"))
console.log(poem.replace("green", "yellow"))

console.log("hello hello".replace("hello", "oh"))
console.log("hello hello".replaceAll("hello", "oh"))

// Uppercase and lowercase

console.log(poem.toUpperCase())
console.log(poem.toLowerCase())

// The start and the end of a string
console.log(poem.startsWith("Roses"))
console.log(poem.startsWith("Violets"))

console.log(poem.endsWith("too!"))
console.log(poem.endsWith("too?"))