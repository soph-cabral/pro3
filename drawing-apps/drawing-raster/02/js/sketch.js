
const minR = 5;
const maxR = 50;
const radiusVelocity = 0.01;


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  noStroke();
}


function draw() {
  // Create a value that oscillates between -1 and 1 over time
  const radiusOsc = Math.sin(radiusVelocity * frameCount);
  // Linearly interpolate it between the radii values
  const radius = map(radiusOsc, -1, 1, minR, maxR);
  // const radius = minR + (maxR - minR) * (radiusOsc - (-1)) / (1 - (-1));  // manual lerp 🤓
  
  // Dump to the console
  console.log(`osc:${radiusOsc}, r:${radius}`);  

  // Apply color to fill and draw
  fill(0, 10);
  circle(mouseX, mouseY, 2 * radius);
}
