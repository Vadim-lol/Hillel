let width = window.innerWidth;
let height = window.innerHeight;
let square = document.getElementsByClassName("block");
function setColor() {
    let randColorRGB = [];
    for (let i = 0; i<3; i++) {
        randColorRGB.push(Math.floor(Math.random() * 256));
    }
    return `rgb(${randColorRGB.join(',')})`;
}
function setPosition() {
    let x = Math.floor(Math.random() * (width - square[0].offsetWidth));
    let y = Math.floor(Math.random() * (height - square[0].offsetHeight));
    return [x, y];
}
function moveDivRandomly() {
    let randomPosition = setPosition();
    square[0].style.left = randomPosition[0] + "px";
    square[0].style.top = randomPosition[1] + "px";
    square[0].style.backgroundColor = setColor();
}
setInterval(moveDivRandomly, 1000);