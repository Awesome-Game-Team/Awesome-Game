var game = new Phaser.Game(800, 600, Phaser.AUTO, 'phaser', { preload: preload, create: create, update,update });

var map;
var layer;
var players;
var player;
var cursors;
var music;

function preload() {

  game.load.tilemap('map', '../res/map.json', null, Phaser.Tilemap.TILED_JSON);
  game.load.image('tiles', '../res/tiles.png');
  game.load.image('jetpack', '../res/jetpack.png');
  game.load.spritesheet("player","../res/player.png",64,64);

  music = "TheGame";
  game.load.audio('music', [ '../res/music/'+music+'.wav', '../res/music/'+music+'.ogg', '../res/music/'+music+'.mp3']);
}


function create() {
  musicLoad();
  game.stage.backgroundColor = '#0099ff';

  loadMap();
  players = this.game.add.group();
  players.enableBody = true;
  playerCreate(100,100,"player");
  
  jetpacks = this.game.add.group();
  jetpacks.enableBody = true;
  jetpackLoad(200,200);
  //go fullscreen on click
  fsClick(); //loaded from /lib/fbk.js
  cursors = game.input.keyboard.createCursorKeys();
}

function update(){
  playerUpdate();
  game.physics.arcade.collide(jetpacks, layer);
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

  jetpackActive();
}

function jetpackActive(){
  if(player.jetpackActive && player.jet > 0){
    player.body.velocity.y = -200;
    player.jet-=.1;
  }
  
  
}

function loadMap(){
  //  The map key here is the Loader key given in game.load.tilemap
  map = game.add.tilemap('map');

  //  The first parameter is the tileset name, as specified in the Tiled map editor (and in the tilemap json file)
  //  The second parameter maps this name to the Phaser.Cache key 'tiles'
  map.addTilesetImage('tileSet', 'tiles');

  //  Creates a layer from the World1 layer in the map data.
  //  A Layer is effectively like a Phaser.Sprite, so is added to the display list.
  layer = map.createLayer('world');
  map.setCollisionBetween(1, 16);

  //  This resizes the game world to match the layer dimensions
  layer.resizeWorld();
}


  //find objects in a Tiled layer that containt a property called "type" equal to a certain value
function findObjectsByType(type, map, layer) {
  var result = new Array();
  map.objects.objects.forEach(function(element){
    if(element.type === type) {
      //Phaser uses top left, Tiled bottom left so we have to adjust the y position
      //also keep in mind that the cup images are a bit smaller than the tile which is 16x16
      //so they might not be placed in the exact pixel position as in Tiled
      element.y -= map.tileHeight;
      result.push(element);
    }      
  });
  return result;
}

function musicLoad(){
  //  Play some music
  music = game.add.audio('music');
  music.loopFull();
}

function jetpackLoad(x,y){
  
  var pack = jetpacks.create(x, y,"jetpack");
  pack.body.gravity.y = 500;
  pack.body.bounce.y = 0.2;
}

function jetpackGet(player, pack){
  player.jet = 100;
  pack.kill();
}