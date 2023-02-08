function deepEqual(arg1, arg2) {
    if (arg1 === arg2) return true
    if (typeof arg1 != typeof arg2) return false
    if (typeof arg1 == 'object' && arg1 != null) {
        for (let key of Object.keys(arg1)) {
            if (!deepEqual(arg1[key], arg2[key])) {
                return false
            }
        }
        return true

    }
    else {
        return arg1 === arg2
    }
}