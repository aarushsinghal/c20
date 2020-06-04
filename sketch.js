var mRect,fRect;

function setup() {
  createCanvas(800,400);
  
  fRect=createSprite(400, 200, 50, 50);
  mRect=createSprite(400, 200, 60, 80);
  fRect.shapeColor="green";
  mRect.shapeColor="blue";

}



function draw() {
  background(0);  
  mRect.x=mouseX;
  mRect.y=mouseY;
  if(mRect.x-fRect.x<fRect.width/2+mRect.width/2
    && fRect.x-mRect.x<fRect.width/2+mRect.width/2
    && fRect.y-mRect.y<fRect.height/2+mRect.height/2
    && mRect.y-fRect.y<fRect.height/2+mRect.height/2){
    mRect.shapeColor="red";
    fRect.shapeColor="yellow";
  }else{ mRect.shapeColor="blue";
         fRect.shapeColor="green";
}
  drawSprites();
}