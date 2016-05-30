var gameRatio = window.innerWidth/window.innerHeight;
var fs = false;

function preloadDisplay(){
}

function createDisplay(){
  game.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;
  game.scale.pageAlignHorizontally = true;
  game.scale.pageAlignVertically = true;
}

function updateDisplay(){
}

/* Code by Kris Occhipinti http://filmsbykris.com
GPLv3 */

function fullscreen(){
  //Set the game to stretch and fill the screen
  if (game.scale.isFullScreen){
    game.scale.stopFullScreen();
    fs_btn.frame = 0;
  }else{
    game.scale.startFullScreen();
    fs_btn.frame = 1;
  }
}

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

