var x = 0; speed = 1;
function setup() {
  createCanvas(800, 600)
}
function draw() {
  strokeWeight(1);
  background(255);
  fill(255);
  rect(0, 400, 800, 200)
  triangle(0, 200, 0, 400, 340, 400)
  if (x < 340) {
    translate(x, 200 * x/340 + 170)
  }
  else {
    translate(x, 370)
  }
  
  line(0, -50, 0, 30);
  fill(255, 212, 128);
  ellipse(0, -50, 30, 30);
  stroke(150, 111, 35);
  strokeWeight(10);
  if (x < 340) {
    line(-20, 17.5, 20, 42.5);
    speed ++;
  }
  else {
    line(-20, 30, 20, 30);
    speed --;
    if (speed == -25) {
      x = 0;
    }
  }
  fill(0)
  stroke(0.125)
  arc(0, -50, 30, 30, radians(180) ,radians(305))
  if (speed > 0){
  x += speed;
  }
  

  
  

}