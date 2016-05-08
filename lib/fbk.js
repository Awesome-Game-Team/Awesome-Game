//Code by Kris Occhipinti http://filmsbykris.com
//GPLv3

//fullscreen on click
function fsClick(){
  game.input.onDown.add(fullscreen, this);
}

function fullscreen(){
    //Set the game to strech and fill the screen
    //game.scale.fullScreenScaleMode = Phaser.ScaleManager.EXACT_FIT;
    game.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;
    game.scale.startFullScreen();
}

