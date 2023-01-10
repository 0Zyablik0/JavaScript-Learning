console.log("length of empty array: ", [].length);
console.log("length of [1,2,3]: ", [1, 2, 3].length);

let a = [1, 2, 3, 4, 5];

a.length = 3; //deleting two last elements
console.log(a);
a.length = 0; //deleting all elements
console.log(a);
a.length = 5; // Length is 5 but no elements
console.log(a);