review = function(p) {
  var reviewscreen, drawing = true, reviewW;
  p.setup = function() {
    reviewscreen = p.createCanvas(250, 250)
    reviewscreen.parent('study');
    p.frameRate(60);
    p.background(0, 255, 255);
    p.stroke(100, 0, 255);
    p.fill(255, 255, 0);
    p.strokeWeight(0.75)
  }
  var reviewX = 0;
  var reviewY = 0;
  var rotation = 0;
  p.draw = function() {
    if (drawing) {
      p.fill(255, 255, 0);
      p.stroke(100, 0, 255);
      reviewW = 50
    }
    else {
      p.fill(0, 255, 255);
      p.stroke(0, 255, 255);
      reviewW = 56;
      
      
    }
    p.translate(125, 125);
    p.rotate(p.radians(rotation));
    if (drawing) {
      p.triangle(reviewX, reviewY + 25, reviewX + 50, reviewY, reviewX + 50, reviewY + 50);
      p.rect(reviewX + 50, reviewY + 15, reviewW, 20);
    }
    else {
      p.triangle(reviewX, reviewY + 24, reviewX + 50, reviewY - 1, reviewX + 50, reviewY + 49);
      p.rect(reviewX + 50, reviewY + 14, reviewW, 20);
    }
    
    rotation += 1;
    if (rotation % 400 == 0) {
      drawing = !drawing;
      if (drawing) {
        p.background(0, 255, 255);
      }
    }
  };}
var myp6 = new p5(review);