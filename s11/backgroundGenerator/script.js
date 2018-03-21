var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var rdmBtn = document.querySelector(".js-randomize-color");

function randomizeColor(){
    return '#' + Math.floor(Math.random()*16777215).toString(16);
}

function setColor(){

    color1.value = randomizeColor();
    color2.value = randomizeColor();
    setGradient();
}

function setGradient() {
    body.style.background =
        "linear-gradient(to right, "
        + color1.value
        + ", "
        + color2.value
        + ")";

    css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

rdmBtn.addEventListener('click', setColor)

window.addEventListener('load', e => {
    setGradient();
});