var moveX=200;
var moveY=200;
var circleX=100;
var circleY=100;
var score=0;
var r=255;
var g=255;
var b=255;

var snakeLength=40;

function setup() {
  // Code here runs only once
  createCanvas(600, 600);
}

function draw() {
  // Code here runs continuously
  background(r,g,b);

  //drawGrid() is referenced to the drawGrid.js file. You can hide the grid by adding "//" in front of it. If you want to see the grid OVER your sketch, move it to the line before }.
  // drawGrid()
  stroke(0)

  //snake
  fill("green")
  rect(moveX,moveY,snakeLength,15)

  //Snake Move
  if(keyIsPressed==true){
    if(keyCode==39){//right arrow
      moveX+=5
    }
    if(keyCode==37){//left arrow
      moveX-=5
    }
    if(keyCode==38){//Up arrow
      moveY-=5
    }
    if(keyCode==40){//down arrow
      moveY+=5
    }
    
  }

  //Food
  fill("white")
  ellipse(circleX,circleY,25,25)


  //score
  textAlign(CENTER, CENTER);
  textSize(30);
  fill("red")
  textFont("'Playfair Display', serif")
  text(`Your score is ${score}`, width/2, 50)
  //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
if(collideRectCircle(moveX,moveY,snakeLength,15,circleX,circleY,25)){
  //move circle to another location
  circleX=random(25,width-25);
  circleY=random(25,height-25);
  
  //add 1 point to score when snake touches the circle
  score+=1

  //change background color
   r=random(100,255);
   g=random(100,255);
   b=random(100,255);

  //make snake longer;
  snakeLength+=2
}



  

}

