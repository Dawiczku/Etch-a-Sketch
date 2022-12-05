// Declared variables

const board = document.getElementById("board");
const slider = document.getElementById("slider");
const sliderDesc = document.getElementById("slider-desc");
const clearBtn = document.getElementById("clear");
const eraserBtn = document.getElementById("eraser");
const coldClrBtn = document.getElementById("cold-clr");
const warmClrBtn = document.getElementById("warm-clr");
const userClrBtn = document.getElementById("user-color");
const colorPicker = document.getElementById("colorpicker");
const body = document.body;

let mouseDown = false;
let userBtnClicked = false;
let warmBtnClicked = false;
let coldBtnClicked = false;
let eraserBtnClicked = false;
let currentColor = "#0075ff";
const warmColors = ['red', 'orange', 'yellow'];
const coldColors = ['aqua', 'dodgerblue', 'aquamarine'];

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
    } else if(eraserBtnClicked) {
        event.target.style.backgroundColor = "#fff";
    } else if(warmBtnClicked) {
        let randomNumber = Math.floor(Math.random() * 3);
        event.target.style.backgroundColor = warmColors[randomNumber];
    } else if(coldBtnClicked) {
        let randomNumber = Math.floor(Math.random() * 3);  
        event.target.style.backgroundColor = coldColors[randomNumber];
    }
}

function clearBoard() {
    let boxes = board.getElementsByClassName("box");
    for(let box of boxes) {
        box.style.backgroundColor = "rgb(255,255,255)"
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

eraserBtn.addEventListener("click", () => {
    eraserBtnClicked = !eraserBtnClicked;
    if(eraserBtnClicked) {
        eraserBtn.classList.add("btn-clicked")
    } else {
        eraserBtn.classList.remove("btn-clicked");
    }
})

warmClrBtn.addEventListener("click", () => {
    warmBtnClicked = !warmBtnClicked;
    if(warmBtnClicked) {
        warmClrBtn.classList.add("btn-clicked");
    } else {
        warmClrBtn.classList.remove("btn-clicked");
    }
})

coldClrBtn.addEventListener("click", () => {
    coldBtnClicked = !coldBtnClicked;
    if(coldBtnClicked) {
        coldClrBtn.classList.add("btn-clicked");
    } else {
        coldClrBtn.classList.remove("btn-clicked");
    }
})

clearBtn.addEventListener("click", clearBoard);
 
body.addEventListener("mousedown", () => mouseDown = true);
body.addEventListener("mouseup", () => mouseDown = false);