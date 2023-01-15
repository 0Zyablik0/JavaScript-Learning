output = document.querySelector(".output");
inputs = document.querySelectorAll("input");

inputs.forEach(
    (elem) => {
        elem.addEventListener("keydown", (e) => {
            if (!isNaN(e.key)) {
                output.textContent += e.key;
            }
        });
        elem.addEventListener("keyup", (e) => {
            console.log("keyup: " + e.key);
        });
        elem.addEventListener("paste", (e) => {
            console.log("pasted");
        });

        elem.addEventListener("copy", (e) => {
            console.log("copied");
        });

    }
);