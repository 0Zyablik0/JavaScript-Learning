function arrayToList(array) {
    let list = null
    for (let i = 0; i < array.length; i++) {
        list = {
            value: array[array.length - 1 - i],
            rest: list
        }
    }
    return list
}

function listToArray(list) {
    let result = []
    for (node = list; node; node = node.rest) {
        result.push(node.value)
    }
    return result
}

function prepend(val, list){
    return {
        value: val,
        rest: list
    }
}

function nth(list, index){
    for(let i = 0; i < index; i ++){
        if (list == null){
            return undefined
        }
        list = list.rest
    }
    if (list == null) return undefined
    return list.value
}

console.log(arrayToList([1, 2, 3]))