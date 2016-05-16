var music;
var mute;
var mute_btn;
var jetSound;

function preloadSfx(){
    game.load.spritesheet("mute","res/mute.png",64,64);
      
        
    music = "TheGame";
    game.load.audio('music', [ 'res/music/'+music+'.ogg', 'res/music/'+music+'.mp3']);
    
    // sound effect
    var sounds = ["jump","jetpack"]

    sounds.forEach(function(s){
      game.load.audio(s, [ 'res/fx/'+s+'.wav', 'res/fx/'+s+'.ogg', 'res/fx/'+s+'.mp3']);
    });
      
}


function createSfx(){
    musicLoad();

    // Mute  
    mute = false;
    mute_btn = game.add.button(0,0, 'mute', muteClick, this);
    mute_btn.fixedToCamera = true;
    mute_btn.cameraOffset.setTo(game.width - 128, 32);


    jetSound = game.add.audio('jetpack');
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
