var screen;
var w = 50;
var serif = false;
var dir = 0, ydir = 0;
var colors = ['black', 'white'];
var color = 'black';


function setup() {
  screen = createCanvas(600, 600);
  screen.parent('screen');
  noStroke();
}




mytri = (x, y, dir, ydir) => {
  triangle(x, y, x, y + (ydir * 50), x + (dir * 50), y);
}

for (var i = 0; i < colors.length; i++) {
  document.getElementById('colorbuttons').innerHTML += '<button onclick="color = \'' + colors[i] + '\'; render(document.getElementById(\'number_entered\').value);">' + colors[i][0].toUpperCase() + colors[i].slice(1).toLowerCase() + '</button><br>';
}





function render(num) {
  while (num.length < 4){
    num = ' ' + num;
  }
  var x,y;
  clear();
  fill(color);
  rect(275, 0, 50, 600);
  for (var i = 0; i < 4; i++) {
    //Horizontal line at end
    if ('1579'.includes(num[i])) {
      if (i < 2) {
        y = 600 - w;
      }
      else {
        y = 0;
      }
      if (i % 2) {
        x = 325;
      }
      else {
        x = 75;
      }
      rect(x, y, 200, 50);
    }
    // Horizontal line in middle
    if ('289'.includes(num[i])) {
      if (i < 2) {
        y = 350;
      }
      else {
        y = 250 - w;
      }
      if (i % 2) {
        x = 325;
      }
      else {
        x = 75;
      }
      rect(x, y, 200, 50);
    }
    // Vertical line at away place (>6)

    if ('789'.includes(num[i])) {
      if (i < 2) {
        y = 350;
      }
      else {
        y = 0;
      }
      if (i % 2) {
        x = 550 - w;
      }
      else {
        x = 50;
      }
      rect(x, y, 50, 250);
    }
    // Vertical line at away place (6)

    if ('6'.includes(num[i])) {
      if (i < 2) {
        y = 350;
      }
      else {
        y = 0;
      }
      if (i % 2) {
        x = 525 - w;
      }
      else {
        x = 75;
      }
      rect(x, y, 50, 250);
    }
    // Down diagonal (3)
    if (num[i] == 3) {
      if (i < 2) {
        y1 = 550;
        y2 = 350;
      }
      else {
        y1 = 0;
        y2 = 200;
      }
      
      if (i % 2) {
        x1 = 325;
        x2 = 525;
      }
      else {
        x1 = 275;
        x2 = 75;
      }
      quad(x1, y1, x1, y1 + 50, x2, y2 + 50, x2, y2);
    }
    // up diagonal (4 and 5)
    if ('45'.includes(num[i])) {
      if (i < 2) {
        y1 = 550;
        y2 = 350;
      }
      else {
        y1 = 0;
        y2 = 200;
      }
      
      if (i % 2) {
        x1 = 325;
        x2 = 525;
      }
      else {
        x1 = 275;
        x2 = 75;
      }
      quad(x2, y1, x2, y1 + 50, x1, y2 + 50, x1, y2);
    }
    if (serif) {
      if ('7'.includes(num[i])) {
        if (i < 2) {
          y = 550;
          ydir = -1
        }
        else {
          y = 50;
          ydir = 1
        }
        
        if (i % 2) {
          x = 500;
          dir = -1;
        }
        else {
          x = 100;
          dir = 1;
        }
        mytri(x, y, dir, ydir);
      }
      
      if ('89'.includes(num[i])) {
        if (i < 2) {
          y = 400;
          ydir = 1
        }
        else {
          y = 200;
          ydir = -1
        }
        
        if (i % 2) {
          x = 500;
          dir = -1;
        }
        else {
          x = 100;
          dir = 1;
        }
        mytri(x, y, dir, ydir);
      }

      if ('28'.includes(num[i])) {
        if (i < 2) {
          y = 400;
          ydir = 1
        }
        else {
          y = 200;
          ydir = -1
        }
        
        if (i % 2) {
          x = 325;
          dir = 1;
        }
        else {
          x = 275;
          dir = -1;
        }
        mytri(x, y, dir, ydir);
      }

      if ('1579'.includes(num[i])) {
        if (i < 2) {
          y = 550;
          ydir = -1
        }
        else {
          y = 50;
          ydir = 1
        }
        
        if (i % 2) {
          x = 325;
          dir = 1;
        }
        else {
          x = 275;
          dir = -1;
        }
        mytri(x, y, dir, ydir);
      }


      // 4 serif
      if ('4'.includes(num[i])) {
        if (i < 2) {
          y = 449;
          ydir = -1
        }
        else {
          y = 151;
          ydir = 1
        }
        
        if (i % 2) {
          x = 325;
          dir = 1;
        }
        else {
          x = 275;
          dir = -1;
        }
        mytri(x, y, dir, ydir);
      }
      // 3 serif
      if ('3'.includes(num[i])) {
        if (i < 2) {
          y = 501;
          ydir = 1
        }
        else {
          y = 99;
          ydir = -1
        }
        
        if ((i % 2)) {
          x = 325;
          dir = 1;
        }
        else {
          x = 275;
          dir = -1;
        }
        mytri(x, y, dir, ydir);
      }


      if ('6'.includes(num[i])) {
        if (i < 2) {
          y = 350;
          ydir = 1
        }
        else {
          y = 250;
          ydir = -1
        }
        
        if (i % 2) {
          x = 475;
          dir = -1;
        }
        else {
          x = 125;
          dir = 1;
        }
        mytri(x, y, dir, ydir);

        if (i < 2) {
          y = 600;
          ydir = -1
        }
        else {
          y = 0;
          ydir = 1
        }
        
        if (i % 2) {
          x = 475;
          dir = -1;
        }
        else {
          x = 125;
          dir = 1;
        }
        mytri(x, y, dir, ydir);
      }











      
    }
    
    
  }
}