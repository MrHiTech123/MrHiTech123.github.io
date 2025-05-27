var hebanner = function(p){
  //credit for shuffling function goes to knuth-shuffle
  var frbannerscreen;
  p.shuffle = function(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
  }

    return array;
  }
  p.setup = function() {
  frbannerscreen = p.createCanvas(window.innerWidth, 45);
  frbannerscreen.parent('banner');
  p.background(203);
  }
  var frbannerX = window.innerWidth;
  var forStroke;
  var clearing = true;
    p.draw =  function() {

    if (!clearing){
      forClearing = p.shuffle([0, 255, 0]);
      p.stroke(forClearing[0], forClearing[1], forClearing[2]);
      p.fill(forClearing[0], forClearing[1], forClearing[2]);
    }
    if (clearing){
      p.stroke(203, 203, 203);
      p.fill(203, 203, 203);
      p.rect(0, 0, window.innerWidth, 4);
    }
    for (var frbannerY = 10; frbannerY < 50; frbannerY += 10){
      p.ellipse(frbannerX, frbannerY, 10, 10);
    }
    if (frbannerX == window.innerWidth) {
      clearing = !clearing;
    if (!clearing) {
      p.background(203, 203, 203);
    }
    }

    frbannerX -= 1;
    if (frbannerX <= 1) {
      frbannerX = window.innerWidth;
    }

  };}
var myp5 = new p5(hebanner);
