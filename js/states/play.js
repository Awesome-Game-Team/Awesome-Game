var playState = {
    
    create : function() {
        createMap();
        createSfx();
        createPlayer();
        createExtras();
        createInput();
        createHUD();
     
    },
    
    update : function() {
        updateMap();
        updateSfx();
        updatePlayer();
        updateExtras();
        updateInput();
        updateHUD();
    },
};
