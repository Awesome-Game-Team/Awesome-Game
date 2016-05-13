var map;
var layer;

function preloadMap(){
    game.load.tilemap('map', 'res/map.json', null, Phaser.Tilemap.TILED_JSON);
    game.load.image('tiles', 'res/tiles.png');
}


function createMap(){
    game.stage.backgroundColor = '#77e0ff';
    loadMap();
}

function updateMap(){
}


function loadMap(){
  //  The map key here is the Loader key given in game.load.tilemap
  map = game.add.tilemap('map');

  /* The first parameter is the tileset name, as specified in the Tiled map editor (and in the tilemap json file)
     The second parameter maps this name to the Phaser.Cache key 'tiles' */
  map.addTilesetImage('tileSet', 'tiles');

  /* Creates a layer from the World1 layer in the map data.
     A Layer is effectively like a Phaser.Sprite, so is added to the display list. */
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
      /* Phaser uses top left, Tiled bottom left so we have to adjust the y position
         also keep in mind that the cup images are a bit smaller than the tile which is 16x16
         so they might not be placed in the exact pixel position as in Tiled */
      element.y -= map.tileHeight;
      result.push(element);
    }      
  });
  return result;
}