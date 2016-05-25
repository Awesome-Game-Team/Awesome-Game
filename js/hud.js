var msgText;
var msgTimeout;
var HUDtext;
var fs_btn;
var btns=[];
var debug = getURLvar('debug');

function preloadHUD(){
  game.load.bitmapFont('font1', 'res/fonts/set1/font.png', 'res/fonts/set1/font.fnt');
  var sprites = ['mute','fullscreen'];
  sprites.forEach(function(s){
    game.load.spritesheet(s,"res/hud/"+s+".png",32,32);
  });

}

function createHUD(){
  createFSBtn();
  createMuteBtn();
  createMSG();
  createHUDtext();

  alignBtns();
  //set timeout
  msgTimeout = game.time.now;
  
  //load Startup Text
  msg("GO!!!");

  //advanced timing for FPS count
  game.time.advancedTiming = true;
}

function updateHUD(){
  //HUD text
  var power = Math.round(player.jetLevel);
  var txt = "Seeds: " + seedCount + "\n";
  //if jetpack has power display it
  if(power > 0){txt += "Jetpack: " + power + "%\n";}
  if(debug){txt += "FPS: " + game.time.fps + "\n";} 

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
  btns.push(mute_btn);
  mute_btn.fixedToCamera = true;
}

function createFSBtn(){
  fs_btn = game.add.button(0,0, 'fullscreen', fullscreen, this);
  btns.push(fs_btn);
  fs_btn.fixedToCamera = true;
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

function muteClick(){
  if(mute == false){
    mute = true;
    music.stop();
    mute_btn.frame = 1;
  }else{
    mute = false;
    music.play();
    mute_btn.frame = 0;
  }
}


function alignBtns(){
  for(var i = 0;i<btns.length;i++){
    btns[i].cameraOffset.setTo(game.width - 64 * (i+1), 10);
  }
}
