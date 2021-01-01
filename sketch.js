//Create variables here
var dog, happyDog;
var database;
var foodS, foodStock;
function preload()
{
NDOGImg=loadImage(dogImg1.png)
HDOGGOImg=loadImage(dogImg.png)
}

function setup() {
	createCanvas(500,500);
  database = firebase.database();
foodStock=database.ref('food')
foodStock.on("value",readStock)
dog=createSprite(250,200,30,40)
dog.addImage(NDOGImg)
}


function draw() {  
background(46, 139, 87)
 
 if (keyWentDown(UP_ARROW)) {
   WriteStocks(foodS)
   dog.addImage(HDOGGOImg)
 }
  drawSprites();
text("Food stock=",foodStock)
fill('red')

}



