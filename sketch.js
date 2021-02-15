const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var engine, world;
var player
var leftImg, rightImg;
var direction = "left";
var bg;
var loseImg;
var helicopter1, helicopter2;
var backgroundMusic;
var killSound;
var cloud, cloudImage;
var troop, troopImg1, troopImg2, troopImg3, troopGroup1, troopGroup2, troopGroup3;
var bullet, bulletImg, bulletGroup;
var explosion;
var gameState = "PLAY";
var enemiesKilled = 0, enemiesEscaped = 0;
var winImg, loseImg;
var k = 1;

var helicopters = []

function preload(){
  leftImg = loadImage("images/planeLeft.png");
  rightImg = loadImage("images/planeRight.png");
  bg = loadImage("images/spacebg.jpg");
  loseImg = loadImage("images/lose.png");
  cloudImage = loadImage("images/cloud.png")
  troopImg1 = loadImage("images/troop.png");
  troopImg2 = loadImage("images/troop2.png");
  troopImg3 = loadImage("images/troop3.png");
  bulletImg = loadImage("images/bomb.png")
  winImg = loadImage("images/win.png");
  loseImg = loadImage("images/lose.png");

}
function setup() {
  createCanvas(windowWidth,windowHeight);
  engine = Engine.create();
  world = engine.world;

  //backgroundMusic = new sound("gametheme.mp3");
  //backgroundMusic.play();
  
  player = new Plane(width/2,height/2);
  troopGroup1 = new Group();
  troopGroup2 = new Group();
  troopGroup3 = new Group();
  bulletGroup = new Group();

  for(let i =1;i<300;i+=5){
    createHeli(i*300+random(200,400), random(windowWidth*0.001,windowHeight*0.06), random(200,400), random(50, 125));
  }
  for(let i =1;i<300;i+=5){
    createHeli(i*500+random(200,400), 50, random(windowWidth*0.001,windowHeight*0.3), random(height*0.15,height*0.2));
  }
  for(let i =1;i<500;i+=10){
    createCloud(i*300+random(200,400), random(windowWidth*0.5,windowHeight*0.3), random(200,400), random(50, 125));
  }
}


function draw() {
  background(bg);  
  Engine.update(engine);
  edges = createEdgeSprites();
  if(gameState == "PLAY"){
    player.display();
    drawHeli();
    drawSprites(); 
    textSize(15);
    fill(213, 214, 122)
    text("Enemies killed: " + enemiesKilled, player.body.position.x - 700, 75);
    text("Enemies escaped: " + enemiesEscaped, player.body.position.x - 700, 100);
    camera.position.x = player.body.position.x;
    translate((camera.position.x - 30 + width/2),(camera.position.y - 30 + 100))

    var rand = Math.round(random(1,3))
    if(frameCount % 10 == 0){
      switch(rand){
        case 1: var troop1 = createTroop1(k*300+random(200,400), random(windowWidth*0.05,windowHeight*0.05), 150, 150, troopImg1);
                break;
        case 2: var troop2 =  createTroop2(k*300+random(200,400), random(windowWidth*0.05,windowHeight*0.05), 150, 150, troopImg2);
                break;
        case 3: var troop3 =  createTroop3(k*300+random(200,400), random(windowWidth*0.05,windowHeight*0.05), 150, 150, troopImg3);
                break;
      }
    }
    k++;

    if(bulletGroup.isTouching(troopGroup1)){
      troopGroup1.destroyEach();
      bulletGroup.destroyEach();
      enemiesKilled++;
    }
    if(bulletGroup.isTouching(troopGroup2)){
      troopGroup2.destroyEach();
      bulletGroup.destroyEach();
      enemiesKilled++;
    }
    if(bulletGroup.isTouching(troopGroup3)){
      troopGroup3.destroyEach();
      bulletGroup.destroyEach();
      enemiesKilled++;
    }
    if(troopGroup1.isTouching(edges[3]) || troopGroup2.isTouching(edges[3]) || troopGroup3.isTouching(edges[3])){
      enemiesEscaped++;
    }
    if(enemiesEscaped >= 3 || enemiesKilled >= 10){
      gameState = "END"
    }
  }
  else if(gameState == "END"){
    if(enemiesKilled >= 10){
      image(winImg, width/2, height/2);
    }
    else{
      image(loseImg, 0, 0, width, height);
    }
  }
}

function keyPressed(){
  
  if(keyCode == 32){
    createBullet(player.body.position.x, player.body.position.y, 10, 10);
  }
  if(keyCode ==37){
    Matter.Body.applyForce(player.body, player.body.position, {x:-50,y:0})
   }
  if(keyCode ==39){
    Matter.Body.applyForce(player.body, player.body.position, {x:50,y:0})
  }
  if(keyCode ==38){  
    Matter.Body.applyForce(player.body, player.body.position, {x:0,y:-50})
  }
  else if(player.body.velocity.y>5){
    Matter.Body.applyForce(player.body, player.body.position, {x:0,y:-1})
  }  
  
}

function explosion(){
  
}
