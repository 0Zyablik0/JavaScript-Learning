function reverseArray(array) {
    let result = []
    for (let i = 1; i <= array.length; i++) {
        result.push(array[array.length - i])
    }
    return result
}


function reverseArrayInPlace(array) {
    for (let i = 0; 2 * i < array.length; i++) {
        let tmp = array[i]
        array[i] = array[array.length - i - 1]
        array[array.length - i - 1] = tmp

    }
}