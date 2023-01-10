let letters = [..."Hello world!"];
let string = "";
for (let letter of letters) {
    string += letter
}
console.log(string);

let everyOther = "";
for (let [index, letter] of letters.entries()) {
    if (index % 2 == 0) {
        everyOther += letter;
    }
}
console.log(everyOther);

let uppercase = "";
letters.forEach(letter => { uppercase += letter.toUpperCase(); });
console.log(uppercase);