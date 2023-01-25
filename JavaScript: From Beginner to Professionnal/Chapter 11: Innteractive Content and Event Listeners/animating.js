function toTheRight() {
    let block = document.getElementById('block');
    let x = 0
    setInterval(function () {
        if (x == 600) {
            clearInterval()
        }
        else {
            x++;
            block.style.left  = x + 'px';
        }
    }, 2)

}