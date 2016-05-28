var gameRatio = window.innerWidth/window.innerHeight;
//var game = new Phaser.Game(Math.ceil(640*gameRatio), 640, Phaser.CANVAS);
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

function handleIncorrect(){
  if(!game.device.desktop){
    alert("Turn Device to Landscape mode");
    //document.getElementById("turn").style.display="block";
  }
}

function handleCorrect(){
  if(!game.device.desktop){
    if(firstRunLandscape){
      game.width = Math.ceil(640*gameRatio);
      game.height = 640;
      game.renderer.resize(game.width,game.height);
      game.state.start('play');
    }
  //document.getElementById("turn").style.display="none";
  }
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

