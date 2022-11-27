console.log(1234n) // not so big BigInt
console.log(0b111111n) // A binary BigInt
console.log(0o7777n) // An octal BigInt
console.log(0x800000000000000000n)
console.log(BigInt(Number.MAX_SAFE_INTEGER))
let string = "1" + "0".repeat(100)
console.log(BigInt(string))

