
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
    playerUpdate();
}


function playerCreate(x,y,pl){
  //get player start position from object layer 
  var pos = findObjectsByType('playerStart', map);
  player = players.create(pos[0].x, pos[0].y, pl);
  player.anchor.setTo(0.5,0.5);
  player.scale.setTo(0.75,0.75);
  //animations
  player.frame = 4;
  player.animations.add('left', [0, 1, 2, 3, 4, 5], 10, true);
  player.animations.add('right', [11,10,9,8,7,6], 10, true);
  player.body.gravity.y = 500;
  player.body.bounce.y = 0.2;
  player.inputEnabled = true;
  player.body.collideWorldBounds = true;
  player.jetpack = 0;
  player.jetpackActive = false;
  
  //keyboard inputs
  player.jet = game.input.keyboard.addKey(Phaser.Keyboard.J);
  player.jet.onDown.add(function(){player.jetpackActive = true}, this);
  player.jet.onUp.add(function(){player.jetpackActive = false}, this);
  
  game.camera.follow(player);
}

function playerUpdate(){
  game.physics.arcade.collide(players, layer);
  game.physics.arcade.overlap(players, jetpacks, jetpackGet, null, this);

  var p = player;
  p.body.velocity.x = 0;

  if (cursors.up.isDown)
  {
    if (p.body.onFloor())
    {
      p.body.velocity.y = -400;
      jumpSound = game.add.audio('jump');
      jumpSound.play();
    }
  }

  if (cursors.left.isDown)
  {
    p.body.velocity.x = -150;
    p.animations.play('left');
  }
  else if (cursors.right.isDown)
  {
    p.body.velocity.x = 150;
    p.animations.play('right');
  }else{
    p.animations.stop();
 
  }
}

