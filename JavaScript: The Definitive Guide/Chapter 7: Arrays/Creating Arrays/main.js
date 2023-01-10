// Array literals

let empty = [];
let primes = [2, 3, 5, 7, 11]
let mix = [1, "a", 1.1, true]

let base = 1;
let table = [base, base + 1, base + 2, base + 3, base + 4]


let b = [[1, { x: 1, y: 1, z: 3 }], [2, 3, { x: 1, y: 5 }]]

let c = [1, , 2]; // array with undefined element

// The spread operator

let a = [1, 2, 3, 4]
b = [1, ...a, 2]

//create a shallow copy:

let original = [1, 2, 3];
let copy = [...original];

let digits = [..."1234567890ABCDEDF"];
console.log(digits)
let letters = new Set([..."Hello, world!"]);
console.log([...letters]);


/// The Array() constructor

empty = new Array();
console.log("empty array:", empty);

let specified_length = new Array(10);
console.log("specified length array:", specified_length)

let explicit = new Array(5,4, 3, 2, 1, "testing testing");
console.log("explicit array:", explicit)

// Array.of()

console.log("Array.of():", Array.of())
console.log("Array.of(10):", Array.of(10))
console.log("Array.of(1, 2, 3,4 ):", Array.of(1, 2, 3, 4))

//Array.from()

console.log("copy of original: ", Array.from(original))

