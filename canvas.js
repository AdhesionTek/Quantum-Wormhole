/**
 * This file controls the canvas.
 */

const DEFAULT_SEED = 1;
const HEIGHT_RADIO = 1;
const CURVE_NUMBER = 512;

/** @typedef {string} CSSSelector A valid CSS Selector. */

/**
 * The possible SRT types.
 * 
 * @readonly
 * @enum {string}
 */
const SRT_TYPES = {
  Nothing: "NOTHING",
  Generated: "GENERATED",
};

export class WormholeCanvas {
  /**
   * @param {CSSSelector=} [selector="canvas"]
   */
  constructor(selector = "canvas") {
    this.canvas = document.querySelector(selector);
    this.context2d = canvas.getContext("2d");

    this.seed = DEFAULT_SEED;
    this.canvasSrt = SRT_TYPES.Nothing;

    canvas.height = canvas.width * HEIGHT_RADIO;
  }

  paint() {
    this.statelessPaint();
    this.canvasSrt = SRT_TYPES.Generated;
  }

  onClick() {
    switch (canvasSrt) {
      case SRT_TYPES.Generated:
        playAudioThenRewind(`audio/a${getRandomInt(3)}.wav`);
        break;
    }
  }

  /** @private */
  get height() {
    return this.canvas.height;
  }

  /** @private */
  get width() {
    return this.canvas.width;
  }

  /**
   * Paint the canvas using name and birthday as input.
   * @private
   */
  statelessPaint() {
    let height = this.height;
    let width = this.width;
  
    context2d.fillStyle = "black";
    context2d.fillRect(0, 0, width, height);
  
    for (let i = 0; i < CURVE_NUMBER; i++) {
      context2d.strokeStyle = `rgb(
              ${Math.floor((255 * i) / CURVE_NUMBER)},
              ${Math.floor((255 * i) / CURVE_NUMBER)},
              ${Math.floor((255 * i) / CURVE_NUMBER)})`;
      context2d.beginPath();
      context2d.moveTo(getRandomInt(width), getRandomInt(height));
      context2d.bezierCurveTo(
        width / 2 + getRandomInt(100) - 50,
        height / 2 + getRandomInt(50) - 50,
        width / 2 + getRandomInt(100) - 50,
        height / 2 + getRandomInt(50) - 50,
        getRandomInt(width),
        getRandomInt(height)
      );
      context2d.stroke();
    }
  }
}

/**
 * Get a random integer between min and max.
 * 
 * @param {number} max
 * @param {number=} [min=0]
 * @returns {number}
 */
const getRandomInt = (max, min = 0) => (
  Math.floor(getRandomBase() * max) + min
);

/**
 * Generate a random number based on the global {@link seed}.
 * 
 * @returns {number}
 */
const getRandomBase = () => {
  let x = Math.sin(seed++) * 10000;
  return x - Math.floor(x);
};

/**
 * Play the audio, and rewind it in the end.
 * 
 * @param {string} src The audio URI.
 */
const playAudioThenRewind = async (src) => {
  const sound = new Audio(src);
  await sound.play();
  sound.currentTime = 0;
}
