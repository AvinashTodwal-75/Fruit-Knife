var alienImgalien1, alienImgalien2, alienG;
var fruitImgfruit1, fruitImgfruit2, fruitImgfruit3,
    fruitImgfruit4;
var knife, knifeImg;
var gameover, gameoverImg;
var gomp;
var knifeSwooshmp;

var play = 1;
var end = 0;
var gameState = play;

var fruitG;
var fruitG1;
var score = 0;
function preload(){
  
  alienImg=loadAnimation("alien1.png", "alien2.png");  
  fruitImgfruit1=loadImage("fruit1.png");
  fruitImgfruit2=loadImage("fruit2.png");
  fruitImgfruit3=loadImage("fruit3.png");
  fruitImgfruit4=loadImage("fruit4.png");
  knifeImg=loadImage("knife.png");
  gameoverImg=loadImage("gameover.png");
  
  gomp=loadSound("gameover.mp3");
  knifeSwooshmp=loadSound("knifeSwoosh.mp3");
  }

function setup() {
  createCanvas(400, 400);  
  
  knife=createSprite(200, 350, 10, 10);
  knife.addImage(knifeImg);
  knife.scale=0.5;
  
  knife.debug=false;
  knife.setCollider("rectangle", 0, -20, 90, 90);
  
  fruitG = new Group();
  fruitG1 = new Group();
  alienG = new Group();
  
  gameover = createSprite(200, 200, 100,100);
  gameover.addImage(gameoverImg);
  gameover.scale=0.8;
  gameover.visible=false;
  }

function draw() {
  background("maroon");
    
  if(gameState === play){
    
   spawnalien();
   spawnfruit();
   spawnfruit1()
    
   knife.x = World.mouseX;
   knife.y = World.mouseY;  
  
  if (knife.isTouching(fruitG)){
   fruitG.destroyEach();
   score = score+1;
   }    
    
  if (knife.isTouching(fruitG1)){
   fruitG1.destroyEach();
   score = score+2;
   knifeSwooshmp.play();
   }
  
 if(knife.isTouching(alienG)){
   gameState = end;   
   gomp.play();
   }    
   }
  
else if(gameState === end){
   alienG.destroyEach();
   fruitG.setVelocityEach(0);
   alienG.setVelocityEach(0);
   gameover.visible = true;  
   }
  
   drawSprites();
  
   stroke("black");
   fill("white");
   textSize(18);
   text("SCORE :"+score, 300,25);
  
   }

function spawnfruit(){
  
  if(frameCount % 120 === 0){
   fruit=createSprite(-10, 200, 10, 10);
   fruit.scale=0.2;
   fruit.velocityX=5;
   fruit.lifetime=210;
   fruit.y=Math.round(random(25, 300));
   fruitG.add(fruit);
   var mannat = Math.round(random(1,4));
    
   switch (mannat){
   case 1:fruit.addImage(fruitImgfruit1);
   break;  
   case 2:fruit.addImage(fruitImgfruit2);
   break;
   case 3:fruit.addImage(fruitImgfruit3);
   break;
   case 4:fruit.addImage(fruitImgfruit4);
   break;  
   }    
   } 
   }

function spawnalien(){
   if(frameCount % 70 === 0){
   alien=createSprite(390, 200, 10, 10);
   alien.scale=0.7;
   alien.velocityX=-4;
   alien.lifetime=150;  
   alien.y = Math.round(random(100, 300));
   alien.addAnimation("running",alienImg);
   alienG.add(alien);
   }  
   }
  function spawnfruit1(){
  
  if(frameCount % 120 === 0){
   fruit=createSprite(410, 200, 10, 10);
   fruit.scale=0.2;
   fruit.velocityX=-6;
   fruit.lifetime=210;
   fruit.y=Math.round(random(25, 300));
   fruitG1.add(fruit);
   var mannat = Math.round(random(1,4));
    
   switch (mannat){
   case 1:fruit.addImage(fruitImgfruit1);
   break;  
   case 2:fruit.addImage(fruitImgfruit2);
   break;
   case 3:fruit.addImage(fruitImgfruit3);
   break;
   case 4:fruit.addImage(fruitImgfruit4);
   break;  
   }    
   } 
   }