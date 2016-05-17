//On screen controls for touch screen
var leftOSC = false;
var rightOSC = false;

function preloadOSC(){
  var images = ["left","right","trigger"];
  images.forEach(function(img){
    game.load.image(img, 'res/osc/'+img+'.png');  
  });
}

function createOSC(){
  //left button
  leftBTN = game.add.button(32, game.height - 64, 'left', function(){leftOSC = true;}, this, 0, 1, 0, 1);  
  leftBTN.events.onInputOver.add(function(){leftOSC = true;},this);
  leftBTN.events.onInputOut.add(function(){leftOSC = false;},this);
  leftBTN.events.onInputUp.add(function(){leftOSC = false;},this);
  leftBTN.fixedToCamera = true;
  leftBTN.scale.setTo(.5,.5);

  //right button
  rightBTN = game.add.button(128, game.height - 64, 'right', function(){rightOSC = true;}, this, 0, 1, 0, 1);
  rightBTN.events.onInputOver.add(function(){rightOSC = true;},this);
  rightBTN.events.onInputOut.add(function(){rightOSC = false;},this);
  rightBTN.events.onInputUp.add(function(){rightOSC = false;},this);
  rightBTN.fixedToCamera = true;
  rightBTN.scale.setTo(.5,.5);

}



function updateOSC(){
  if(leftOSC){
    playerLeft();
  }else if(rightOSC){
    playerRight();
  }
}
