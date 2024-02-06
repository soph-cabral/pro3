// p5.js version: https://editor.p5js.org/garciadelcastillo/sketches/rufe1_uVr

// A callback handler: whwnever the window has finished loading,
// run whichever function is assigned to the event:
window.onload = draw;

/**
 * A function to draw a house on the canvas.
 */
function draw() {
    // Fetch the canvas and drawing context
    const canvas = document.getElementById('2d-canvas');
    const ctx = canvas.getContext('2d');

    // Background
    ctx.fillStyle = 'rgb(47, 235, 239)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Ground
    ctx.fillStyle = 'rgb(65, 156, 20)';
    ctx.fillRect(0, 200, canvas.width, 100);

    // Tree
    ctx.lineWidth = 10;
    ctx.strokeStyle = 'rgb(144, 115, 30)';
    ctx.beginPath();
    ctx.moveTo(475, 230);
    ctx.lineTo(475, 145);
    ctx.stroke();

    ctx.fillStyle = 'rgb(75, 116, 71)';
    ctx.beginPath();
    ctx.arc(475, 145, 37.5, 0, 2 * Math.PI);
    ctx.fill();
    
    // House
    ctx.fillStyle = '#FFFFFF';
    ctx.fillRect(230, 130, 120, 100);

    // Door
    ctx.fillStyle = 'rgb(246, 208, 184)';
    ctx.fillRect(280, 190, 20, 40);
    ctx.strokeStyle = '#000';
    ctx.lineWidth = 1;
    ctx.strokeRect(280, 190, 20, 40);

    // Roof
    ctx.fillStyle = 'rgb(219, 128, 71)';
    ctx.beginPath();
    ctx.moveTo(200, 130);
    ctx.lineTo(380, 130);
    ctx.lineTo(290, 70);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    // An event to execute when clicked on the canvas
    canvas.onmousedown = e => {
        const rect = canvas.getBoundingClientRect();
        // This only works if the canvas has no padding...
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        console.log(x + " " + y);
    }
}

