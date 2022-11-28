let o = { x: 1 }
o.x = 2;
o.x = 3;

console.log(o); // Object is mutable


a = [1, 2, 3]
a[0] = 54
a[3] = 2394
console.log(a) //array is mutable


o = { x: 1 }
let p = {x : 1}

console.log(o === p) //compared by reference

let c = [], d = [];
console.log(c === d) //compared by reference

b = a
b[0] = 1
console.log(a[0])
console.log(a === b)