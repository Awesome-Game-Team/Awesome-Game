var music;
var mute;
var mute_btn;
var jetSound;

function preloadSfx(){
    music = "TheGame";
    game.load.audio('music', [ 'res/music/'+music+'.ogg', 'res/music/'+music+'.mp3']);
    
    // sound effect
    var sounds = ["jump","jetpack","seed","powerup"]

    sounds.forEach(function(s){
      game.load.audio(s, [ 'res/fx/'+s+'.wav', 'res/fx/'+s+'.ogg', 'res/fx/'+s+'.mp3']);
    });
      
}


function createSfx(){
    musicLoad();
    jetSound = game.add.audio('jetpack');
    jetSound.loopFull();
}


function updateSfx(){
    
    
}


function musicLoad(){
  //  Play some music
  music = game.add.audio('music');
  music.loopFull();
}

