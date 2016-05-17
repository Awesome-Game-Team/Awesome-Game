var cursors;
var fs = false;
function preloadInput(){
}


function createInput(){
    //go fullscreen on click
    fsClick(); //loaded from /lib/fbk.js
    cursors = game.input.keyboard.createCursorKeys(); 
}


function updateInput(){
}

/* Code by Kris Occhipinti http://filmsbykris.com
GPLv3 */

//fullscreen on click
function fsClick(){
  //center game
  game.scale.pageAlignHorizontally = true;
  game.scale.pageAlignVertically = true;
  //game.input.onDown.add(fullscreen, this);
}

function fullscreen(){
  //Set the game to stretch and fill the screen
  //game.scale.fullScreenScaleMode = Phaser.ScaleManager.EXACT_FIT;
  if(fs == false){
    fs = true;
    game.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;
    game.scale.startFullScreen();
  }else{
    fs = false;
    game.scale.stopFullScreen();
  }
}

