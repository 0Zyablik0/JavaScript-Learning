function test() {
    let lastOne
    for (let i = 0; i < arguments.length; i++) {
        lastOne = arguments[i]
    }
    return lastOne
}

console.log(test())
console.log(test(1))
console.log(test("a", "b"))