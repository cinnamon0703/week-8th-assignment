let pos = 0; 
let vel = 3; 
let isMousePressed = false; 

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  if (isMousePressed) {
    vel = vel * 0.95; 
  } else {
    if (vel < 3) {
      vel = vel + 0.1;
    }
  }
  
  pos = pos + vel;
  
  
  if (pos > width) {
    pos = 0;
  } else if (pos < 0) {
    pos = width;
  }
  
  // 물체 그리기
  ellipse(pos, height / 2, 20, 20);
}

function mousePressed() {
  isMousePressed = true;
}

function mouseReleased() {
  isMousePressed = false;
}
