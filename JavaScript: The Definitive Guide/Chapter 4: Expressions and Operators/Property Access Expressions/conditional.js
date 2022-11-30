a = { x: { y : 0} }

console.log(a.x.y)
console.log(a.z) // a.z.y leads to TypeError
console.log(a.z?.y)
console.log(a.z?.y.r) // optional chaining works for the next undefined also, a.x?.y.r throws TypeError