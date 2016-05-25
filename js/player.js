var pad1;
var players;
var player;
var player_decel = 4;

function preloadPlayer(){
  game.load.spritesheet("player","res/player.png",64,64);
}


function createPlayer(){
  players = game.add.group();
  players.enableBody = true;
  playerCreate(100,100,"player");
   
}


function updatePlayer(){
  game.physics.arcade.collide(players, layer);
  game.physics.arcade.overlap(players, jetpacks, jetpackGet, null, this);
  game.physics.arcade.overlap(players, seeds, seedGet, null, this);

  var p = player;
  if(player.body.velocity.x > 1){
      player.body.velocity.x -= player_decel;
  }else if(player.body.velocity.x < -1){
      player.body.velocity.x += player_decel;
  }else{
      player.body.velocity.x = 0;
      player.animations.stop();
      if(player.direction == "right"){
          player.frame = 4;
      }else{
          player.frame = 3;
      }
  }

  //jump
  if (cursors.up.isDown){
    playerJump();
  }

  //gamepad jump
  if(pad1.justPressed(Phaser.Gamepad.XBOX360_A)){
    playerJump();
  }

  if(pad1.justPressed(Phaser.Gamepad.XBOX360_B)){
    player.jetpackActive = true;
  }else if(pad1.justReleased(Phaser.Gamepad.XBOX360_B)){
    player.jetpackActive = false;
  }

  //move
  if (cursors.left.isDown
  || pad1.isDown(Phaser.Gamepad.XBOX360_DPAD_LEFT) 
  || pad1.axis(Phaser.Gamepad.XBOX360_STICK_LEFT_X) < -0.1
  || leftOSC){
    playerLeft();
  }else if (cursors.right.isDown
  || pad1.isDown(Phaser.Gamepad.XBOX360_DPAD_RIGHT) 
  || pad1.axis(Phaser.Gamepad.XBOX360_STICK_LEFT_X) > 0.1
  || rightOSC){
    playerRight();
  }else{
    p.animations.stop();
  }


}


function playerCreate(x,y,pl){
  //get player start position from object layer 
  var pos = findObjectsByType('playerStart', map);
  player = players.create(pos[0].x, pos[0].y, pl);
  player.scale.setTo(0.75,0.75);
  player.anchor.setTo(0.5,0.5);
  //animations
  player.frame = 4;
  player.animations.add('left', [3,2,1,0], 20, true);
  player.animations.add('right', [4,5,6,7], 20, true);
  player.body.gravity.y = 500;
  player.body.bounce.y = 0;
  player.inputEnabled = true;
  player.body.collideWorldBounds = true;
  player.jetLevel = 0;
  player.jetpack = 0;
  player.jetpackActive = false;
  player.direction = "right"; 
  //keyboard inputs
  //jetpack
  player.jet = game.input.keyboard.addKey(Phaser.Keyboard.J);
  player.jet.onDown.add(function(){player.jetpackActive = true}, this);
  player.jet.onUp.add(function(){player.jetpackActive = false}, this);

  player.hit = false;

  //shootSeeds
  player.shootSeeds = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
  player.shootSeeds.onDown.add(playerShootSeed,this);
  //gamepad inputs
  game.input.gamepad.start();
  pad1 = game.input.gamepad.pad1;
 
  game.camera.follow(player);
}

function playerLeft(){
  player.body.velocity.x = -150;
  player.direction = "left";//for weapons
  if(player.body.onFloor()){
    player.animations.play('left');
  }else{
    player.frame = 1;
  }
}

function playerRight(){
  player.body.velocity.x = 150;
  player.direction = "right"; //for weapons
  if(player.body.onFloor()){
    player.animations.play('right');
  }else{
    player.frame = 6;
  }
}

function playerJump(){
  if(player.body.onFloor()){
    player.body.velocity.y = -400;
    jumpSound = game.add.audio('jump');
    jumpSound.play();
  }
}

function playerShootSeed(){
  if(seedCount > 0){
    shootSeed(player);
    seedCount-=1;
  }
}

function playerHit(){
  if(!player.hit){
    player.hit = true;

    //push player way from enemy
    if(player.direction == "right"){
      player.body.velocity.x = -300;
    }else{
      player.body.velocity.x = 300;
    }
    player.body.velocity.y = -400;

    //make sure the player can't get hit again for half a second
    setTimeout(function(){player.hit = false},500);
  }
}
