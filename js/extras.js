var seedCount;
var seedSound;
var powerupSound;
var text;

function preloadExtras(){
    game.load.image('jetpack', 'res/jetpack.png');
    game.load.image('seed', 'res/seed.png');
    game.load.image('superseed', 'res/super_seed.png');
}

function createExtras(){
    
    jetpacks = game.add.group();
    jetpacks.enableBody = true;
    var packs = findObjectsByType("jetpack",map);
    packs.forEach(function(j){
      jetpackLoad(j.x,j.y);
    });
    
    powerupSound = game.add.audio('powerup');

    
    seeds = game.add.group();
    seeds.enableBody = true;
    var packs = findObjectsByType("seed",map);
    packs.forEach(function(s){
      seedLoad(s.x,s.y);
    });
    
    seedSound = game.add.audio('seed');
    seedCount = 0;
    text = game.add.text(0, 0, "Seeds: 0");
    text.font = 'Mono';
    text.fontSize = 25;
    text.stroke = '#000000';
    text.strokeThickness = 4;
    text.fill = '#feee0b';
    text.fixedToCamera = true;
    text.cameraOffset.setTo(10, 10);
}

function updateExtras(){
    game.physics.arcade.collide(jetpacks, layer);
    jetpackActive();
    game.physics.arcade.collide(seeds, layer);
}

/*Add extra's below.
  Be sure to include the required code in preload, create, and update above */

//////////////
// Jet Pack //
//////////////

/*  Added by Kris */

function jetpackActive(){
  if(player.jetpackActive && player.jet > 0){
    jetSound.play();
    player.body.velocity.y = -200;
    player.jet-=.1;
    var power = Math.round(player.jet);
    if(power == 20 || power == 10||power == 5||power == 0){
      msg("Jetpack\nPower " + power + "%");
    }
  }else{
    jetSound.stop();
  }
}

function jetpackLoad(x,y){
  var pack = jetpacks.create(x, y,"jetpack");
}

function jetpackGet(player, pack){
  player.jet = 100;
  pack.kill();
  powerupSound.play();
  msg("JETPACK!!!");
}

//////////
// Seed //
//////////

function seedLoad(x,y){
  var pack = seeds.create(x, y,"seed");
}

function seedGet(player, pack){
  pack.kill();
  seedSound.play();
  seedCount++;
  text.setText("Seeds: " + seedCount);
}
