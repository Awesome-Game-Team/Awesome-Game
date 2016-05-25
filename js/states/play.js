var playState = {
    
    create : function() {
        createMap();
        createDisplay();
        createSfx();
        createPlayer();
        createEnemy();
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
        updateEnemy();
        updateExtras();
        updateInput();
        updateHUD();
        updateOSC();
        updateWeapons();
    },
};
