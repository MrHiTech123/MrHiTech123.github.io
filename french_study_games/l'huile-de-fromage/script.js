var amountoforange = 255, win, sizzle, started = false;
function preload() {
  sizzle = loadSound('sizzle.mp3');
}
function setup() {
  win = createCanvas(window.innerWidth, window.innerHeight)
  win.parent('screen')
}
function draw() {
  background(0, 255, 255);
  fill(255, 255,0)
  rect(0, window.innerHeight/3, window.innerWidth, 2 * window.innerHeight/3);
  fill(255, amountoforange, 0);
  rect(window.innerWidth * 2/5, window.innerHeight * 5/12, window.innerWidth/5);
  if (started) {
    if (amountoforange > 165) {
      amountoforange -= 0.1
    }
    if (!sizzle.isPlaying()) {
      sizzle.play();
    }
  }
  
}