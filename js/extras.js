function preloadExtras(){
    game.load.image('jetpack', 'res/jetpack.png');
    
}

function createExtras(){
    
    jetpacks = game.add.group();
    jetpacks.enableBody = true;
    var packs = findObjectsByType("jetpack",map);
    packs.forEach(function(j){
      jetpackLoad(j.x,j.y);
    });
    
    
}

function updateExtras(){
    game.physics.arcade.collide(jetpacks, layer);
    jetpackActive();

}

/*Add extra's below.
  Be sure to include the required code in preload, create, and update above */

/*Jet Pack
  Added by Kris */

function jetpackActive(){
  if(player.jetpackActive && player.jet > 0){
    player.body.velocity.y = -200;
    player.jet-=.1;
    var power = Math.round(player.jet);
    if(power == 20 || power == 10||power == 5||power == 0){
      msg("Jetpack\nPower " + power + "%");
    }
  }
}

function jetpackLoad(x,y){
  
  var pack = jetpacks.create(x, y,"jetpack");
  pack.body.gravity.y = 500;
  pack.body.bounce.y = 0.2;
}

function jetpackGet(player, pack){
  player.jet = 100;
  pack.kill();
  msg("JETPACK!!!");
}
