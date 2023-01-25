let elem = document.getElementById("movable");

let max_position = 800;
let min_position = 0;

let movement = {
    direction: 1,
    position: min_position,
    speed: 10,
}


elem.addEventListener("click", move);

function move() {
    let counter = 30;
    setInterval(function () {
        if (counter < 1) {
            clearInterval();
        } else {
            if (movement.position > max_position || movement.position < min_position) {
                movement.direction *= -1;
            }
            counter--;
            movement.position += movement.direction * movement.speed;
            elem.style.left = movement.position + "px";
            console.log(movement.position);
        }
    }, 2);

}