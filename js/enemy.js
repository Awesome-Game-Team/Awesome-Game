var enemies;

function preloadEnemy(){
  var images = ["jumper","jumper_death"];
  images.forEach(function(img){
    game.load.spritesheet(img, 'res/enemy/'+img+'.png',64,64);
  });

}

function createEnemy(){
  enemies = game.add.group(); 
  enemies.enableBody = true;

  //need to add this to map.json
  newEnemy(200,200,"jumper",1);
  newEnemy(800,200,"jumper",1);
}

function updateEnemy(){
  //collide
  game.physics.arcade.collide(enemies, layer);
  game.physics.arcade.overlap(players, enemies, playerHit, null, this);
  game.physics.arcade.overlap(enemies, seedShots, enemyHit, null, this);

  enemies.forEach(function(e){
    if(e.type == "jumper" && e.body.onFloor()){
      e.body.velocity.y = -400;      
    }
  });
}

function newEnemy(x,y,type,life){
  var e = enemies.create(x, y, type);
  e.type = type;
  e.scale.setTo(1,0.75);
  e.anchor.setTo(0.5,0.5);
  e.life = life;
  e.deathType = type + "_death";
 
  //animations
  e.frame = 2;
  e.animations.add('left', [2,1,0], 20, true);
  e.animations.add('right', [3,4,5], 20, true);
  e.body.gravity.y = 500;
  e.body.bounce.y = 0;
  e.inputEnabled = true;
  e.body.collideWorldBounds = true;
}

function enemyHit(e,s){
  e.life -= s.hitPoint;
  s.destroy();
  if(e.life < 1){
    enemyDeath(e);
  }
}

function enemyDeath(e){
  var x = e.position.x;
  var y = e.position.y;
  enemies.remove(e); 
  death = game.add.sprite(x, y, e.deathType, 2);
  death.scale.setTo(1,0.75);
  death.anchor.setTo(0.5,0.5);
  game.physics.arcade.enable(death);
  death.body.enable = true;
  death.body.gravity.y = 500;
  death.body.velocity.y = -400;

  var tween = game.add.tween(death); 
  tween.to({ rotation: 20 }, 2000, 'Linear', true, 0);  
  tween.start();
}
