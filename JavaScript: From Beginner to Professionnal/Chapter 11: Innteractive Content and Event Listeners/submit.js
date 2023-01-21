function valForm() {
    let inputs = event.target.children;
    if (inputs.firstName.value == "") {
        message("Need a first name!");
        return false;
    }
    if (inputs.lastName.value == "") {
        message("Need a last name!");
        return false;
    }

    if (inputs.age.value == "") {
        message("Need an age!");
        return false;
    }
    return true;
}

function message(m) {
    document.getElementById("wrapper").innerHTML = m;
}