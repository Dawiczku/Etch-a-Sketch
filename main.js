let board = document.getElementById("board");
let slider = document.getElementById("slider");
let sliderDesc = document.getElementById("slider-desc");
let clearBtn = document.getElementById("clear");
let lightBtn = document.getElementById("lightening");
let shadeBtn = document.getElementById("shading");
let rainbowBtn = document.getElementById("rainbow");
let userClrBtn = document.getElementById("user-color");
let colorPicker = document.getElementById("colorpicker");

for(let i = 0; i < 32; i++){
    let box = document.createElement("div");
    box.className = "box";
    board.appendChild(box);
}