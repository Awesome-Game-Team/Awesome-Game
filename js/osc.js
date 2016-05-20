//On screen controls for touch screen
var leftOSC = false;
var rightOSC = false;
var jetBTN, shootBTN;
var isMobile = mobileCheck();

function preloadOSC(){
  var images = ["left","right","trigger"];
  images.forEach(function(img){
    game.load.image(img, 'res/osc/'+img+'.png');  
  });
}

function createOSC(){
  //only load buttons if in mobile browser
  if(isMobile || debug){
    btnCreate();
  }

  createJetBTN();
}

function btnCreate(){
  //left button
  var  leftBTN = game.add.button(32, game.height - 64, 'left', function(){leftOSC = true;}, this, 0, 1, 0, 1);  
  leftBTN.events.onInputOver.add(function(){leftOSC = true;},this);
  leftBTN.events.onInputOut.add(function(){leftOSC = false;},this);
  leftBTN.events.onInputDown.add(function(){leftOSC = true;},this);
  leftBTN.events.onInputUp.add(function(){leftOSC = false;},this);
  leftBTN.fixedToCamera = true;
  leftBTN.scale.setTo(.5,.5);
  leftBTN.alpha = .5;

  //right button
  var rightBTN = game.add.button(128, game.height - 64, 'right', function(){rightOSC = true;}, this, 0, 1, 0, 1);
  rightBTN.events.onInputOver.add(function(){rightOSC = true;},this);
  rightBTN.events.onInputOut.add(function(){rightOSC = false;},this);
  rightBTN.events.onInputDown.add(function(){rightOSC = true;},this);
  rightBTN.events.onInputUp.add(function(){rightOSC = false;},this);
  rightBTN.fixedToCamera = true;
  rightBTN.scale.setTo(.5,.5);
  rightBTN.alpha = .5;

  //jump button
  var jumpBTN = game.add.button(game.width - 96, game.height - 64, 'trigger', playerJump, this, 0, 1, 0, 1);
  jumpBTN.events.onInputOver.add(playerJump,this);
  jumpBTN.events.onInputDown.add(playerJump,this);
  jumpBTN.fixedToCamera = true;
  jumpBTN.scale.setTo(.5,.5);  
  jumpBTN.alpha = .5;

  //shoot button
  shootBTN = game.add.button(game.width - 32 * 5, game.height - 64, 'trigger', null, this, 0, 1, 0, 1);
  shootBTN.events.onInputOver.add(playerShootSeed,this);
  shootBTN.events.onInputDown.add(playerShootSeed,this);
  shootBTN.fixedToCamera = true;
  shootBTN.scale.setTo(.5,.5);
  shootBTN.alpha = .5;
}

function createJetBTN(){
  jetBTN = game.add.button(game.width - 96, game.height - 128, 'trigger', function(){player.jetpackActive = true}, this, 0, 1, 0, 1);
  jetBTN.events.onInputOver.add(function(){player.jetpackActive = true},this);
  jetBTN.events.onInputDown.add(function(){player.jetpackActive = true},this);
  jetBTN.events.onInputOut.add(function(){player.jetpackActive = false;},this);
  jetBTN.events.onInputUp.add(function(){player.jetpackActive = false;},this);
  jetBTN.fixedToCamera = true;
  jetBTN.scale.setTo(.5,.5);
  jetBTN.alpha = .5;
}


function updateOSC(){
  if(leftOSC){
    playerLeft();
  }else if(rightOSC){
    playerRight();
  }

  if(!jetBTN.visible && player.jetLevel > 0 && isMobile||debug){
    jetBTN.visible = true;
  }else if (player.jetLevel <= 0){
    jetBTN.visible = false;
  }

  if(!shootBTN.visible && seedCount > 0 && isMobile||debug){
    shootBTN.visible = true;
  }else if (seedCount <= 0){
    shootBTN.visible = false;
  }
}

//check if running in a mobile browser
function mobileCheck(){
  if( navigator.userAgent.match(/Android/i)
  || navigator.userAgent.match(/webOS/i)
  || navigator.userAgent.match(/iPhone/i)
  || navigator.userAgent.match(/iPad/i)
  || navigator.userAgent.match(/iPod/i)
  || navigator.userAgent.match(/BlackBerry/i)
  || navigator.userAgent.match(/Windows Phone/i)
  ){
    return true;
  }else{
    return false;
  }
}
