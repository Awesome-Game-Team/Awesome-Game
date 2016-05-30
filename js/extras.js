var seedCount;
var seedSound;
var seedsDropped;
var powerupSound;
var text;
var play_flag = 0;

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
    var seed = findObjectsByType("seed",map);
    seed.forEach(function(s){
      seedLoad(s.x,s.y);
    });
    
    seedSound = game.add.audio('seed');
    seedCount = 0;

    seedsDropped = game.add.group();
    seedsDropped.enableBody = true;
}

function updateExtras(){
  game.physics.arcade.collide(jetpacks, layer);
  jetpackActive();
  game.physics.arcade.collide(seeds, layer);
  game.physics.arcade.collide(seedsDropped, layer);

  droppedSeedsUpdate();
}

/*Add extra's below.
  Be sure to include the required code in preload, create, and update above */

//////////////
// Jet Pack //
//////////////

/*  Added by Kris */
function jetpackActive(){

  if(player.jetpackActive && player.jetLevel > 0){
    // trigger sound loop when jetpackActive() is first activated
    if (play_flag == 0){ jetSound.play(); }
    play_flag = 1;
    
    player.body.velocity.y = -200;
    player.jetLevel-=.1;
  }
  else{
    // stop sound loop and reset play_flag
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
  var seed = seeds.create(x, y,"seed");
  seed.collect = true;
}

function seedGet(player, seed){
  if(seed.collect){
    seed.kill();
    seedSound.play();
    seedCount++;
  }
}

function getURLvar(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

function dropSeeds(obj){
  var x = obj.body.x;
  var y = obj.body.y;
  var seed = seedsDropped.create(x, y,"seed");
  var life = (Math.floor(Math.random() * 4) + 2) * 1000;
  seed.lifespan = life;
  seed.body.gravity.y = 500;
  seed.body.bounce.y = .5;

  var velx = Math.random() * 800 - 400;  
  var vely = (Math.random() * 600 + 200)*-1;  
  seed.body.velocity.x = velx;
  seed.body.velocity.y = vely;

  //seed deceleration 
  seed.decel = 2;

  //Wait before being collected
  seed.collect = false;
  seed.collectAt = game.time.now + 500;
}

function droppedSeedsUpdate(){

  seedsDropped.forEach(function(seed){
    //make collectable after set time
    if(game.time.now > seed.collectAt){
      seed.collect = true;
    }

    //slow seed to a stop
    if(seed.body.velocity.x > 1){
        seed.body.velocity.x -= seed.decel;
    }else if(seed.body.velocity.x < -1){
        seed.body.velocity.x += seed.decel;
    }else{
        seed.body.velocity.x = 0;
    }
  });
}

function getDistanceX(obj1,obj2){
  var d = obj1.x - obj2.x;
  if(d<0){d*=-1}
  return d;
}
