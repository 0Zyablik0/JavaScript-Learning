let promise = new Promise(function (resolve, reject) {
    let x = Math.random();
    if (x > 0.5) {
        resolve(x);
    } else {
        reject("Too low: " + String(x))
    }
})

promise.then(
    function (value) {
        console.log("Success: ", value);
    },
    function (error) {
        console.log("Error: ", error);
    }
)


promise = new Promise(
    function (resolve, reject) {
        resolve("success");
    }
)

promise.then(value => {
    console.log(value);
    return "we"
})
    .then(value => {
        console.log(value);
        return "can"
    })
    .then(value => {
        console.log(value);
        return "chain"
    })
    .then(value => {
        console.log(value);
        return "promises"
    })
    .then(value => {
        console.log(value);
    })
    .catch(value => {
        console.log(value);
    })
