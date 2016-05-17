var loadState = {
    
    preload : function() {
        preloadMap();
        preloadSfx();
        preloadPlayer();
        preloadExtras();
        preloadInput();
        preloadHUD();
        preloadOSC();
    },
    
    create : function(){
        game.state.start('play');
    },
};
