// while loops

let i = 0;
while (i < 3) {
    console.log(i);
    i++;
}

let fibonacciArray = [0, 1];
while (fibonacciArray.length < 25) {

    fibonacciArray.push(fibonacciArray[fibonacciArray.length - 1] + fibonacciArray[fibonacciArray.length - 2]);
}
console.log(fibonacciArray);

// do while loops


i = 0;
do {
    console.log(i);
    i++;
}
while (i < 0)

// for loops

let arr = [];
for (let i = 0; i < 300; i++) {
    arr.push(i)
}
console.log(arr);

// Nested loops

arr = [];

for (let i = 0; i < 4; i++) {
    arr.push([]);
    for (let j = 0; j < 3; j++) {
        arr[i].push(i + j);
    }
}
console.table(arr);

// for of loops

arr = [1, 2, 3, 4, 5, 6]
for (let elem of arr){
    console.log(2**elem)
}


// for in loops

let  car = {
    model: "Golf",
    make: "Volkswagen",
    year: 1999,
    color: "black",
}

for (let prop in car){
    console.log(car[prop])
}

for (let key of Object.keys(car)){
    console.log(key, car[key]);
}

for (let [key, value] of Object.entries(car)){
    console.log(key, " : ", value)
}

// break, continue, nested loops and labeled blocks

let groups = [
    ["Martin", "Daniel", "Keith"],
    ["Margot", "Marina", "Ali"],
    ["Helen", "Jonah", "Sambikos"],
];

outer:
for (let group of groups){
    inner:
    for (let member of group){
        if (member.startsWith("M")){
            console.log("found one starting with M: ", member);
            break outer; // We find at most one name
        }
    }
}