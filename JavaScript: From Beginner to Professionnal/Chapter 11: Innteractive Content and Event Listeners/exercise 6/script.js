boxes = document.querySelectorAll(".box");
container = document.querySelector(".container")

container.addEventListener("click", (e) => { console.log(4), false });
container.addEventListener("click", (e) => { console.log(1), true });
for (box of boxes) {
    box.addEventListener("click", (e) => {
        console.log(3);
        console.log(e.target.textContent);
    }, false);
    box.addEventListener("click", (e) => {
        console.log(2);
        console.log(e.target.textContent);
    }, true);
}