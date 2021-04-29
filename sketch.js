var player;
var goal;
var deaths=0;

function setup() {
  createCanvas(600,600);
  player=createSprite(50, 50, 75, 75);
  player.shapeColor=rgb(200,0,200);

  goal=createSprite(1960,1960,75,75);
  goal.shapeColor=rgb(255,255,0);
}

function draw() {
  background(0,255,255);  

  //player
  if(keyDown("up")){
    player.y=player.y-10;
  }
  if(keyDown("down")){
    player.y=player.y+10;
  }
  if(keyDown("left")){
    player.x=player.x-10;
  }
  if(keyDown("right")){
    player.x=player.x+10;
  }
  camera.position.x = player.x;
  camera.position.y = player.y;

  //walls & obstacles
  wall(1000,0,2000,5);
  wall(0,1000,5,2000);
  wall(1000,2000,2000,5);
  wall(2000,1000,5,2000);

  wall(100,1000,5,1500);
  trap(88,300,20,10);
  trap(12,450,20,10);
  trap(88,600,20,10);
  trap(12,750,20,10);
  trap(88,900,20,10);
  trap(12,1050,20,10);
  trap(88,1200,20,10);
  trap(12,1350,20,10);
  trap(88,1600,20,10);
  trap(12,1750,20,10);

  wall(750,1750,1300,5);
  trap(900,1900,1400,30);
  wall(1600,1500,5,750);
  wall(1400,1425,5,650);
  trap(1450,1500,75,75);
  trap(1550,1300,75,75);
  trap(1450,1100,75,75);
  wall(1650,1050,500,5);

  wall(1800,1200,200,5);
  wall(1700,1550,5,700);
  wall(1900,1550,5,700);
  trap(1800,1900,200,5);
  trap(1900,1950,1,100);
  trap(1600,1925,5,15);
  trap(1600,1975,5,15);

  wall(1000,200,1500,5);
  trap(300,50,1,100);
  trap(500,25,1,50);
  trap(500,175,1,50);
  trap(600,50,1,100);
  trap(700,150,1,100);
  trap(800,50,1,100);
  trap(900,150,1,100);
  trap(1000,25,1,50);
  trap(1000,175,1,50);
  trap(1200,50,1,100);
  trap(1300,150,1,100);
  trap(1400,150,1,100);
  trap(1500,50,1,100);
  trap(1600,150,1,100);
  trap(1700,50,1,100);

  wall(1750,500,10,600);
  trap(1795,500,75,600);
  trap(1955,500,75,600);

  wall(1000,350,1500,300);
  wall(250,1175,300,1150);
  wall(900,1600,1000,300);
  wall(1250,1250,300,400);
  wall(1350,900,500,300);
  wall(1600,500,300,300);
  for(var t=500;t<1450;t+=73){
    trap(800,t,600,1);
  }


  if(player.isTouching(goal)){
    player.x=4960;
    player.y=4960;
    camera.position.x=-500;
    camera.position.y=-500;
    background(0,200,0);
    fill(255,155,0);
    textSize(130);
    noStroke();
    text("YOU\nWON",-670,-650);
    textSize(100);
    text("you died\n"+deaths+" times",-700,-370);
  }

  drawSprites();
}

var wall=function(x,y,w,h){
  var Wall=createSprite(x,y,w,h);
  Wall.shapeColor=rgb(0,0,255);
  player.bounce(Wall);
};

var trap=function(x,y,w,h){
  var Trap=createSprite(x,y,w,h);
  Trap.shapeColor=rgb(255,0,0);
  if(player.isTouching(Trap)){
    player.x=50;
    player.y=50;
    deaths++;
  }
};