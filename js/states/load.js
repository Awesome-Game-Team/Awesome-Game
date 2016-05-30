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
      game.state.start('play');
    },
};
