/**
 * This js file controls the canvas.
 * @type {HTMLCanvasElement}
 */

// Get Canvas and inputs
const canvas = document.querySelector("canvas");
const context2d = canvas.getContext("2d");

const defaultSeed = 1;
let seed = defaultSeed;
let canvasSrt = "NOTHING";

const heightRatio = 1;
canvas.height = canvas.width * heightRatio;

/**
 * Paint the canvas using name and birthday as input.
 */
function paintCanvas(seedInput) {
    seed = seedInput;

    let height = canvas.height;
    let width = canvas.width;

    context2d.fillStyle = "black";
    context2d.fillRect(0, 0, width, height);

    const curveNumber = 512;
    for (let i = 0; i < curveNumber; i++) {
        context2d.strokeStyle = `rgb(
            ${Math.floor(255 * i / curveNumber)},
            ${Math.floor(255 * i / curveNumber)},
            ${Math.floor(255 * i / curveNumber)})`;
        context2d.beginPath();
        context2d.moveTo(getRandomInt(width), getRandomInt(height));
        context2d.bezierCurveTo(width / 2 + getRandomInt(100) - 50, height / 2 + getRandomInt(50) - 50, width / 2 + getRandomInt(100) - 50, height / 2 + getRandomInt(50) - 50, getRandomInt(width), getRandomInt(height));
        context2d.stroke();
    }
    canvasSrt = "generated";
}

/**
 * Get a random int
 * @param max
 * @returns {number}
 */
function getRandomInt(max) {
    return Math.floor(random() * max);
}


function random() {
    let x = Math.sin(seed++) * 10000;
    return x - Math.floor(x);
}

function canvasOnClick() {
    switch (canvasSrt){
        case "NOTHING":
            return;
        case "generated":
            let sound = new Audio("audio/a" + getRandomInt(3) + ".wav");
            sound.play().then(r => {
                sound.currentTime = 0
            });
            return;
        default:
            window.open(canvasSrt, '_blank');
            return;
    }
}
