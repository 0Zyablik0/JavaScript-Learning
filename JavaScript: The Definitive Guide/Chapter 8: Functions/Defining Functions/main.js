// Function Declaration
function printElements(elements) {
    for (elem in elements) {
        console.log(elem);
    }
}

function factorial(x) {
    if (x <= 1) return 1;
    return factorial(x - 1) * x;

}

//function Expressions

let square = function (x) { return x * x };
console.log(square(5));

//Arrow Functions

let cube = (x) => { return x ** 3 };
console.log(cube(5));

// Nested Functions

function hypotenuse(a, b) {
    function square(x) { return x * x; }
    return Math.sqrt(square(a) + square(b));
}
console.log(hypotenuse(3, 4));