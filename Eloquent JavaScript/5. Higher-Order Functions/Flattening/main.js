let testArray = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

let result = testArray.reduce((array1, array2) => array1.concat(array2))
console.log(result)