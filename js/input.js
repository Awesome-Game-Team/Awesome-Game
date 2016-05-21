var cursors;
var fs = false;
function preloadInput(){
}


function createInput(){
    //go fullscreen on click
    fsClick(); 
    //resizeGame(); //fit window width
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
  //game.camera.setSize(width, height);
  //game.world.setBounds(0, 0, width, height);
  //game.stage.bounds.width = width;
  //game.stage.bounds.height = height;
  game.renderer.resize(width, height);
}
