// Is the user currently drawing?
let isDrawing = false;
// Where did the user click first?
let startPoint;
// All the shapes that have been drawn
let geometry = [];
// The current type of shape to draw
let shapeMode = 'line';


function setup() {
  createCanvas(windowWidth, windowHeight);

  // Some default styles
  stroke(0);
  strokeWeight(5);
  fill(127, 50);
}

function draw() {
  background(255);
  
  // Draw all previous shapes
  for (let i = 0; i < geometry.length; i++)
  {
    let shape = geometry[i];
    // Chose what to draw based on the shape type
    switch(shape.type)
    {
      case 'line': line(shape.start.x, shape.start.y, shape.end.x, shape.end.y); break;
      case 'rect': rect(shape.start.x, shape.start.y, 
        shape.end.x - shape.start.x, shape.end.y - shape.start.y); break;
    }
    
  }

  // If pressing/dragging, draw line to mouse
  if (isDrawing)
  {
    // Chose what to draw based on the shape mode
    switch(shapeMode)
    {
      case 'line': line(startPoint.x, startPoint.y, mouseX, mouseY); break;
      case 'rect': rect(startPoint.x, startPoint.y, 
        mouseX - startPoint.x, mouseY - startPoint.y); break;
    }
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
      type: shapeMode,
      start: startPoint,
      end: {
        x: mouseX, 
        y: mouseY,
      }
    };
    geometry.push(shape);
  }
}

// Let user choose the type of geometry to draw
function keyPressed() {
  switch(key)
  {
    case 'l': case 'L': shapeMode = 'line'; break;
    case 'r': case 'R': shapeMode = 'rect'; break;
  }
  console.log('Shape Mode changed to "' + shapeMode + '"');
}