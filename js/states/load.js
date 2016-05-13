var loadState = {
    
    preload : function() {
        preloadMap();
        preloadSfx();
        preloadPlayer();
        preloadExtras();
        preloadInput();
        preloadText();
    },
    
    create : function(){
        game.state.start('play');
    },
};
