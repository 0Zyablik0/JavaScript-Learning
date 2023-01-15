output = document.querySelector(".output1");
first = document.querySelector('input[name="first"]');
last = document.querySelector('input[name="last"]');


first.addEventListener("change", () => {
    console.log("change");
    message(first.value);
});

first.addEventListener("blur", (e) => { console.log("blur"); });
first.addEventListener("focus", () => { console.log("focus"); });


last.addEventListener("change", () => {
    console.log("change");
    message(last.value);
});
last.addEventListener("blur", (e) => { console.log("blur"); });
last.addEventListener("focus", () => { console.log("focus"); });



function message(m) {
    output.textContent = m;
}