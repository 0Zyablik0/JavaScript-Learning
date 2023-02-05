// Global methods

let x = 7;
console.log(Number.isNaN(x))
console.log(isNaN(x))


//Decoding and encoding URL

//decodeURI and encodeURI

let uri = "https://example.com/submit?name=artem kryukov"
let encodedUri = encodeURI(uri)
let decodedUri = decodeURI(encodedUri)
console.log("Encoded:", encodedUri)
console.log("Decoded:", decodedUri)
//decodeURIComponent and encodeURIComponent
console.log("---------------------")
let encodedUriComponent = encodeURIComponent(uri)
let decodedUriComponent = decodeURIComponent(encodedUriComponent)
console.log("Encoded:", encodedUriComponent)
console.log("Decoded:", decodedUriComponent)

//Parsing Numbers
console.log("---------------------")
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

// Number methods

// isNan

console.log('isNan("")', isNaN(""))
console.log('isNan("hello")', isNaN("hello"))
console.log('isNan(34)', isNaN(34))
console.log('isNan("34")', isNaN("34"))

// Checking if something is finite

console.log(isFinite(34))
console.log(isFinite("x"))
console.log(isFinite(0/0))
console.log(isFinite(Infinity))

// Checking if something is an integer
console.log("---------------------")
console.log(Number.isInteger(34))
console.log(Number.isInteger("5"))
console.log(Number.isInteger("x"))
console.log(Number.isInteger(0/0))
console.log(Number.isInteger(Infinity))
console.log(Number.isInteger(2.4))

//Specifying the number of decimals
console.log("---------------------")

console.log(1.23456.toFixed(2))
console.log(1.23456.toFixed(3))

// Specifying precision
console.log("---------------------")
console.log(1.23456.toPrecision(2))
console.log(1.23456.toPrecision(4))

// Math Methods

// Finding the highest and lowest number
console.log("---------------------")
console.log("Max: ", Math.max(1, 34, 2, 523, 4, 129))
console.log("Min: ",Math.min(1, 34, 2, 523, 4, 129))

console.log("max of NaN: ", Math.max(1, 34, "hello"))

// square root and raising to the power of
console.log("---------------------")
console.log("sqrt: ", Math.sqrt(64))
console.log("pow: ", Math.pow(5, 3))

// Turning decimals into integers: 

console.log("---------------------")
console.log("round 6.78:", Math.round(6.78))
console.log("round 5.34:", Math.round(5.34))

console.log("ceil 6.78:", Math.ceil(6.78))
console.log("ceil 5.34:", Math.ceil(5.34))
console.log("ceil -6.78:", Math.ceil(-6.78))
console.log("ceil -5.34:", Math.ceil(-5.34))

console.log("floor 6.78:", Math.floor(6.78))
console.log("floor 5.34:", Math.floor(5.34))
console.log("floor -6.78:", Math.floor(-6.78))
console.log("floor -5.34:", Math.floor(-5.34))

console.log("trunc 6.78:", Math.trunc(6.78))
console.log("trunc 5.34:", Math.trunc(5.34))
console.log("trunc -6.78:", Math.trunc(-6.78))
console.log("trunc -5.34:", Math.trunc(-5.34))

// Exponent and logarithm
console.log("---------------------")
console.log("exp(2): ", Math.exp(2))
console.log("log(2): ", Math.log(2))

//Date methods

// Creating dates
console.log("---------------------")
let currentDateTime = new Date()
console.log(currentDateTime)
console.log(Date.now())
console.log(new Date(1000))
console.log(new Date("Sun Feb 05 2023 15:05:03 GMT+0200"))
console.log(new Date(2023 , 6, 23, 12, 10, 23))

//Methods to get and set the elements of the date
console.log("---------------------")
let d = new Date()
console.log("day of the week: ", d.getDay())
console.log("day of the month: ", d.getDate())
console.log("month: ", d.getMonth())
console.log("year: ", d.getFullYear())
console.log("hours: ", d.getHours())
console.log("minutes: ", d.getMinutes())
console.log("seconds: ", d.getSeconds())
console.log("milliseconds: ", d.getMilliseconds())
console.log("Time: ", d.getTime())

d.setFullYear(2010)
console.log(d)
d.setMonth(10)
console.log(d)
d.setDate(19)
console.log(d)
d.setHours(10)
console.log(d)
d.setTime(1675601883766)
console.log(d)

// Parsing dates
console.log("---------------------")

console.log(Date.parse("June 5, 2021"))
console.log(Date.parse("6/5/21"))

// Converting a date to string
console.log("---------------------")

console.log(d.toDateString())
console.log(d.toTimeString())
console.log(d.toLocaleDateString())
console.log(d.toISOString())
console.log(d.toJSON())
console.log(d.toUTCString())