var pad1;
var players;
var player;

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
  p.body.velocity.x = 0;

  //jump
  if (cursors.up.isDown && p.body.onFloor()){
    playerJump(p);
  }

  //gamepad jump
  if(pad1.justPressed(Phaser.Gamepad.XBOX360_A) && p.body.onFloor()){
    playerJump(p);
  }

  if(pad1.justPressed(Phaser.Gamepad.XBOX360_B)){
    player.jetpackActive = true;
  }else if(pad1.justReleased(Phaser.Gamepad.XBOX360_B)){
    player.jetpackActive = false;
  }

  //move
  if (cursors.left.isDown
  || pad1.isDown(Phaser.Gamepad.XBOX360_DPAD_LEFT) 
  || pad1.axis(Phaser.Gamepad.XBOX360_STICK_LEFT_X) < -0.1){
    playerLeft();
  }else if (cursors.right.isDown
  || pad1.isDown(Phaser.Gamepad.XBOX360_DPAD_RIGHT) 
  || pad1.axis(Phaser.Gamepad.XBOX360_STICK_LEFT_X) > 0.1){
    playerRight();
  }

  if(player.body.velocity.x == 0){
    p.animations.stop();
  }


}


function playerCreate(x,y,pl){
  //get player start position from object layer 
  var pos = findObjectsByType('playerStart', map);
  player = players.create(pos[0].x, pos[0].y, pl);
  player.anchor.setTo(0.5,0.5);
  player.scale.setTo(0.75,0.75);
  //animations
  player.frame = 4;
  player.animations.add('left', [3,2,1,0], 20, true);
  player.animations.add('right', [4,5,6,7], 20, true);
  player.body.gravity.y = 500;
  player.body.bounce.y = 0.2;
  player.inputEnabled = true;
  player.body.collideWorldBounds = true;
  player.jetLevel = 0;
  player.jetpack = 0;
  player.jetpackActive = false;
  
  //keyboard inputs
  player.jet = game.input.keyboard.addKey(Phaser.Keyboard.J);
  player.jet.onDown.add(function(){player.jetpackActive = true}, this);
  player.jet.onUp.add(function(){player.jetpackActive = false}, this);

  //gamepad inputs
  game.input.gamepad.start();
  pad1 = game.input.gamepad.pad1;
 
  game.camera.follow(player);
}

function playerLeft(){
  player.body.velocity.x = -150;
  player.animations.play('left');
}

function playerRight(){
  player.body.velocity.x = 150;
  player.animations.play('right');
}

function playerJump(p){
  p.body.velocity.y = -400;
  jumpSound = game.add.audio('jump');
  jumpSound.play();
}

