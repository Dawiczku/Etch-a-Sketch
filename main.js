const DEFAULT_COLOR = "#0075ff";
const DEFAULT_MODE = "user-color";
const DEFAULT_SIZE = 32;

let currentColor = DEFAULT_COLOR;
let currentMode = DEFAULT_MODE;
let currentSize = DEFAULT_SIZE;

const userColorButton = document.getElementById("user-color");
const warmColorButton = document.getElementById("warm-color");
const coldColorButton = document.getElementById("cold-color");
const eraserButton = document.getElementById("eraser");
const clearButton = document.getElementById("clear");
const sliderValue = document.getElementById("slider-desc");
const board = document.getElementById("board");
const buttons = document.getElementsByTagName("button");
const slider = document.getElementById("slider");
const colorpicker = document.getElementById("colorpicker");
const body = document.body;

let mouseDown = false;

function setCurrentColor(newColor) {
    currentColor = newColor;
    console.log(currentColor);
}

function setCurrentMode(newMode) {
    currentMode = newMode;
}

function setCurrentSize(newSize) {
    currentSize = newSize;
}

function refreshGrid(size) {
    document.documentElement.style.setProperty("--grid-size", `${size}`);
}

function createGrid(size) {

    for(let i = 0; i < size ** 2; i++) {
        let box = document.createElement("div");
        box.classList.add("box");
        box.addEventListener("mouseover", changeColor);
        board.append(box);
    }
    refreshGrid(size);
}

function removeGrid() {
    while(board.firstChild) {
        board.removeChild(board.lastChild); 
    }
}

function setGridValue(size) {
    sliderValue.textContent = `Grid size: ${size} x ${size}`;
}

function changeColor(event) {
    if(event.type === "mouseover" && !mouseDown) return;
    if(currentMode === "userMode") {
        event.target.style.backgroundColor = currentColor;
    } else if(currentMode === "warmMode") {
        let warmColors = ['yellow', 'orange', 'red'];
        let randomNumber = Math.floor(Math.random() * 3);
        event.target.style.backgroundColor = warmColors[randomNumber];
    } else if(currentMode === "coldMode") {
        let coldColors = ['aqua', 'dodgerblue', 'aquamarine'];
        let randomNumber = Math.floor(Math.random() * 3);
        event.target.style.backgroundColor = coldColors[randomNumber]; 
    } else if(currentMode === "eraserMode") {
        event.target.style.removeProperty("background-color");
    }
}

// Main code

setGridValue(currentSize);
refreshGrid(currentSize);
createGrid(currentSize);

colorpicker.addEventListener("change", function (event) {setCurrentColor(event.target.value)});
userColorButton.addEventListener("click", function() {setCurrentMode("userMode")});
warmColorButton.addEventListener("click", function() {setCurrentMode("warmMode")});
coldColorButton.addEventListener("click", function() {setCurrentMode("coldMode")});
eraserButton.addEventListener("click", function() {setCurrentMode("eraserMode")});

body.addEventListener("mousedown", () => mouseDown = true);
body.addEventListener("mouseup", () => mouseDown = false);

slider.addEventListener("click", () => {
    removeGrid();
    setCurrentSize(slider.value);
    refreshGrid(currentSize);
    setGridValue(currentSize);
    createGrid(currentSize);
})

slider.addEventListener("mousemove", () => {
    setCurrentSize(slider.value);
    setGridValue(currentSize);
})