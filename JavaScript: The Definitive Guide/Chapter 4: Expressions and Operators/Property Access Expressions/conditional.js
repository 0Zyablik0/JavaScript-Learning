a = { x: { y : 0} }

console.log(a.x.y)
console.log(a.z) // a.z.y leads to TypeError
console.log(a.z?.y)
console.log(a.z?.y.r)