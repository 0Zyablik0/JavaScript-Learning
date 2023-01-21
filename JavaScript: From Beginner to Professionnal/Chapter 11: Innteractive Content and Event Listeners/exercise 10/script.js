form = document.querySelectorAll("form").item(0);
form.addEventListener("submit", (e) => { submitListener(e); })
inputs = form.children

function submitListener(e) {
    let error = false;

    if (checker(inputs.firstName.value)) {
        console.log("first name is invalid")
        error = true;
    }

    if (checker(inputs.lastName.value)) {
        console.log("last name is invalid")
        error = true;
    }

    if (inputs.age.value < 19) {
        console.log("age is invalid")
        error = true;
    }
    if (error) {
        e.preventDefault();
        console.log("please review the form")
    }
}

function checker(str) {
    console.log(str.length);
    return str.length < 6;
}