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

function setCurrentColor(newColor) {
    currentColor = newColor;
}

function setCurrentMode(newMode) {
    currentMode = newMode;
}

function setCurrentSize(newSize) {
    currentSize = newSize;
}