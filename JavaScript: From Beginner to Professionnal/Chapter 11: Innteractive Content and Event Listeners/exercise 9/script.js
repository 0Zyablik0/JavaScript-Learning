draggable = document.querySelector('#dragme');
draggable.addEventListener('dragstart', (e) => { draggable.style.opacity = 0.5 });
draggable.addEventListener('dragend', (e) => { draggable.style.opacity = 1.0 });

boxes = document.querySelectorAll(".box");
for (let box of boxes) {
    box.addEventListener("dragenter", (e) => { e.target.classList.add('red') });
    box.addEventListener("dragover", (e) => { e.preventDefault(); });
    box.addEventListener("dragleave", (e) => { e.target.classList.remove('red') });
    box.addEventListener("drop", (e) => {
        e.preventDefault();
        e.target.appendChild(draggable);
    });
}