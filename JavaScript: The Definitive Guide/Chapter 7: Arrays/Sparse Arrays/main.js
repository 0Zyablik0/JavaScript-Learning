let a = new Array(5);
console.log("a: ", a);

a = [];
console.log("a: ", a);

a[1000] = 1;
console.log("a:", a);

let a1 = [,];
let a2 = [undefined];

console.log(0 in a1);
console.log(0 in a2);