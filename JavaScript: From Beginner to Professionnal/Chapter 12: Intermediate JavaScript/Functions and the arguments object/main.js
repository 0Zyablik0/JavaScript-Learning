function test(a, b, c) {
    console.log("first:", a, arguments[0])
    console.log("second:", b, arguments[1])
    console.log("third:", c, arguments[2])
    console.log(arguments)
}

test("fun", "js", 'secrets')