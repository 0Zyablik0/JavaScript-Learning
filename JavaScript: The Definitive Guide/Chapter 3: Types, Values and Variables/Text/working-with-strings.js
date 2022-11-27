let msg = "Hello, " + "world!";
console.log(msg);
let my_name = "Artem";
let greeting = "Welcome, " + my_name;
console.log(greeting);


console.log(msg.length)
console.log(msg.substring(1, 4))
console.log(msg.slice(1, 4))
console.log(msg.slice(-3))
console.log(msg.split(" "))


//Searching

console.log(msg.indexOf('l'))
console.log(msg.indexOf('l', 3))
console.log(msg.indexOf('zz'))
console.log(msg.lastIndexOf("l"))

console.log(msg.startsWith('Hell'))
console.log(msg.endsWith('!'))
console.log(msg.includes('or'))


// Modifications

console.log(msg.replace('lo', 'ya'));
console.log(msg.toLowerCase())
console.log(msg.toUpperCase())

// Inspecting individual chars

console.log(msg.charAt(0), msg[0])
console.log(msg.charAt(msg.length - 1), msg[msg.length - 1])
console.log(msg.charCodeAt(0), msg.codePointAt(0))

// Padding

console.log('x'.padStart(3))
console.log('x'.padEnd(3))
console.log('x'.padStart(3, "*"))
console.log('x'.padEnd(3, '-'))

// Trimming
console.log(" test ".trim())
console.log(" test ".trimStart())
console.log(" test ".trimEnd())

