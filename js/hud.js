var msgText;
var msgTimeout;

function preloadHUD(){
  game.load.bitmapFont('font1', 'res/fonts/set1/font.png', 'res/fonts/set1/font.fnt');
  game.load.spritesheet("mute","res/mute.png",32,32);
}

function createHUD(){
  msgText = game.add.bitmapText(0,0, 'font1', '', 64);
  //center message on screen
  msgText.anchor.x = 0.5;
  msgText.anchor.y = 0.5;
  msgText.fixedToCamera = true;  
  msgText.cameraOffset.setTo(game.width/2,game.height/2);

  //set timeout
  msgTimeout = game.time.now;
  
  //load Startup Text
  msg("GO!!!");

}

function updateHUD(){
  //clear text message after timeout
  if(msgTimeout < game.time.now){
    msgText.text = "";
  }
}

function msg(text,sec){
  if(typeof sec === 'undefined'){sec = 3}
  msgText.text = text;
  //remove text after set number of seconds
  msgTimeout = game.time.now + sec * 1000;
}
