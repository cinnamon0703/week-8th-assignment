function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

 
  fill(255);
  if (mouseIsPressed) {
    fill(255, 0, 0);
    let shake = random(-5, 5);
    ellipse(mouseX + shake, mouseY, 50);
  } else {
    ellipse(mouseX, mouseY, 50);
  }
}
