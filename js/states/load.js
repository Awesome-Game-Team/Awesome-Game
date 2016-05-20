var loadState = {
    
    preload : function() {
        preloadMap();
        preloadSfx();
        preloadPlayer();
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
