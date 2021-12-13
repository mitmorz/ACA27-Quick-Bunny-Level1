var backgroundImg,snakeImg,playerImg,carrot;
var player,target,edges,obs1,obs2,obs3,obs4,obs5,obs6,obs7,obs8,obs9;
var hill;
function preload(){
    backgroundImg=loadImage("images/bg.png");
    playerImg=loadImage("images/bunnyImg.png");
    snakeImg=loadImage("images/snake.png");
    carrot=loadImage("images/carrot.png");
    }


function setup() {
createCanvas(600,600);
hill=createSprite(300,300);
hill.scale=4;
hill.addImage(backgroundImg);
edges=createEdgeSprites();
player = createSprite(40,560,20,20);
player.addImage(playerImg)
player.scale=0.2;
target = createSprite(540,70,30,30);
target.addImage(carrot);
target.scale= 0.2;
obs1 = createSprite(200,300,90,30);
obs2 = createSprite(400,300,90,30);
obs3 = createSprite(600,300,90,30);
obs4 = createSprite(0,300,90,30);
obs6 = createSprite(200,200,90,30);
obs7 = createSprite(400,200,90,30);
obs8 = createSprite(600,200,90,30);
obs9 = createSprite(0,200,90,30);

snakeGroup = new Group();

}


function draw() {
  background("green");  
player.bounceOff(edges[0]);
player.bounceOff(edges[1]);
player.bounceOff(edges[2]);
player.bounceOff(edges[3]);
if(keyDown("up")){
  player.y=player.y-3
}
if(keyDown("down")){
  player.y=player.y+3;
}
if(keyDown("left")){
  player.x=player.x-3;
}
if(keyDown("right")){
  player.x=player.x+3;
}

if(player.isTouching(target)){
  text("You Win",200,200);{
  }

}
if(player.isTouching(obs1)){
  player.x=40;
  player.y=560;
  text("You lose",200,200);

}
if(player.isTouching(obs2)){
  player.x=40;
  player.y=560;
  text("You lose",200,200);

}
if(player.isTouching(obs3)){
  player.x=40;
  player.y=560;
  text("You lose",200,200);

}
if(player.isTouching(obs4)){
  player.x=40;
  player.y=560;
  text("You lose",200,200);

}
if(player.isTouching(obs6)){
  player.x=40;
  player.y=560;
  text("You lose",200,200);

}
if(player.isTouching(obs7)){
  player.x=40;
  player.y=560;
  text("You lose",200,200);

}
if(player.isTouching(obs8)){
  player.x=40;
  player.y=560;
  text("You lose",200,200);

}
if(player.isTouching(obs9)){
  player.x=40;
  player.y=560;
  text("You lose",200,200);

}



  drawSprites();

obs1.shapeColor = "orangered"
obs2.shapeColor = "orangered"
obs3.shapeColor = "orangered"
obs4.shapeColor = "orangered"
obs6.shapeColor = "orangered"
obs7.shapeColor = "orangered"
obs8.shapeColor = "orangered"
obs9.shapeColor = "orangered"


 snakeCreate()
for (var i = 0; i< (snakeGroup).length  ; i++){
  var temp = (snakeGroup).get(i)  ;
  if (player.isTouching(temp)){
    player.x=40;
    player.y=550;

  }
}
function  snakeCreate(){
  if(frameCount %30===0){
var snake = createSprite(600,200,40,40);
snake.velocityX=random (-4,4);
snake.velocityY=random (-4,4);
snakeGroup.add(snake); 
snake.addImage(snakeImg);
snake.scale=random (0.1,0.3)
}}


}

