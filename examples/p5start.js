function setup() {
  createCanvas(500, 500);
  print("exemplo original do Processing");
  background(128);
}

function draw() {
  fill(255);
  stroke(0);
  ellipse(mouseX, mouseY, 30, 30);
}
