var boyImg,pathImg;
var path,boy;
var invisibleWall1;
var invisibleWall2;

function preload(){
  
  pathImg = loadImage("path.png");
  boyImg = loadAnimation("Runner-1.png","Runner-2.png");  //pre-load images
 
 
}

function setup(){
  createCanvas(400,600);
  background("white");
  
  path=createSprite(200,200);
  path.addImage(pathImg);
  path.velocityY = 4;
  
  
  //creating boy running
  boy = createSprite(70,580,20,20);
  boy.addAnimation("SahilRunning",boyImg);
  boy.scale=0.08;
     
invisibleWall1 = createSprite(65,600,25,3000);
invisibleWall1.visible=false;

invisibleWall2 = createSprite(340,600,25,3000);
invisibleWall2.visible=false;

}

function draw() {
  background(0);
  
 if (path.y > 400) {
    path.y =  height/2;
  }

  boy.x = World.mouseX;
  createEdgeSprites();

boy.collide(invisibleWall1);
boy.collide(invisibleWall2);
  boy.debug=true;
  invisibleWall1.debug=true;
  invisibleWall2.debug=true;
  drawSprites();
}

 