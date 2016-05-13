var playState = {
    
    create : function() {
        createMap();
        createSfx();
        createPlayer();
        createExtras();
        createInput();
        createText();
     
    },
    
    update : function() {
        updateMap();
        updateSfx();
        updatePlayer();
        updateExtras();
        updateInput();
        updateText();
    },
};
