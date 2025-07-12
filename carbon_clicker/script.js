if (document.cookie == '') {
  document.cookie = 'data=0,0,0,0,0,0,0,0,0,0,0,0,0'
}
function setCookie(cname, cvalue) {
  document.cookie = cname + "=" + cvalue + ";";
}

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
info = [0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var total = 0;
var increment = 0;



var screen, clicker_background;
var face = 0;
var faces;
var breath;
var images = {}
var opacity = 0;
var modifier = 1;
function click() {
    total += modifier
    opacity += .1
    if (Math.random() < 1/7) {
      breath.play();
    }
}

/*function save_game() {
  setCookie('data', [total, increment, amounts['Trash'], amounts['Cattle Farming'], amounts['Airplanes'], amounts['Factories'], amounts['Cutting Down Rainforests'], amounts['Dumping Chemicals'], amounts['Fracking'], amounts['Portal To Co2 Dimension'], amounts['Plastic Meteors'], amounts['Ozone Black Hole'], amounts['Plasticmageddon']].join(','))
}*/

function update() {
    total += increment;
    opacity += 0.1;
}
window.setInterval(update, 1000);

function setup() {
    screen = createCanvas(400, 400);
    screen.parent('screen');
    frameRate(5);
}
function preload() {
    clicker_background = loadImage('assets/clicker_background.png');
    face_neutral = loadImage('assets/face_neutral.png');
    face_exhaling = loadImage('assets/face_exhaling.png');
    faces = {
        0: face_neutral,
        1: face_exhaling
    }
    breath = loadSound('assets/breath.mp3');
  
}

function draw() {
    total = Math.round((total * 10))/10
    increment = Math.round((increment * 10))/10
    background(0, 0, 0);
    
    fill(255); 
    textSize(20)
    image(clicker_background, 0, 0, 400, 400);
    fill(128, 128, 128, opacity);
    rect(0, 0, 400);
    image(faces[face], 0, 50, 300, 300);
    fill(255);
    if (face == 1) {
        text('+' + modifier, mouseX, mouseY)
    }
    textStyle(BOLD);
    textSize(25);
    fill(250,80,50);
    text('Total pollution: ' + total, 10, 370);
    text('Pollution per second: ' + increment, 10, 395);
    
    face = 0
    
}
function mouseClicked() {
    if (mouseX > 0 && mouseX < 400 && mouseY > 0 && mouseY < 400) {
        click();
        face = 1
        
    }
}
var amounts = {
    'Person': info[2],
    'Trash': info[3],
    'Cattle Farming': info[4],
    'Airplanes': info[5],
    'Factories': info[6],
    'Cutting Down Rainforests': info[7],
    'Dumping Chemicals': info[8],
    'Fracking': info[9],
    'Portal To Co2 Dimension': info[10],
    'Plastic Meteors': info[11],
    'Ozone Black Hole': info[12],
    'Plasticmageddon': info[13],
}
var item_increments = {
    'Person': 0.1,
    'Trash': 1,
    'Cattle Farming': 5,
    'Airplanes': 11,
    'Factories': 40,
    'Cutting Down Rainforests': 100,
    'Dumping Chemicals': 300,
    'Fracking': 700,
    'Portal To Co2 Dimension': 2000,
    'Plastic Meteors': 5000,
    'Ozone Black Hole': 10000,
    'Plasticmageddon': 30000,


}
var prices = {
    'Person': 15,
    'Trash': 100,
    'Cattle Farming': 500,
    'Airplanes': 1100,
    'Factories': 4000,
    'Cutting Down Rainforests': 10000,
    'Dumping Chemicals': 30000,
    'Fracking': 70000,
    'Portal To Co2 Dimension': 200000,
    'Plastic Meteors': 500000,
    'Ozone Black Hole': 1000000,
    'Plasticmageddon': 3000000,
}
var modifiers = {
    'Person': 1.5,
    'Trash': 2,
    'Cattle Farming': 4,
    'Airplanes': 8,
    'Factories': 16,
    'Cutting Down Rainforests': 32,
    'Dumping Chemicals': 64,
    
    'Fracking': 128,
    'Portal To Co2 Dimension': 256,
    'Plastic Meteors': 512,
    'Ozone Black Hole': 1024,
    'Plasticmageddon': 2048,
}

function buy(item) {
  if (total >= prices[item]) {
    if (modifiers[item] > modifier) {
      modifier = modifiers[item]
    }
    total -= prices[item];
    prices[item] = Math.round(90 * prices[item]/8)/10
    increment += item_increments[item];
    amounts[item] += 1;
    update_table()
  }
}
function update_table() {
    var thing_to_make_it = ''
    thing_to_make_it += '<table class="shoptable"><tr class="shoptable"><td class="shoptable">Item</td><td class="shoptable">Cost</td><td class="shoptable">Amount</td><td class="shoptable">Value (PPS)</td>'
    for (var item in prices) {
        if (item == 'Factories' || item == 'Cattle Farming' || item == 'Ozone Black Hole' || item == 'Plastic Meteors') {
            thing_to_make_it += '<tr class="shoptable"><td class="shoptable"><button class="shopbutton" onclick="buy(\'' + item + '\')"> <img src="assets/' + item + '.gif" height="50" width="50">' + item + ' </button></td> <td class="shoptable">'+ prices[item] + '</td> <td class="shoptable">' + amounts[item] + '</td> <td class="shoptable">' + item_increments[item] + '</td>'
        
        }
        else {
            thing_to_make_it += '<tr class="shoptable"><td class="shoptable"><button class="shopbutton" onclick="buy(\'' + item + '\')"> <img src="assets/' + item + '.png" height="50" width="50">' + item + ' </button></td> <td class="shoptable">'+ prices[item] + '</td> <td class="shoptable">' + amounts[item] + '</td> <td class="shoptable">' + item_increments[item] + '</td>'
        }
    }

    thing_to_make_it += '</table>'
    document.getElementById('shop').innerHTML = thing_to_make_it;
}
update_table();
