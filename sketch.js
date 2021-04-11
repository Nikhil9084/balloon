var boy0;
var road0;
var cash0;
var diamond0;
var ruby0;
var score;
var sword0;
var play=1;
var end=0;
var gameState=play;
var over0;

function preload(){
  road=loadImage("Road.png");
  boy=loadAnimation("runner1.png","runner2.png");
 Cash=loadImage("cash.png");
  diamond=loadImage("diamonds.png");
  ruby=loadImage("ruby.png");
  sword=loadImage("sword.png");
  over=loadImage("gameOver.png");
}


function setup(){
  createCanvas(500,500);
  
 roads(); 
 boys();

 score=0;
  cash1G=new Group();
  supG=new Group();
  RubyG=new Group();
  SwordG=new Group();
  
}

function draw(){

  background("pink");
  

  
  if(gameState===play){
road0.velocityY=5;
  
 if(road0.y>300){
    road0.y=100;
    
    
  }
  
   
  
  
  boy0.x=World.mouseX;
  
  
  
   cashs();
   diamonds();
  rubys();
  swords();

  
    if(cash1G.isTouching(boy0)){
    cash1G.destroyEach();
      score=score+10;
  }
  
  if(boy0.isTouching(supG)){
    supG.destroyEach();
    score=score+20;
  }
  
  if(boy0.isTouching(RubyG)){
    RubyG.destroyEach();
    score=score+30;
    
  }
  
      overs();
    
     over0.visible=false;
    
    if(boy0.isTouching(SwordG)){
      gameState=end;
      score=0;
    
      road0.velocityY=0;
    }
    
    
    if(gameState===end){
      over0.visible=true;
      cash1G.setVelocityYEach(0);
      cash1G.setLifetimeEach(-1);
      
      supG.setVelocityYEach(0);
      supG.setLifetimeEach(0);
      
      RubyG.setVelocityYEach(0);
      RubyG.setLifetimeEach(-1);
      
      SwordG.setVelocityYEach(0);
      SwordG.setLifetimeEach(-1);
      
      
    }
    
    
  }
  drawSprites();
  textSize(30);
  textFont("algerian");
  text("Treasure:"+score,180,40);
  
  
}


function roads(){
  road0=createSprite(250,200,20,20);
  road0.addImage("r",road);
}

function boys(){
    boy0=createSprite(90,400,20,20);
  boy0.addAnimation("b",boy);
  boy0.scale=0.1;
}

function cashs(){
  if(frameCount%60===0){
  cash0=createSprite(200,0,20,20);
    cash0.x=Math.round(random(10,490));
    
cash0.addImage("Ca",Cash);
  cash0.scale=0.1;
    cash0.velocityY=5;
    cash0.lifetime=200;
    cash1G.add(cash0);
    
    cash0.depth=boy0.depth;
    boy0.depth=boy0.depth+1;
    
}
}

function diamonds(){
  if(frameCount%80===0){
  diamond0=createSprite(Math.round(random(10,490)),0,20,20);
 diamond0.addImage("d",diamond);
  diamond0.scale=0.030;
  diamond0.velocityY=5;
  diamond0.lifetime=200;
    supG.add(diamond0);
  diamond0.depth=boy0.depth;
    boy0.depth=boy0.depth+1;
}
}

function rubys(){
  if(frameCount%100===0){
  ruby0=createSprite(10,0,20,20);
    ruby0.addImage("r",ruby)
  ruby0.x=Math.round(random(10,490));
  ruby0.scale=0.080;
  ruby0.velocityY=5;
  ruby0.lifetime=200;
    ruby0.depth=boy0.depth;
    boy0.depth=boy0.depth+1;
  RubyG.add(ruby0);
}
}

function swords(){
  if(frameCount%120===0){
  sword0=createSprite(200,0,20,20);
    sword0.addImage("s",sword);
  sword0.x=Math.round(random(10,490));
  sword0.velocityY=5;
  sword0.scale=0.1;
  sword0.lifetime=200;
    sword0.depth=boy0.depth;
    boy0.depth=boy0.depth+1;
    SwordG.add(sword0);
}
}

function overs(){
  over0=createSprite(220,200,20,20);
  over0.addImage("o",over);
}