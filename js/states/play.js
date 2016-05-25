var playState = {
    
    create : function() {
        createMap();
        createDisplay();
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
        updateDisplay();
        updateSfx();
        updatePlayer();
        updateExtras();
        updateInput();
        updateHUD();
        updateOSC();
        updateWeapons();
    },
};
