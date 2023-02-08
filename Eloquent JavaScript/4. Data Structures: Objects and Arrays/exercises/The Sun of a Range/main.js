function range(start, end, step = start < end ? 1 : -1) {
    let result = []
    if (step > 0) {
        for (let i = start; i <= end; i += step) result.push(i)
    } else {
        for (let i = start; i >= end; i += step) result.push(i)
    }
    return result
}


function sum(numbers) {
    let result = 0
    for (let number of numbers) {
        result += number
    }
    return result
}
console.log(sum(range(1, 10)))