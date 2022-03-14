// Get Canvas

const canvas = document.querySelector("canvas");

const context2d = canvas.getContext("2d");


var seed = 1;

/**
 * Paint the canvas using name and birth day as input.
 */
function paintCanvas() {

    let nameInput = document.getElementById("nameInput");
    var birthInput = document.getElementById("birthdayInput");

    //console.log(birthInput.valueAsNumber);

    if (!nameInput.value || !birthInput.value) {
        alert("Input is not vaild.");
        return;
    }


    height = canvas.height;
    width = canvas.width;

    context2d.fillStyle = "black";
    context2d.fillRect(0, 0, width, height);

    const fullValue = nameInput.value + birthInput.valueAsNumber;

    seed = getHash(fullValue);

    const curveNumber = 512;
    for (let i = 0; i < curveNumber; i++) {
        context2d.strokeStyle = `rgb(
            ${Math.floor(255 * i / curveNumber)},
            ${Math.floor(255 * i / curveNumber)},
            ${Math.floor(255 * i / curveNumber)})`;
        context2d.beginPath();
        context2d.moveTo(getRandomInt(width), getRandomInt(height));
        context2d.bezierCurveTo(
            width / 2 + getRandomInt(100) - 50, height / 2 + getRandomInt(50) - 50,
            width / 2 + getRandomInt(100) - 50, height / 2 + getRandomInt(50) - 50,
            getRandomInt(width), getRandomInt(height));
        context2d.stroke();
    }
    seed = 1;
}

/**
 * Get hash value of a string
 * @param input
 * @returns {number}
 */
function getHash(input) {
    var hash = 0, i, chr;
    if (input.length === 0) return hash;
    for (i = 0; i < input.length; i++) {
        chr = input.charCodeAt(i);
        hash = ((hash << 5) - hash) + chr;
        hash |= 0; // Convert to 32bit integer
    }
    return hash;
};

/**
 * Get a random int
 * @param max
 * @returns {number}
 */
function getRandomInt(max) {
    return Math.floor(random() * max);
}


function random() {
    var x = Math.sin(seed++) * 10000;
    return x - Math.floor(x);
}
