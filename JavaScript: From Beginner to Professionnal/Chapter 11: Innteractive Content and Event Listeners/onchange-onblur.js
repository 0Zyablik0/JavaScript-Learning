function logEvent() {
    let target = event.target;
    if (target.name == "firstName") {
        message("First Name changed to " + target.value);
    } else {
        message("Last Name changed to " + target.value);
    }

}

function sendInfo() {
    let elem = event.target.parentElement;
    console.log(elem)
    message("Welcome " + elem.firstName.value + " " + elem.lastName.value);
}

function message(m) {
    document.getElementById("welcome").innerHTML = m;

}