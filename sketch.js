
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score;
var ground;
var survivalTime=0;
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(500,400);
 monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x);

  
}


function draw() {
 background(230);
  
  if(ground.x>0){
     ground.x=ground.width/2;
  }
  if(keyDown("space")&&monkey.y>=300){
  monkey.velocityY = -12;
  }
   monkey.velocityY = monkey.velocityY + 0.6
  
  monkey.collide(ground);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.round(frameCount/frameRate());
  text("survival Time:"+survivalTime,100,50);
  
  banana2();
  stone();
  drawSprites();
}
function banana2(){
 if(frameCount%80===0){
   banana = createSprite(400,250,20,20 );
   r= Math.round(random(180,300));
   banana.y = r;
   banana.addImage(bananaImage);
   banana.velocityX= -4;
   banana.scale = 0.09;
   banana.lifetime = 150;
   
   
 } 
  
}
function stone(){
  if(frameCount%300===0){
    obstacle=createSprite(380,329,20,20);
    obstacle.addImage(obstacleImage);
    obstacle.velocityX=-3;
    obstacle.lifetime =150;
    obstacle.scale = 0.1;
     }
}





