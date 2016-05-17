var loadState = {
    
    preload : function() {
        preloadMap();
        preloadSfx();
        preloadPlayer();
        preloadExtras();
        preloadInput();
        preloadHUD();
    },
    
    create : function(){
        game.state.start('play');
    },
};
