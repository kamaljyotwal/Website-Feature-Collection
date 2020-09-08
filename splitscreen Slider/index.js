var main = document.getElementById("main");
var slider = main.querySelector(".slider");
var toplayer = main.querySelector(".topMainYellowbBlack");
var skewfix = 500;
main.addEventListener("mousemove", performfunc);

function performfunc(event) {
    slider.style.left = event.clientX + 'px';
    toplayer.style.width = event.clientX + skewfix + 'px';
}