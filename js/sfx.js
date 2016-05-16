var music;
var mute;
var mute_btn;

function preloadSfx(){
    game.load.spritesheet("mute","res/mute.png",32,32);
      
        
    music = "TheGame";
    game.load.audio('music', [ 'res/music/'+music+'.ogg', 'res/music/'+music+'.mp3']);
    
    // sound effects
    game.load.audio('jump', [ 'res/fx/jump.ogg',  'res/fx/jump.mp3']);
    game.load.audio('seed', [ 'res/fx/seed.ogg',  'res/fx/seed.mp3']);
    game.load.audio('powerup', [ 'res/fx/powerup.ogg',  'res/fx/powerup.mp3']);
      
}


function createSfx(){
    musicLoad();

    // Mute  
    mute = false;
    mute_btn = game.add.button(0,0, 'mute', muteClick, this);
    mute_btn.fixedToCamera = true;
    mute_btn.cameraOffset.setTo(game.width - 42, 10);
}


function updateSfx(){
    
    
}


function musicLoad(){
  //  Play some music
  music = game.add.audio('music');
  music.loopFull();
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