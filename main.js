let board = document.getElementById("board");
let slider = document.getElementById("slider");
let sliderDesc = document.getElementById("slider-desc");
let clearBtn = document.getElementById("clear");
let lightBtn = document.getElementById("lightening");
let shadeBtn = document.getElementById("shading");
let rainbowBtn = document.getElementById("rainbow");
let userClrBtn = document.getElementById("user-color");
let colorPicker = document.getElementById("colorpicker");

function setPixelValue(value){
    let pixelValue = value;
    sliderDesc.textContent = `Grid size: ${pixelValue} x ${pixelValue}`;
}

setPixelValue(slider.value);

slider.addEventListener("mousemove", () => {
    setPixelValue(slider.value);
})

slider.addEventListener("click", () => {
    setPixelValue(slider.value);
})
