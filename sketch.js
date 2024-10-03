function setup() {
  createCanvas(windowWidth, windowHeight); 
  background(200); 

  Pyramid(width / 2, height / 2, width / 4); // Center of the canvas
}

function Pyramid(centerX, centerY, size) {
  noStroke(); 

  //base triangle
  fill(255, 0, 0);
  triangle(centerX - size, centerY + size, centerX, centerY - size, centerX + size, centerY + size);
  
  //left trapezoid 
  fill(0, 255, 0); 
  beginShape();
  vertex(centerX - size, centerY + size);
  vertex(centerX - size / 2, centerY + size / 2);
  vertex(centerX, centerY + size);
  vertex(centerX - size / 2, centerY + size + size / 2);
  endShape(CLOSE);

  //right trapezoid
  fill(0, 0, 255);
  beginShape();
  vertex(centerX + size, centerY + size);
  vertex(centerX + size / 2, centerY + size / 2);
  vertex(centerX, centerY + size);
  vertex(centerX + size / 2, centerY + size + size / 2);
  endShape(CLOSE);

  //top trapezoid
  fill(255, 165, 0);
  beginShape();
  vertex(centerX, centerY - size);
  vertex(centerX - size / 2, centerY - size / 2);
  vertex(centerX + size / 2, centerY - size / 2);
  vertex(centerX, centerY);
  endShape(CLOSE);

  //bottom trapezoid
  fill(128, 0, 128); 
  beginShape();
  vertex(centerX - size / 2, centerY + size / 2);
  vertex(centerX + size / 2, centerY + size / 2);
  vertex(centerX + size, centerY + size + size / 2);
  vertex(centerX - size, centerY + size + size / 2);
  endShape(CLOSE);
}

function draw() {
}
