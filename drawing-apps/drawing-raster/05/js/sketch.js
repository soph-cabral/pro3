
const minR = 5;
const maxR = 400;
// const radiusVelocity = 0.01;
// const colorVelocity = 0.1;
// const angleVelocity = 0.0256868;  // use non-whole decimals to avoid phasing 
const angleRadius = 100;

// Get values from sliders
const radiusSlider = document.getElementById('slider-radius');
let radiusVelocity = radiusSlider.value * 0.001;
radiusSlider.oninput = () => radiusVelocity = radiusSlider.value * 0.001;

const colorSlider = document.getElementById('slider-color');
let colorVelocity = colorSlider.value * 0.001;
colorSlider.oninput = () => colorVelocity = colorSlider.value * 0.001;

const angleSlider = document.getElementById('slider-angle');
let angleVelocity = angleSlider.value * 0.001;
angleSlider.oninput = () => angleVelocity = angleSlider.value * 0.001;


function setup() {
  const canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent('canvas-container');
  background(255);
  noStroke();
}


function draw() {
  // Create a value that oscillates between -1 and 1 over time
  const radiusOsc = Math.sin(radiusVelocity * frameCount);
  // Linearly interpolate it between the radii values
  const radius = map(radiusOsc, -1, 1, minR, maxR);
  // const radius = minR + (maxR - minR) * (radiusOsc - (-1)) / (1 - (-1));  // manual lerp 🤓
  
  // Create a value that oscillates between -1 and 1 over time
  const colorOsc = Math.sin(colorVelocity * frameCount);
  // Linearly interpolate between gray colors
  const gray = map(colorOsc, -1, 1, 0, 255);  
  // const gray = 0 + (255 - 0) * (colorOsc - (-1)) / (1 - (-1)); // manual lerp 🤓

  // Compute a rotating center point over time
  const x = 0.5 * width + angleRadius * Math.cos(angleVelocity * frameCount);
  const y = 0.5 * height + angleRadius * Math.sin(angleVelocity * frameCount);
  
  // Apply color to fill and draw
  fill(gray, gray, gray, 10); 
  circle(x, y, 2 * radius);
  
  // Add an additional tiny circle for refernece
  fill(0);
  circle(x, y, 2 * minR);
}

/**
 * What to do when mouse is clicked.
 */
function mouseReleased() {
  if (mouseButton === RIGHT)
  {
    // Prompt the browser to download a snapshot of the canvas
    saveCanvas('drawing.png');
  }
}