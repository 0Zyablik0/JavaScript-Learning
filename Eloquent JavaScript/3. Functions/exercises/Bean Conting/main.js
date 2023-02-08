function countChar(str, char){
    let result = 0
    for (let i = 0; i < str.length; i++){
        if (str[i] === char){
            result += 1
        }
    }
    return result
}

function countBs(str){
    return countChar(str, "B")
}

console.log(countBs("Bye, Bye!"))