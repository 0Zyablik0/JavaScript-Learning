/*
for(initialize; test; increment)
    statement
*/

for (let i = 0; i < 3; i++) {
    console.log(i)
}

for (let i = 0, j = 10; i < 3; i++, j--) {
    console.log(i, j)
}


// for (;;) === while(true)


// for/of


let data = [1, 2, 3, 4, 5]

for (let elem of data) {
    console.log(elem ** 2)
}


let o = {
    x: 1,
    y: 2
}

for (let key of Object.keys(o)) {
    console.log(key, o[key])
}

for (let value of Object.values(o)) {
    console.log(value)
}

for (let [k, v] of Object.entries(o)) {
    console.log(k, v)
}



// for/in

for (let property in o){
    console.log(property, o[property])
}