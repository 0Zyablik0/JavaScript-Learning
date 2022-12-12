numbers = [1, 3, NaN, 5, 2 , 4, NaN]

let sum = 0
for (let num of numbers) {
    if (isNaN(num)) continue;
    sum += num
}
console.log(sum)