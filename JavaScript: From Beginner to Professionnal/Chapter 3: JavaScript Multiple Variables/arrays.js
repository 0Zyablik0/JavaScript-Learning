// Creating arrays

let arr1 = new Array("one", "two", "three");
let arr2 = [1, 2, 3];
let arr3 = new Array(10)
let arr4 = [10];
console.log(arr1);
console.log(arr2);
console.log(arr3);
console.log(arr4);

let arr = [1, "hi", true];
console.log(typeof arr[0]);
console.log(typeof arr[1]);
console.log(typeof arr[2]);

const constArr = ["hello"]; // we can change value but not the array
constArr[0] = "Hi";
console.log(constArr);

// Accessing elements

let cars = ["Audi", "BMW"];
console.log(cars[-1]);
console.log(cars[0]);
console.log(cars[1]);
console.log(cars[2]);

// Overwriting elements

cars[0] = "Tesla";
cars[-1] = "Mercedes";
cars[2] = "Jaguar";

console.log(cars[-1]);
console.log(cars[0]);
console.log(cars[1]);
console.log(cars[2]);
console.log(cars);

// Array methods: push

let fruits = ["apple", "banana", "orange"];
let num_fruits = fruits.push("peach");
console.log(num_fruits);
console.log(fruits);

// Array methods: splice

let shapes = ['circle', 'triangle', 'rectangle', 'pentagon'];
shapes.splice(2, 0, "square", "trapezoid");
console.log(shapes);

shapes = ['circle', 'triangle', 'rectangle', 'pentagon'];
shapes.splice(2, 1, "square", "trapezoid");
console.log(shapes);

// Array methods: concat

let arr5 = [1, 2, 3];
let arr6 = [4, 5, 6];
let arr7 = arr5.concat(arr6);
let arr8 = arr7.concat(7, 8, 9)
console.log(arr5, arr6, arr7, arr8);

// Array methods: deleting elements

arr8.pop(); // deleting last element
console.log(arr8);
arr8.shift(); // deleting first element
console.log(arr8);

arr8.splice(1, 3); // deleting in the middle
console.log(arr8);

delete arr8[0];
console.log(arr8);


// Array methods: finding elements

let findValue1 = arr8.find(function (e) { return e === 6; });
let findValue2 = arr8.find(e => e === 10);
console.log(findValue1, findValue2);

let findIndex1 = arr8.indexOf(6);
let findIndex2 = arr8.indexOf(10);
let findIndex3 = arr8.indexOf(6, 2);
let findIndex4 = arr8.lastIndexOf(6);
console.log(findIndex1, findIndex2, findIndex3, findIndex4);


// Array methods: sorting

let names = ["James", "John", "Alice", "Bob", "Maria", "Bert", "Faitha"];
names.sort();
console.log(names);

// Array methods: reversing
names.reverse();
console.log(names);


// Multidimensional arrays

let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let array3 = [7, 8, 9];

let twoDimArray = [array1, array2, array3];
console.log(twoDimArray);
console.log(twoDimArray[1][2])

let threeDimArray = [twoDimArray, twoDimArray, twoDimArray]
console.log(threeDimArray);
console.log(threeDimArray[0][2][1])


