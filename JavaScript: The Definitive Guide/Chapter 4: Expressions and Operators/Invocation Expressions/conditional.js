let a = [3, 2, 1]
let b = null
console.log(a.sort())
console.log(b?.sort()) // b.sort() => TypeError, b?.sort() => undefined
