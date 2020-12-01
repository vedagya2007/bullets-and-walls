var car1 , car2 , car3, car4 ;
var bullet1 , bullet2 , bullet3 , bullet4;

function setup() {
  
  createCanvas(1600,400);

  bullet1= createSprite(50,80,30,20);
  bullet1.shapeColor = "red";
  bullet1.velocityX = 10 ;
  bullet1.debug = true ;
  
  bullet2 = createSprite(50,160,30,20);
  bullet2.shapeColor = "yellow";
  bullet2.velocityX = 15 ;
  bullet2.debug = true ;

  bullet3 = createSprite(50,240,30,20);
   bullet3.shapeColor = "green";
   bullet3.velocityX = 20 ;
   bullet3.debug = true ;

   bullet4 = createSprite(50,320,30,20);
   bullet4.shapeColor = "blue";
   bullet4.velocityX = 25 ;
   bullet4.debug = true ;
  

  wall1 = createSprite(1400, 80, 50, 50);
  wall1.shapeColor = "blue";
  wall1.debug = true ;

  wall2 = createSprite(1400, 160, 50, 50);
  wall2.shapeColor = "blue";
  wall2.debug = true ;

  wall3 = createSprite(1400, 240, 50, 50);
  wall3.shapeColor = "blue";
  wall3.debug = true ;

  wall4 = createSprite(1400, 320, 50, 50);
  wall4.shapeColor = "blue";
  wall4.debug = true ;


}
 
  function draw() {

    background(20);

    if(bullet1.isTouching(wall1)){

      bullet1.velocityX = 0 ;
      bullet1.shapeColor = "red"

      wall1.shapeColor = "red"

    }

    if(bullet2.isTouching(wall2)){

      bullet2.velocityX = 0 ;
      bullet2.shapeColor = "red"
      
      wall2.shapeColor = "red"

    }

    if(bullet3.isTouching(wall3)){

      bullet3.velocityX = 0 ;
      bullet3.shapeColor = "red"
      
      wall3.shapeColor = "red"

    }

    if(bullet4.isTouching(wall4)){

      bullet4.velocityX = 0 ;
      bullet4.shapeColor = "red"
      
      wall4.shapeColor = "red"

    }

    drawSprites();
  }
  

