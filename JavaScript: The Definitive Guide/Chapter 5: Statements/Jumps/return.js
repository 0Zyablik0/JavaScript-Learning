function square(x){
    return x**2
}

console.log(square(2))
console.log(square(5))

let sum = 0
for (let num of [1, 2, 3, 4, 5]){
    sum += square(num)
}
console.log(sum)


// ----------------------------------------------------------------


function simple(){
    return
}
console.log(simple())