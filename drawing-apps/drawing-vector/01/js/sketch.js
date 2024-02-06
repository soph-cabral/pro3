// Is the user currently drawing?
let isDrawing = false;
// Where did the user click first?
let startPoint;

function setup() {
  createCanvas(windowWidth, windowHeight)
}

function draw() {
  background(255);
  
  // If pressing/dragging, draw line to mouse
  if (isDrawing)
  {
    line(startPoint.x, startPoint.y, mouseX, mouseY);
  }
}

// If mouse clicked, start a line
function mousePressed() {
  if (mouseButton === LEFT)
  {
    isDrawing = true;
    startPoint = {
      x: mouseX,
      y: mouseY
    };
  }
}
