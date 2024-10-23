/* eslint-disable max-len */

export class Wave {
  constructor(config: {
    phase: number;
    canvas: HTMLCanvasElement;
    amplitude: number;
    frequency: number;
    color: string;
    shift: number;
    damping: number;
  }) {
    this.canvas = config.canvas;
    this.frequency = config.frequency;
    this.phase = config.phase;
    this.amplitude = config.amplitude;
    this.color = config.color;
    this.shift = config.shift;
    this.lineWidth = 2;
    this.damping = config.damping;
    this.context = this.canvas.getContext('2d');
    this.paused = true;
    this.playbackSpeed = 1;
    this.origin = {
      x: 0,
      y: this.canvas.height
    };
  }

  canvas;

  context;

  color: string;

  // Position from wave to start drawing
  origin: { x: number; y: number };

  // number between 0-1: Damping factor
  damping: number;

  // Width of the sine wave, radius of the circles on the line
  lineWidth: number;

  // Phase shift at each animation keyframe
  shift: number;

  amplitude: number;

  phase: number;

  frequency: number;

  fixedEnd = true;

  fixedStart = true;

  gradient = false;

  outline = false;

  paused: boolean;

  playbackSpeed: number;

  /**
   * Map a number from one range to another
   */
  map = (num: number, inMin: number, inMax: number, outMin: number, outMax: number) =>
    ((num - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;

  damp = (end: number, x: number, size: number) => {
    const effectiveValue = 1 - x / end;
    return 2 * effectiveValue * (x / end) * size;
  };

  /**
   * Draw a single point on the canvas
   * Uses arc() method of the context with radius 2
   * Depending on the values of outline, fill and graient flags , it will draw a point on the wave
   * */
  drawPoint(x: number, y: number, color: string) {
    if (!this.context) {
      return;
    }

    const r = this.lineWidth / 2;
    this.context.beginPath();

    if (this.outline) {
      this.context.fillStyle = color;
      this.context.lineWidth = 2;
      this.context.arc(x, y, r, 0, 2 * Math.PI);
      this.context.fill();
    }

    if (this.gradient) {
      const linearGradient = this.context.createLinearGradient(0, 0, 0, this.canvas.height);
      linearGradient.addColorStop(0.1, color);
      linearGradient.addColorStop(1, 'transparent');
      this.context.fillStyle = linearGradient;
    } else {
      this.context.fillStyle = color;
    }

    this.context.fillRect(x - r, y - r, r, this.canvas.height - y + r);
  }

  buildSine(wavelength: number, phase: number, color: string, amplitude: number, frequency: number) {
    for (let i = this.origin.x, n = this.origin.x + wavelength; i < n; i += 1) {
      const y = amplitude * Math.sin(frequency * (i + phase));

      if (this.fixedStart && this.fixedEnd) {
        this.drawPoint(i, this.origin.y + this.damp(n, i, this.damping) * y, color);
      } else if (this.fixedStart) {
        this.drawPoint(i, this.origin.y + this.map(i, this.origin.x, n, 0, this.damping) * y, color);
      } else if (this.fixedEnd) {
        this.drawPoint(i, this.origin.y + (this.damping - this.map(i, this.origin.x, n, 0, this.damping)) * y, color);
      } else {
        this.drawPoint(i, this.origin.y + y, color);
      }
    }
  }

  redraw() {
    this.phase += this.shift * (this.paused ? 1 : 2 * this.playbackSpeed);
    this.buildSine(this.canvas.width, this.phase, this.color, this.amplitude, this.frequency);
  }

  setPlay() {
    this.paused = false;
  }

  setPause() {
    this.paused = true;
  }

  setPlaybackSpeed(playbackSpeed: number) {
    this.playbackSpeed = playbackSpeed;
  }
}
