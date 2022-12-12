function factorial(x) {
    if (x < 0) throw new Error("x must not be negative");
    let f = 1
    for (; x > 1; x--) {
        f *= x
    }
    return f;
}
const prompt = require("prompt-sync")({ sigint: true });

try {
    let n = Number(prompt("Please enter a number: ", ""))
    let f = factorial(n);
    console.log(n + "! = " + f)
}
catch(ex){
    console.log(ex)
}
finally{
    console.log("End of Program")
}
