var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----


var goal1=createSprite(200,30,100,20);
goal1.shapeColor=("yellow");


var goal2=createSprite(200,355,100,20);
goal2.shapeColor=("yellow");



var boundary1 = createSprite(200,0,400,10);
boundary1.shapeColor = "white";
var boundary2 = createSprite(200,400,400,10);
boundary2.shapeColor = "white";
var boundary3 = createSprite(0,200,10,400);
boundary3.shapeColor = "white";
var boundary4 = createSprite(400,200,10,400);
boundary4.shapeColor = "white";

var playerMallet = createSprite(200,80 ,50,10);
playerMallet.shapeColor = "black";
var striker = createSprite(200,200,10,10);
striker.shapeColor = "white";

var computerMallet = createSprite(200,300,50,10);
computerMallet.shapeColor = "black";
var gameState="serve";
var playerScore=0;
    var compScore=0;
function draw() {
  background("#008000");
  if(gameState=="serve"){
    textSize(22);
    fill("blue");
    text("welcome! press space to start the game",10,220);
  }
  
  if(gameState=="play"){
    
    

    
    for (var i = 0; i < 400; i=i+20) {
      line(i,200,i+10,200);
    }
    
    computerMallet.x=striker.x;
    
    textSize(18);
    fill("maroon");
    text("score:"+playerScore,25,185);
    text("score:"+compScore,25,225);
    
    if(striker.isTouching(goal1)){
      compScore = compScore + 1 ;
      striker.x=200;
      striker.y=200;
      striker.velocityX=0;
      striker.velocityY=0;
    }
       
    if(striker.isTouching(goal2)){
      playerScore = playerScore + 1;
      striker.x=200;
      striker.y=200;
      striker.velocityX=0;
      striker.velocityY=0;
    }
    createEdgeSprites();
  
  striker.bounceOff(edges);
  striker.bounceOff(playerMallet);
  striker.bounceOff(computerMallet);
  playerMallet.bounceOff(edges);
  computerMallet.bounceOff(edges);
  
    
  }
  
  if(keyDown("space")){
    striker.velocityX=5;
    striker.velocityY=5;
    gameState="play";
  }
  
  
  
  if(gameState=="gameover"){
     textSize(50);
     fill("blue");
     text("GAME OVER",50,200);
     textSize(20);
     fill("blue");
     text("please press space to reset the game",40,250);
     
  }
  
  
  if(playerScore==5||compScore==5){
    gameState="gameover";
  }
  
  if(keyDown("space") && gameState=="gameover"){
    playerScore=0;
    compScore=0;
    gameState="play";
    
  }
  
  
  movement();
 drawSprites() ;
}











function movement() {
  if(keyDown("left")){
    playerMallet.x = playerMallet.x-10;
    
  }
  
  if(keyDown("right")){
    playerMallet.x = playerMallet.x+10;
    
  }
}

  
 drawSprites();
}






// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
;

window.setup = function () {
  window.wrappedExportedCode('setup');
};
