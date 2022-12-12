/*
throw expression;
*/

function factorial(x){
    if (x < 0) throw new Error("x must not be negative");
    let f = 1
    for (; x > 1; x--){
        f *= x
    }
    return f;
}

console.log(factorial(0))
console.log(factorial(1))
console.log(factorial(6))
console.log(factorial(16))
factorial(-1)