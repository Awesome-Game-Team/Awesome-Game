var loadState = {
    
    preload : function() {
        preloadMap();
        preloadDisplay();
        preloadSfx();
        preloadPlayer();
        preloadEnemy();
        preloadExtras();
        preloadInput();
        preloadHUD();
        preloadOSC();
        preloadWeapons();
    },
    
    create : function(){
      if(game.device.desktop||game.scale.isLandscape){
        game.state.start('play');
      }
    },
};
