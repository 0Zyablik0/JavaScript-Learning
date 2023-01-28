function counter(value) {
    console.log(value)
}

let promise = new Promise(function (resolve, reject) {
    resolve("Start Counting");
})

promise
    .then(value => {counter(value); return "one"})
    .then(value => {counter(value); return "two"})
    .then(value => {counter(value); return "three"})
    .then(value => {counter(value); return "four"})