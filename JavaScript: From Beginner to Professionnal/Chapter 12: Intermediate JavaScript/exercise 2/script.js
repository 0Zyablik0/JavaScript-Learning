output = document.querySelector(".output");
input = document.querySelector("input");
button = document.querySelector("button");
button.addEventListener("click", validateEmail)

function validateEmail() {
    value = input.value
    if (!test(value)){
        output.textContent = "Invalid Email"
        output.style.color = "red"
    }
    else{
        output.textContent = "Valid Email"
        output.style.color = "green"

    }
    input.value = ""


}
function test(string){
    let emailPattern = /([a-zA-Z0-9_.-]+@[a-zA-Z0-9_.-]+\.[a-zA-Z0-9_.-]+)w+/
    return string.match(emailPattern);

}