var searchparams = new URLSearchParams(window.location.search);
var game = searchparams.get('game');
document.title += ' - ' + game;


var favicons = {
  'fruitgame': 'fruit.png',
  'veggiesgame': 'veggies.jpg',
  'choresquizfaire': 'chores.jpg',
  'maleclothesquiz': 'clothesboy.jpg',
  'femaleclothesquiz': 'clothesgirl.jpeg',
  'weatherfrenchquiz': 'cloud.png',
  'condimentsgame': 'condiments.jpg',
  'housequiz': 'house.jpg',
  'pouvoirconjugation': 'judge.jpg',
  'meatgame': 'meat.png',
  'miscfoods': 'misc_foods.png',
  'randompronoun': 'people.jpg',
  'sportsquiz': 'soccer_ball.jpg',
  'boire': 'water.jpg',
  'overgarments': 'winter_clothes.jpg',
  'tanachtimeline': 'torah.png',
  'tsl': 'hebIcon.ico',
  'bvkhnhpl': 'hebIcon.ico'
}
if (favicons.hasOwnProperty(game)) {
  document.querySelector("link[rel='shortcut icon']").href = "../images/" + favicons[game];
}