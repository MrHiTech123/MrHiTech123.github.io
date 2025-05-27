function setup() {
  createCanvas(800, 600)
}
function draw() {
  strokeWeight(1)
  background(255)
  fill(255)
  rect(0, 400, 800, 200)
  triangle(0, 200, 0, 400, 340, 400)
  if (mouseX < 340) {
    translate(mouseX, 200 * mouseX/340 + 170)
  }
  else {
    translate(mouseX, 370)
  }
  
  line(0, -50, 0, 30);
  fill(255, 212, 128);
  ellipse(0, -50, 30, 30);
  stroke(150, 111, 35);
  strokeWeight(10);
  if (mouseX < 340) {
    line(-20, 17.5, 20, 42.5);
  }
  else {
    line(-20, 30, 20, 30);
  }
  fill(0)
  stroke(0.125)
  arc(0, -50, 30, 30, radians(180) ,radians(305))
  
  
  

}