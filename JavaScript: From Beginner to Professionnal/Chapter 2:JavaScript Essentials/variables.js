// Declaring variables

let nr = 12; // block scope
var nr2 = 13; // global scope
const PI = 3.1415; // constant

// Primitive datatypes: Strings

let singleQuote = 'Hello, world!';
let doubleQuote = "Hello, world!";
let place = "Russia";
let backtickQuote = `Hello, world from ${place}`;


// Primitive datatypes: Numbers

let intNr = 12;
let decNr = 12.1;
let expNer = 12e-4;
let octNr = 0o12;
let hexNr = 0x12;
let binNr = 0b01;

// Primitive datatypes: BigInt

let bigNr = 98765432123456567n


// Primitive datatypes: Boolean

let bool1 = true;
let bool2 = false;

// Primitive datatypes: Symbol

let str1 = "Hello, world";
let str2 = "Hello, world";
console.log(str1 === str2); // true

let sym1 = Symbol("Hello, world");
let sym2 = Symbol("Hello, world");
console.log(sym1 === sym2); // false

// Primitive datatypes: Undefined

let unassigned;
console.log(unassigned) // undefined

// Primitive datatypes: null

let nullVar = null;
console.log(nullVar === undefined) // false

// Working out the type of a variable

let str = "Hello";
let num = 7;
let bigNum = 1242112934871234809n;
let bool = true;
let sym = Symbol("Hello");
let undef = undefined;
let unknown = null;

console.log("string", typeof str);
console.log("number", typeof num);
console.log("boolean", typeof bool);
console.log("undefined", typeof undef);
console.log("big number", typeof bigNum);
console.log("symbol", typeof sym);
console.log("unknown", typeof unknown);