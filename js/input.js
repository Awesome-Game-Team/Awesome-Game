var cursors;
var fs = false;

function preloadInput(){
}


function createInput(){
    //go fullscreen on click
    fsClick(); 
    resizeGame(); //fit window width
    cursors = game.input.keyboard.createCursorKeys(); 
}


function updateInput(){
}

/* Code by Kris Occhipinti http://filmsbykris.com
GPLv3 */

function resizeGame() {
  var height = window.innerHeight;
  var width = window.innerWidth;
  game.width = width;
  game.height = height;
  game.camera.setSize(width, height);
  game.camera.setBoundsToWorld();
  game.renderer.resize(width, height);
  layer.resize(width, height);
  layerbackdrop.resize(width, height);
}
