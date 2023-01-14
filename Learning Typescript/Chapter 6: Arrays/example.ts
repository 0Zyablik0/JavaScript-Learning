//Arrays Types

let arrayOfNumbers: number[];
arrayOfNumbers = [1, 2, 3, 4, 5];
console.log(arrayOfNumbers);

// Array and Function Types
let createsStrings: () => string[];
let stringCreators: (() => string)[];

// Union-Type Arrays

let stringOrArrayOfNumbers: string | number[];
let arrayOfStringsOrNumbers: (string | number)[];

//Evolving any Arrays

let values = []; // any[]
values.push(''); // string[]
values.push(0); // (number | string)[]

//Multidimensional arrays

let arrayOfArraysOfNumbers: number[][];
arrayOfArraysOfNumbers = [[1, 2, 3, 4, 5], [1, 2, 3, 4, 5]];

//Array Members

const defenders = ["Clarenza", "Dina"] // strings[]
const defender = defenders[0]; //string


//Spreads and Rests

const strings = ["Hello", "world"] // string[]
const numbers = [1, 2, 4, 5] // number[]
const joined = [...strings, ...numbers] // (string | number) []

function logStrings(message: string, ...strings: string[]): void {
    console.log(message);
    for (let string of strings) {
        console.log(string);
    }
}

// Tuples

let tupleOfNumbers: [number, number]
tupleOfNumbers = [1, 2]