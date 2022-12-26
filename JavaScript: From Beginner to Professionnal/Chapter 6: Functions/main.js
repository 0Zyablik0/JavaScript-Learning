// Basic Function

function sayHello() {
    console.log("Hello");
}

sayHello();


let varContainingFunction = function () {
    console.log("I'm in function");
}

varContainingFunction();

// Parameters and Variables

function tester(param1, param2) {
    return param1 + " " + param2
};

console.log(tester("arg1", "arg2"));


// Default or unsuitable parameters

function addTwoNumbers(x = 1, y = 2) {
    return x + y
}
console.log(addTwoNumbers());
console.log(addTwoNumbers(2));
console.log(addTwoNumbers(4, 6));
console.log(addTwoNumbers(4, 6, 3, 4));

// Arrow functions

let doingArrowStuff = x => console.log(x);
doingArrowStuff(-21230);
doingArrowStuff("hello")

let addTwo = (x, y) => console.log(x + y);
addTwo(1, 2);
addTwo("hello ", "world");

let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
arr.forEach(x => console.log(2 ** x));

// Spread Operator
let spread = ['so', 'much', 'fun'];
let message = ["JavaScript", "is", ...spread, "and", "very", "powerful"];
console.log(message);
console.log(...spread);

function sumFour(a, b, c, d) {
    console.log(a + b + c + d);
}

arr = [1, 2, 3, 4];
sumFour(...arr);


// Rest parameter 

function someFunction(param1, ...param2) {
    console.log(param1, param2)
}

someFunction('hi', 'there!', "How are you?");

// let versus var variables

function doSomething() {
    if (true) {
        var x = 'local'; // let x = 'local' ends up with error since let - block-scoped declaration
    }
    console.log(x);
}
doSomething();

// Recursive function

function logRecursive(nr) {
    console.log("Started function: ", nr);
    if (nr > 0) {
        logRecursive(nr - 1);
    } else {
        console.log("Done with recursion")
    }
    console.log("Ended function: ", nr);
}

logRecursive(4);

// Anonymous function

let anonym = function(){
    console.log("Anonymous function");
}
anonym();

// Function callback

function doFlexibleStuff(func){
    func();
    console.log("Inside function");
}

doFlexibleStuff(anonym);

setTimeout(anonym, 1000)