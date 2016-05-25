var enemies;

function preloadEnemy(){
  var images = ["jumper"];
  images.forEach(function(img){
    game.load.spritesheet(img, 'res/enemy/'+img+'.png',64,64);
  });

}

function createEnemy(){
  enemies = game.add.group(); 
  enemies.enableBody = true;

  //need to add this to map.json
  newEnemy(200,200,"jumper",20);
}

function updateEnemy(){
  game.physics.arcade.collide(enemies, layer);

  enemies.forEach(function(e){
    if(e.type == "jumper" && e.body.onFloor()){
      e.body.velocity.y = -400;      
    }
  });
}

function newEnemy(x,y,type,life){
  var e = enemies.create(x, y, type);
  e.type = type;
  e.scale.setTo(0.75,0.75);
  e.anchor.setTo(0.5,0.5);
 
  //animations
  e.frame = 3;
  e.animations.add('left', [3,2,1,0], 20, true);
  e.animations.add('right', [4,5,6,7], 20, true);
  e.body.gravity.y = 500;
  e.body.bounce.y = 0;
  e.inputEnabled = true;
  e.body.collideWorldBounds = true;
  e.life = life;
}


