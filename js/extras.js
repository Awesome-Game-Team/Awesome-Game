var seedCount;
var seedSound;
var powerupSound;
<<<<<<< HEAD
var text;
var play_flag = 0;
=======
>>>>>>> metalx1000/master

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
<<<<<<< HEAD

  if(player.jetpackActive && player.jet > 0){
    // trigger sound loop when jetpackActive() is first activated
    if (play_flag == 0){ jetSound.play(); }
    play_flag = 1;
    
    player.body.velocity.y = -200;
    player.jet-=.1;
  }
  else{
    // stop sound loop and reset play_flag
=======
  if(player.jetpackActive && player.jetLevel > 0){
    jetSound.play();
    player.body.velocity.y = -200;
    player.jetLevel-=.1;
  }else{
>>>>>>> metalx1000/master
    jetSound.stop();
    play_flag = 0;
  }
}

function jetpackLoad(x,y){
  var pack = jetpacks.create(x, y,"jetpack");
}

function jetpackGet(player, pack){
  player.jetLevel += 50;
  if(player.jetLevel > 100){
    player.jetLevel = 100;
  }
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
}
