// Declared variables

const board = document.getElementById("board");
const slider = document.getElementById("slider");
const sliderDesc = document.getElementById("slider-desc");
const clearBtn = document.getElementById("clear");
const eraserBtn = document.getElementById("eraser");
const shadeBtn = document.getElementById("shading");
const rainbowBtn = document.getElementById("rainbow");
const userClrBtn = document.getElementById("user-color");
const colorPicker = document.getElementById("colorpicker");
const body = document.body;

let mouseDown = false;
let userBtnClicked = false;
let rainbowBtnClicked = false;
let eraserBtnClicked = false;
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
    if(userBtnClicked) {
        event.target.style.backgroundColor = colorPicker.value;
    } else if(rainbowBtnClicked) {
        let randomR = Math.random() * 256;
        let randomG = Math.random() * 256;
        let randomB = Math.random() * 256;

        event.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
    } else if(eraserBtnClicked) {
        event.target.style.backgroundColor = "#fff";
    }
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

userClrBtn.addEventListener("click", () => {
    userBtnClicked = !userBtnClicked;
    if(userBtnClicked) {
        userClrBtn.classList.add("btn-clicked");
    } else {
        userClrBtn.classList.remove("btn-clicked");
    }
})

rainbowBtn.addEventListener("click", () => {
    rainbowBtnClicked = !rainbowBtnClicked;
    if(rainbowBtnClicked) {
        rainbowBtn.classList.add("btn-clicked");
    } else {
        rainbowBtn.classList.remove("btn-clicked");
    }
})

eraserBtn.addEventListener("click", () => {
    eraserBtnClicked = !eraserBtnClicked;
    if(eraserBtnClicked) {
        eraserBtn.classList.add("btn-clicked")
    } else {
        eraserBtn.classList.remove("btn-clicked");
    }
})

body.addEventListener("mousedown", () => mouseDown = true);
body.addEventListener("mouseup", () => mouseDown = false);