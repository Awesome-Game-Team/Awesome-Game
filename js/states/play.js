var playState = {
    
    create : function() {
        createMap();
        createSfx();
        createPlayer();
        createExtras();
        createInput();
        createHUD();
        createOSC();
        createWeapons();
     
    },
    
    update : function() {
        updateMap();
        updateSfx();
        updatePlayer();
        updateExtras();
        updateInput();
        updateHUD();
        updateOSC();
        updateWeapons();
    },
};
