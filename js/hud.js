var msgText;
var msgTimeout;
var HUDtext;
var fs_btn;

function preloadHUD(){
  game.load.bitmapFont('font1', 'res/fonts/set1/font.png', 'res/fonts/set1/font.fnt');
  game.load.spritesheet("mute","res/mute.png",32,32);
  game.load.image("fullscreen","res/fullscreen.png",32,32);

}

function createHUD(){
  createMuteBtn();
  createMSG();
  createHUDtext();
  createFSBtn();

  //set timeout
  msgTimeout = game.time.now;
  
  //load Startup Text
  msg("GO!!!");

}

function updateHUD(){
  //HUD text
  var power = Math.round(player.jet);
  var txt = "Seeds: " + seedCount + "\n";
  //if jetpack has power display it
  if(power > 0){txt += "Jetpack: " + power + "%\n";}
  HUDtext.setText(txt);

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

function createMuteBtn(){
  // Mute  
  mute = false;
  mute_btn = game.add.button(0,0, 'mute', muteClick, this);
  mute_btn.fixedToCamera = true;
  mute_btn.cameraOffset.setTo(game.width - 42, 10);
}

function createFSBtn(){
  fs_btn = game.add.button(0,0, 'fullscreen', fullscreen, this);
  fs_btn.fixedToCamera = true;
  fs_btn.cameraOffset.setTo(game.width - 84, 10);
}


function createMSG(){
  msgText = game.add.bitmapText(0,0, 'font1', '', 64);
  //center message on screen
  msgText.anchor.x = 0.5;
  msgText.anchor.y = 0.5;
  msgText.fixedToCamera = true;  
  msgText.cameraOffset.setTo(game.width/2,game.height/2);
}

function createHUDtext(){
  HUDtext = game.add.text(0, 0, "Seeds: 0");
  HUDtext.font = 'Mono';
  HUDtext.fontSize = 25;
  HUDtext.stroke = '#000000';
  HUDtext.strokeThickness = 4;
  HUDtext.fill = '#feee0b';
  HUDtext.fixedToCamera = true;
  HUDtext.cameraOffset.setTo(10, 10);
}

