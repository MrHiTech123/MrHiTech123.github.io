var oldlink, game, colornum;
function shuffle(array) {
  var currentIndex = array.length,  randomIndex;
  while (0 !== currentIndex) {

    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

for (var i = 0; i < document.getElementsByClassName('imperepl').length; i ++) {
  oldlink = document.getElementsByClassName('imperepl')[i].href;
  game = oldlink.split('.')[0].slice(8)
  document.getElementsByClassName('imperepl')[i].href = '/play/?game=' + encodeURIComponent(game);
};
function pridemonthfirst() {
  window.onscroll = function() {
    colornum = Math.random() * 255;
    document.body.style.background = 'rgb(' + shuffle([colornum, 255 - colornum, 0]).join(', ') + ')'
  }
  document.getElementById('aprilfools').innerHTML = 'Happy Pride Month!<br>No, it will not be like this all month!';
}

function aprilfools() {
  window.setInterval(function() { document.body.style.fontFamily = 'jedi';
    for (var i = 0; i < document.getElementsByTagName('button').length; i ++) {
      document.getElementsByTagName('button')[i].style.fontFamily = 'jedi';
    }
    document.getElementById('aprilfools').innerHTML = 'Happy April Fools!';}, 100);
  
}
function fullmoon() {
  document.getElementById('othergamestable').innerHTML += '<tr><td><a href="https://vidalingua.com/blog/french-swear-words">French swear words</a></td><td>Happy full moon!</td></tr><tr><td><a href="/play/?game=putainquiz">Quiz on "putain"</a></td><td>Written in the <a href="https://en.wikipedia.org/wiki/Brainfuck">BrainF*ck</a> programming language.</td><td>Click <a href="/downloadables/putain.html">here</a> for the code.</td></tr>'
}
var time = new Date(Date.now());
if (time.getMonth() == 3 && time.getDate() <= 7) {
  aprilfools();
}
if (getMoonPhase(time.getFullYear(), time.getMonth(), time.getDate()) == 4) {
  fullmoon()
}
if (time.getMonth() == 5 && time.getDate() == 1) {
  pridemonthfirst();
}
var darkbutton = '<button onclick="darkmode();window.history.replaceState( {} , \'title\', \'?darkmode=true\' );">Dark Mode</button>';
var lightbutton = '<button onclick="lightmode(); window.history.replaceState( {} , \'title\', \'https://frenchstudygames.000webhostapp.com/\' );">Light Mode</button>';
document.getElementById('darkmode').innerHTML = darkbutton;
function darkmode() {
  document.body.style.background = 'darkblue'; 
  var headings = document.getElementsByTagName('h1'); 
  for (var i = 0; i < headings.length; i ++) {
    headings[i].style.color = 'lime';
  }
  var tables = document.getElementsByTagName('table'); 
  for (var i = 0; i < tables.length; i ++) {
    tables[i].style.border = '2px double yellow';
  }
  var tables = document.getElementsByTagName('tr'); 
  for (var i = 0; i < tables.length; i ++) {
    tables[i].style.border ='2px double yellow';
  }
  var tables = document.getElementsByTagName('td'); 
  for (var i = 0; i < tables.length; i ++) {
    tables[i].style.border ='2px double yellow';
  };
  document.body.style.color = 'aqua'; 
  var links = document.getElementsByTagName('a'); 
  for (var i = 0; i < links.length; i ++) {
    links[i].style.color = 'aqua';
  }
  document.getElementById('darkmode').innerHTML = lightbutton;
  
}
function lightmode() {
  document.body.style.background = 'aqua'; 
  var headings = document.getElementsByTagName('h1'); 
  for (var i = 0; i < headings.length; i ++) {
    headings[i].style.color = 'blueviolet';
  }
  var tables = document.getElementsByTagName('table'); 
  for (var i = 0; i < tables.length; i ++) {
    tables[i].style.border = '2px double blue';
  }
  var tables = document.getElementsByTagName('tr'); 
  for (var i = 0; i < tables.length; i ++) {
    tables[i].style.border ='2px double blue';
  }
  var tables = document.getElementsByTagName('td'); 
  for (var i = 0; i < tables.length; i ++) {
    tables[i].style.border ='2px double blue';
  };
  document.body.style.color = 'black'; 
  var links = document.getElementsByTagName('a'); 
  for (var i = 0; i < links.length; i ++) {
    links[i].style.color = 'blue';
  }
  document.getElementById('darkmode').innerHTML = darkbutton;
}
var params = new URLSearchParams(window.location.search);
if (params.get('darkmode') == 'true') {
  darkmode();
}
