// Declared variables

let board = document.getElementById("board");
let slider = document.getElementById("slider");
let sliderDesc = document.getElementById("slider-desc");
let clearBtn = document.getElementById("clear");
let lightBtn = document.getElementById("lightening");
let shadeBtn = document.getElementById("shading");
let rainbowBtn = document.getElementById("rainbow");
let userClrBtn = document.getElementById("user-color");
let colorPicker = document.getElementById("colorpicker");

// Declared functions

function setPixelValue(value) {
    let pixelValue = value;
    sliderDesc.textContent = `Grid size: ${pixelValue} x ${pixelValue}`;
}
function setGrid(value) {
    for(let i = 0; i < value ** 2; i++) {
        let box = document.createElement('div');
        box.className = "box";
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

// Main code section

setPixelValue(slider.value);
setGrid(slider.value);

slider.addEventListener("mousemove", () => {
    setPixelValue(slider.value);
})

slider.addEventListener("click", () => {
    setPixelValue(slider.value);
})
