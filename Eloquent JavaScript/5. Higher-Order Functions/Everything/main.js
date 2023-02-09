function every(array, predicate) {
    for (let elem of array) {
        if (!predicate(elem)) {
            return false
        }
    }
    return true
}

function every2(array, predicate) {
    return !array.some((x) => !predicate(x))
}