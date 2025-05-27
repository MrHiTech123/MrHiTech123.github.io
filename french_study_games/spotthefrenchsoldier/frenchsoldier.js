var soldx = Math.random() * 400 + 100 ;soldy = Math.random() * 400 + 100; score = 0;
function setup() {
  createCanvas(600, 600)
}
function draw() {
  //torso/shirt
  background(0, 128, 0)
  fill(3, 202, 252)
  rect(soldx - 20, soldy + 12.5, 40, 100)
  //head
  fill(250, 226, 152)
  ellipse(soldx, soldy, 50, 50)
  //eyes
  fill(0)
  ellipse(soldx, soldy, 5, 5)
  ellipse(soldx + 15, soldy, 5, 5)
  //pants
  fill(255, 0, 0)
  triangle(soldx - 20, soldy + 112.5, soldx + 20, soldy + 112.5, soldx + 20, soldy + 75)
  //sash
  fill(243, 255, 166)
  quad(soldx + 20, soldy + 30, soldx + 20, soldy + 40, soldx - 20, soldy + 65, soldx - 20, soldy + 55)
  document.getElementById('count').innerHTML = 'Soldiers spotted: ' + score;
}
function mouseClicked() {
  if (dist(mouseX, mouseY, soldx, soldy + 50) < 75){
    soldx = Math.random() * 400 + 100;
    soldy = Math.random() * 400 + 100;
    score += 1
  }
  
}