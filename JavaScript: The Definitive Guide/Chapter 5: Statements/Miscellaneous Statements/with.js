/*
with(object)
    statement
*/

let document = {
    forms: [
        {
            address: {
                value: "Moscow",
            },
            name: {
                value: "Artem",
            },
            email: {
                value: "example@example.com",
            },
        },
    ],
}

with (document.forms[0]) {
    console.log(name.value)
    console.log(email.value)
    console.log(address.value)
}