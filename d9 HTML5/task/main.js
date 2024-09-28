// ______ Progress Bar ______

function progressBar() {
  let progress = document.getElementById('progress');
  let progressBar = document.getElementById('progressBar');
  if (progress.value <= 100) {
    progressBar.value = progress.value;
    document.getElementById('progressBar-value').innerHTML =
      progress.value + '%';
  } else {
    progressBar.value = 0;
    document.getElementById('progressBar-value').innerHTML = 0 + '%';
  }
}

// _______ DrawRectangle ______

function drawRectangle() {
  let canvas = document.getElementById('canvasRect');
  let ctx = canvas.getContext('2d');

  ctx.beginPath();
  ctx.fillStyle = 'blue';
  ctx.fillRect(70, 35, 160, 80);

  ctx.moveTo(0, 0);
  ctx.lineTo(300, 150);

  ctx.moveTo(300, 0);
  ctx.lineTo(0, 150);

  ctx.strokeStyle = 'blue';
  ctx.stroke();
}
drawRectangle();

// _______ DrawLine ______

function drawLine() {
  let canvas = document.getElementById('canvasLine');
  let ctx = canvas.getContext('2d');
  let maxStep = 150;
  let steps = 0;

  function draw() {
    ctx.moveTo(0, 0);
    ctx.lineTo(steps * 2, steps);
    ctx.strokeStyle = 'red';
    ctx.stroke();
    if (steps <= maxStep) {
      steps++;
      setInterval(draw, 100);
    }
  }
  draw();
}
drawLine();

// _____ DrawCircle ______

function drawCircle() {
  const canvas = document.getElementById('canvasCircle');
  const ctx = canvas.getContext('2d');
  let steps = 6.25;

  function draw() {
    ctx.beginPath();
    ctx.arc(150, 75, 60, steps, 2 * Math.PI);
    ctx.stroke();
    if (steps >= 0) {
      steps -= 0.1;
      setInterval(draw, 100);
    }
  }
  draw();
}
drawCircle();
