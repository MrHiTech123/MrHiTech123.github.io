var count = 0;
var guilx = 160; guily = 0; headx = 225; heady = 450; colorsofhead = [Math.random() * 255, Math.random() * 255, Math.random() * 255, Math.random() * 255, Math.random() * 255, Math.random() * 255, Math.random() * 255, Math.random() * 255, Math.random() * 255]; count = 0; 
function setup() {
  createCanvas(600, 600)
  background(0, 0, 0)
  fill(128, 98, 0)
  rect(150, 0, 10, 500)
  rect(300, 0, 10, 500)
  frameRate(120)
  
}
function draw () {
  background(0)
  fill(128, 98, 0)
  rect(150, 0, 10, 500)
  rect(300, 0, 10, 500)
  rect(150, 0, 150, 10)
  ellipse
  fill(128)
  quad(guilx, guily, guilx + 140, guily, guilx + 140, guily + 100, guilx, guily + 50)
  
  if (guily < 425) {
    guily += 25
  }
  if (count == 0) {
    document.getElementById('count').innerHTML = '<h1>' + (count + 1) + ' innocent guillotined</h1>'
  }
  else {
  document.getElementById('count').innerHTML = '<h1>' + (count + 1) + ' innocents guillotined</h1>'
  }
  //face
  fill(colorsofhead[0], colorsofhead[1], colorsofhead[2])
  ellipse(headx, heady, 100, 100)
  //Mouth
  fill(colorsofhead[6], colorsofhead[7], colorsofhead[8])
  triangle(headx, heady + 5, headx - 20, heady + 25, headx + 20, heady + 25)
  //eyes
  fill(colorsofhead[3], colorsofhead[4], colorsofhead[5])
  if (guily < 425) {
    ellipse(headx - 15, heady - 15, 10, 10)  
    ellipse(headx + 15, heady - 15, 10, 10)    
  }
  else {
    translate(headx - 20, heady - 30)
    rotate(radians(45))
    rect(0, 0, 30, 10)
    rect(10, -10, 10, 30)
    rotate(radians(315))
    translate(30, 0)
    rotate(radians(45))
    rect(0, 0, 30, 10)
    rect(10, -10, 10, 30)
  
  }
}