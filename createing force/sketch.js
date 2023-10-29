let moverA;
let moverB;
let windForceApplied = false;

function setup() {
  createCanvas(640, 240);
  moverA = new Mover(200, 30, 10);
  moverB = new Mover(440, 30, 2);
  createP('Click mouse to apply wind force.');
}

function draw() {
  background(255);

  let gravity = createVector(0, 0.1);

  let gravityA = p5.Vector.mult(gravity, moverA.mass);
  moverA.applyForce(gravityA);

  let gravityB = p5.Vector.mult(gravity, moverB.mass);
  moverB.applyForce(gravityB);

  if (mouseIsPressed) {
    let wind = createVector(0.1, 0);
    moverA.applyForce(wind);
    moverB.applyForce(wind);
  } else {
    let counter = createVector(-0.01, 0);
    moverA.applyForce(counter);
    moverB.applyForce(counter);
  }

  moverA.update();
  moverA.display();
  moverA.checkEdges();

  moverB.update();
  moverB.display();
  moverB.checkEdges();
}
