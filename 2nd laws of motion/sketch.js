let redpos;
let bluepos;
let redacc;
let blueacc;

function setup() {
  createCanvas(400, 400);

  redpos = createVector(50, 50);
  bluepos = createVector(50, 150);
  redacc = createVector(0.1, 0); 
  blueacc = createVector(0.05, 0); 
}

function draw() {
  background(220);

  fill(255, 0, 0);
  square(redpos.x, redpos.y, 30);

  fill(0, 0, 255);
  square(bluepos.x, bluepos.y, 50);
  
  if (redpos.x > width) {
   redpos.x = 0;
  } else if (redpos.x < -redpos.width) {
    redpos.x = width;
  }
  
  if (bluepos.x > width) {
   bluepos.x = 0;
  } else if (bluepos.x < -bluepos.width) {
    bluepos.x = width;
  }



  if (keyIsDown(RIGHT_ARROW)) {
    redpos.add(redacc);
    bluepos.add(blueacc);
    redacc.add(0.1, 0); 
    blueacc.add(0.05, 0); 
  } else {
    redacc.set(0.1, 0); 
    blueacc.set(0.05, 0); 
  }
}