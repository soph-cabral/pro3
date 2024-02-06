// Is the user currently drawing?
let isDrawing = false;
// Where did the user click first?
let startPoint;
// All the shapes that have been drawn
let geometry = [];


function setup() {
  createCanvas(windowWidth, windowHeight)
}

function draw() {
  background(255);
  
  // Draw all previous shapes
  for (let i = 0; i < geometry.length; i++)
  {
    let shape = geometry[i];
    line(shape.start.x, shape.start.y, shape.end.x, shape.end.y);
  }

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

// If mouse released, save in memory the shape that was created
function mouseReleased() {
  if (mouseButton === LEFT)
  {
    isDrawing = false;
    let shape = {
      start: startPoint,
      end: {
        x: mouseX, 
        y: mouseY,
      }
    };
    geometry.push(shape);
  }
}