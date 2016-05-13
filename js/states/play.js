var playState = {
    
    create : function() {
        createMap();
        createSfx();
        createPlayer();
        createExtras();
        createInput();
     
    },
    
    update : function() {
        updateMap();
        updateSfx();
        updatePlayer();
        updateExtras();
        updateInput();
    },
};