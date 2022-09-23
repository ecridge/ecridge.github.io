/*! motion.js | ecridge.com */

function setup() {
  var p5Canvas = createCanvas(windowWidth, 57);
  p5Canvas.parent('site-motion');
  noiseSeed(29347289);
  rectMode('center');
  stroke(230);
  noFill();
}

function windowResized() {
  resizeCanvas(windowWidth, height);
  stroke(230);  // BUG: p5.js seems to forget stroke upon rezise;
}

function draw() {
  var time = new Date();
  var t = time.valueOf();

  background(255);

  for (i = 0; i < 10; i++) {
    side = 2 + 48 * noise(0.00004 * t, i + 1000);
    rect((1.2 * noise(0.00002 * t, i) - 0.1) * width, (2 * noise(0.00008 * t, i) - 0.5) * height, side, side);
  }
}
