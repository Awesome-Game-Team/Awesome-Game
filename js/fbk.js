//Code by Kris Occhipinti http://filmsbykris.com
//GPLv3

//fullscreen on click
function fsClick(){
  //center game
  game.scale.pageAlignHorizontally = true;
  game.scale.pageAlignVertically = true;
  game.input.onDown.add(fullscreen, this);
}

function fullscreen(){
    //Set the game to stretch and fill the screen
    //game.scale.fullScreenScaleMode = Phaser.ScaleManager.EXACT_FIT;
    game.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;
    game.scale.startFullScreen();
}

