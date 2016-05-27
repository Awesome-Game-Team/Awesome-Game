var seedShots;

function preloadWeapons(){
}

function createWeapons(){
  seedShots = game.add.group();  
  seedShots.enableBody = true;
}

function updateWeapons(){
}

function shootSeed(obj){
  var x = obj.body.x + 20;
  var y = obj.body.y + 20;
  var d = obj.direction;
  var vel = 500;

  var seed = seedShots.create(x, y,"seed");
  seed.anchor.setTo(.5,.5);
  seed.from = obj.type;
  seed.hitPoint = 1;
  if(d == "right"){
    seed.angle = 90; 
    seed.body.velocity.x = vel;
  }else if(d == "left"){
    seed.angle = -90; 
    seed.body.velocity.x = -vel;
  }

   
}
