var loadState = {
    
    preload : function() {
        preloadMap();
        preloadSfx();
        preloadPlayer();
        preloadExtras();
        preloadInput();
    },
    
    create : function(){
        game.state.start('play');
    },
};