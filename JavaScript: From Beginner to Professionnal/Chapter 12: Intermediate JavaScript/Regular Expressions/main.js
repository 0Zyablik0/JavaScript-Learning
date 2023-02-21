// regular Expressions
let text = 'I love JavaScript!'
console.log("Match: ", text.match(/javascript/i))

// Multiple options
console.log("Multiple options: ", text.match(/javascript|python|react/i))
text = 'I love React and JavaScript!'
console.log("Multiple options: ", text.match(/javascript|python|react/i))
console.log("Multiple options: ", text.match(/javascript|python|react/gi))

//Character Options
text = 'd'
console.log("Character Options: ", text.match(/[abc]/))
console.log("Character Options: ", text.match(/[abcd]/))
console.log("Character Options: ", text.match(/[a-d]/))
text = "T"
console.log("Character Options: ", text.match(/[a-zA-Z]/))
console.log("Character Options: ", text.match(/[a-z]/i))
text = "Just some text."
console.log("Character Options: ", text.match(/./g))
console.log("Character Options: ", text.match(/\./g))
text = "I'm 23 years old"
console.log("Character Options: ", text.match(/\d/g))
console.log("Character Options: ", text.match(/\s/g))

//Groups
text = 'I love JavaScript!'
console.log("Groups: ", text.match(/(love|dislike)\s(javascript|python)/gi))
console.log("Groups: ", text.match(/(?<language>javascript)/i))