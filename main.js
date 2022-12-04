// Declared variables

const board = document.getElementById("board");
const slider = document.getElementById("slider");
const sliderDesc = document.getElementById("slider-desc");
const clearBtn = document.getElementById("clear");
const lightBtn = document.getElementById("lightening");
const shadeBtn = document.getElementById("shading");
const rainbowBtn = document.getElementById("rainbow");
const userClrBtn = document.getElementById("user-color");
const colorPicker = document.getElementById("colorpicker");
const body = document.body;

let mouseDown = false;
let currentColor = "#0075ff";

// Declared functions

function setPixelValue(value) {
    let pixelValue = value;
    sliderDesc.textContent = `Grid size: ${pixelValue} x ${pixelValue}`;
}
function setGrid(value) {
    for(let i = 0; i < value ** 2; i++) {
        let box = document.createElement('div');
        box.className = "box";
        box.addEventListener("mouseover", changeColor);
        box.addEventListener("mousedown", changeColor);
        board.append(box);
    }
    refreshGrid(value);
}

function refreshGrid(value) {
    document.documentElement.style.setProperty("--grid-size", `${value}`);
}

function removeGrid() {
    while(board.firstChild) {
        board.removeChild(board.lastChild);
    }
}

function changeColor(event) {
    if(event.type === "mouseover" && !mouseDown) return;
    event.target.style.backgroundColor = currentColor;
}

// Main code section

setPixelValue(slider.value);
setGrid(slider.value);

slider.addEventListener("mousemove", () => {
    setPixelValue(slider.value);
})

slider.addEventListener("click", () => {
    removeGrid();
    setPixelValue(slider.value);
    setGrid(slider.value);
})

body.addEventListener("mousedown", () => mouseDown = true);
body.addEventListener("mouseup", () => mouseDown = false);