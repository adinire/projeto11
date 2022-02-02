var navio
var fundo
var navioimage
var fundoimage


function preload(){
navioimage = loadAnimation ("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png")
fundoimage = loadImage ("sea.png")


}

function setup(){
  createCanvas(400,400);
  fundo = createSprite (200,200,400,400)
  navio = createSprite (200,200,100,100)
  fundo.addImage (fundoimage)
  navio.addAnimation (navioimage)
  fundo.scale = 0.5
  if (fundo.x < 0){
    fundo.x = fundo.width/8;
  
   }
}

function draw() {
  background("blue");
    drawSprites();
    fundo.velocityX = -2


}
