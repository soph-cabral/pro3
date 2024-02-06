let shapeColor = [255, 0, 0, 63];
let strokeWidth = 10;
let hue = 0;
let hueSpeed = 0.5;
let angle = 0;
let len = 100;
let angleSpeed = 0.025;
let thickness = 10;
let alpha = 50;

let buffer;
let prev = {};
let brushType = "line";

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 360, 100, 100, 100);

  buffer = createGraphics(windowWidth, windowHeight);
  buffer.background(255);
  buffer.colorMode(HSB, 360, 100, 100, 100);
}

function draw() {
  image(buffer, 0, 0);

  // Draw the rotating line
  stroke(hue, 100, 100, alpha);
  strokeWeight(thickness);
  let x1 = mouseX + Math.cos(angle) * len;
  let y1 = mouseY + Math.sin(angle) * len;
  let x2 = mouseX + Math.cos(angle + Math.PI) * len;
  let y2 = mouseY + Math.sin(angle + Math.PI) * len;
  line(x1, y1, x2, y2);

  
  if (mouseIsPressed) {
    // Draw
    if (brushType === "line") {
      buffer.stroke(hue, 100, 100, alpha);
      buffer.strokeWeight(thickness);
      buffer.line(x1, y1, x2, y2);
    } else if (brushType === "ribbon") {
      buffer.noStroke();
      buffer.fill(hue, 100, 100, alpha);
      buffer.quad(x1, y1, x2, y2, prev.x2, prev.y2, prev.x1, prev.y1);
    }
  }
  
  angle += angleSpeed;
  hue += hueSpeed;
  if (hue > 360) {
    hue = 0;
  }
  prev = { x1, y1, x2, y2 };
}

function keyTyped() {
  switch (key) {
    case 'l':
      brushType = "line";
      break;
    case 'r':
      brushType = "ribbon";
      break;
    case 's':
      saveCanvas('myCanvas', 'png');
      break;
  }
}
