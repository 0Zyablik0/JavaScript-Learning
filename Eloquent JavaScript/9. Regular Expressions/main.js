//Creating Regular Expression
let re1 = new RegExp("abc");
let re2 = /abc/;
console.log(re1)
console.log(re2)

let re3 = /eighteen\+/

// Testing for matches

console.log(re1.test("abcde"))
console.log(re2.test("ab de"))

// Sets of Characters
console.log(/[1234567890]/.test("0"))
console.log(/[1234567890]/.test("abc"))
console.log(/[0-9]/.test("1992"))
console.log(/\d/.test("1992"))

let dateTime = /\d\d-\d\d-\d\d\d\d \d\d:\d\d/
console.log("dateTime:", dateTime.test("01-12-2020 15:20"))
console.log("dateTime:", dateTime.test("01-dec-2020 15:20"))


let notBinary = /[^01]/
console.log("notBinary:", notBinary.test("010101010100101000010100"))
console.log("notBinary:", notBinary.test("3101010101002101000010100"))

// repeating parts of pattern

console.log("manyDigits", /\d+/.test("1"))
console.log("manyDigits", /\d+/.test("123"))
console.log("manyDigits", /\d+/.test("a"))
console.log("manyDigits", /\d+/.test(""))
console.log("manyDigits", /\d*/.test("a"))


console.log("questionMark: ", /neighbou?r/.test("neighbour"))
console.log("questionMark: ", /neighbou?r/.test("neighbor"))

dateTime = /\d{1,2}-\d{1,2}-\d{4} \d{1,2}:\d{2}/;
console.log("dateTime: ", dateTime.test("1-2-2020 2:40"))
console.log("dateTime: ", dateTime.test("1-02-2020 2:40"))
console.log("dateTime: ", dateTime.test("01-02-2020 2:40"))
console.log("dateTime: ", dateTime.test("1-02-2020 12:40"))

// Grouping Subexpressions
let cartoonCrying = /boo+(hoo+)+/i
console.log("cartoonCrying: ", cartoonCrying.test("Boohooooohoohoooo"))

// Matches and groups

let match = /\d+/.exec("one two 100")
console.log("exec method: ", match)
console.log("match method: ", "one two 100".match(/\d+/))


let quotedText = /'([^']*)'/
console.log("quoted text: ", quotedText.exec("she said 'Hello'"))


console.log("undefined group: ", /bad(ly)?/.exec("bad"))
console.log("multiple group match: ", /(\d)+/.exec("123"))

//Dates

function getDate(string) {
    let date = /(\d{1,2})-(\d{1,2})-(\d{4})/.exec(string);
    if (date !== null) {
        let [_, day, month, year] = date
        return new Date(year, month - 1, day)
    }
    return null;
}

console.log("getDate: " + getDate("My birthday is on 30-5-2002"))

// Words and string boundaries

console.log("word boundary: ", /cat/.test("concatenate"));
console.log("word boundary: ", /\bcat\b/.test("concatenate"));
console.log("word boundary: ", /\bcat/.test("con catenate"));
console.log("word boundary: ", /\bcat\b/.test("con cat enate"));
console.log("word boundary: ", /cat\b/.test("concat enate"));

// Choice Patterns

let animalCount = /\b\d+ (pig|cow|dog)s?\b/;
console.log("animalCount: ", animalCount.test("15 pigs"));
console.log("animalCount: ", animalCount.test("1 dog"));
console.log("animalCount: ", animalCount.test("20 dogcows"));


// The replace method

console.log("replace method: ", "papa".replace("p", "m"))
console.log("replace method: ", "borobudur".replace(/[ou]/, "a"))
console.log("replace method: ", "borobudur".replace(/[ou]/g, "a"))
console.log("replace method: \n",
    "\rLiskov, Barbara\nMcCarthy, John\nWadler, Philip"
        .replace(/(\w+), (\w+)/g, "$2 $1"));

let s = "the cia and fbi"
console.log("replace method: ", s.replace(/\b(fbi|cia)\b/g, (str) => str.toUpperCase()))

//Greed

function stripComments(code){
    return code.replace(/\/\/.*|\/\*[^]*?\*\//g, "")
}
console.log(stripComments("1 /* a */+/* b \n*/ 1"))