// @ts-check

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
  Url: "URL",
};

export class WormholeCanvas {
  /**
   * @param {CSSSelector=} [selector="canvas"]
   */
  constructor(selector = "canvas") {
    this.canvas = /** @type {HTMLCanvasElement} */ (
      document.querySelector(selector)
    );
    this.context2d = this.canvas.getContext("2d");

    this.seed = DEFAULT_SEED;
    this.canvasSrt = SRT_TYPES.Nothing;
    this.clickHref = "";

    this.canvas.height = this.canvas.width * HEIGHT_RADIO;
    this.canvas.addEventListener("click", this.onClick.bind(this));
  }

  /**
   * @param {string} href
   */
  set ClickHref(href) {
    this.clickHref = href;
    this.canvasSrt = SRT_TYPES.Url;
  }

  paint() {
    this.statelessPaint();
    this.canvasSrt = SRT_TYPES.Generated;
  }

  onClick() {
    switch (this.canvasSrt) {
      case SRT_TYPES.Generated:
        playAudioThenRewind(`audio/a${getRandomInt(this.seed, 3)}.wav`);
        break;
      case SRT_TYPES.Url:
        window.open(this.clickHref, "_blank");
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
    const height = this.height;
    const width = this.width;
    const context2d = this.context2d;

    context2d.fillStyle = "black";
    context2d.fillRect(0, 0, width, height);

    for (let i = 0; i < CURVE_NUMBER; i++) {
      context2d.strokeStyle = `rgb(
              ${Math.floor((255 * i) / CURVE_NUMBER)},
              ${Math.floor((255 * i) / CURVE_NUMBER)},
              ${Math.floor((255 * i) / CURVE_NUMBER)})`;
      context2d.beginPath();
      context2d.moveTo(this.getRandomInt(width), this.getRandomInt(height));
      context2d.bezierCurveTo(
        width / 2 + this.getRandomInt(100) - 50,
        height / 2 + this.getRandomInt(50) - 50,
        width / 2 + this.getRandomInt(100) - 50,
        height / 2 + this.getRandomInt(50) - 50,
        this.getRandomInt(width),
        this.getRandomInt(height)
      );
      context2d.stroke();
    }
  }

  /**
   * @param {[number, number?]} args
   * @returns
   */
  getRandomInt(...args) {
    const val = getRandomInt(this.seed, ...args);
    this.seed++;

    return val;
  }
}

/**
 * Get a random integer between min and max.
 *
 * @param {number} seed
 * @param {number} max
 * @param {number=} [min=0]
 * @returns {number}
 */
const getRandomInt = (seed, max, min = 0) =>
  Math.floor(getRandomBase(seed) * max) + min;

/**
 * Generate a random number based on the global {@link seed}.
 *
 * @param {number} seed
 * @returns {number}
 */
const getRandomBase = (seed) => {
  let x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
};

/** @type {Record<string, HTMLAudioElement>} */
const audioCache = {}

/**
 * Play the audio, and rewind it in the end.
 *
 * @param {string} src The audio URI.
 */
const playAudioThenRewind = async (src) => {
  if (!(src in audioCache)) {
    audioCache[src] = new Audio(src);
  }
  audioCache[src].currentTime = 0;
  await audioCache[src].play();
};
