var car1 , car2 , car3, car4 ;
var wall1 , wall2 , wall3 , wall4;

function setup() {
  
  createCanvas(1600,400);

  car1 = createSprite(50,80,30,20);
  car1.shapeColor = "red";
  car1.velocityX = 10 ;
  car1.debug = true ;
  
  car2 = createSprite(50,160,30,20);
  car2.shapeColor = "yellow";
  car2.velocityX = 15 ;
  car2.debug = true ;

  car3 = createSprite(50,240,30,20);
  car3.shapeColor = "green";
  car3.velocityX = 20 ;
  car3.debug = true ;

  car4 = createSprite(50,320,30,20);
  car4.shapeColor = "blue";
  car4.velocityX = 25 ;
  car4.debug = true ;
  

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

    if(car1.isTouching(wall1)){

      car1.velocityX = 0 ;
      car1.shapeColor = "red"

      wall1.shapeColor = "red"

    }

    if(car2.isTouching(wall2)){

      car2.velocityX = 0 ;
      car2.shapeColor = "red"
      
      wall2.shapeColor = "red"

    }

    if(car3.isTouching(wall3)){

      car3.velocityX = 0 ;
      car3.shapeColor = "red"
      
      wall3.shapeColor = "red"

    }

    if(car4.isTouching(wall4)){

      car4.velocityX = 0 ;
      car4.shapeColor = "red"
      
      wall4.shapeColor = "red"

    }

    drawSprites();
  }
  

