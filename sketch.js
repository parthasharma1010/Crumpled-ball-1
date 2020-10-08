const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, paperball1;

// function preload()
//  {
  	
// }

function setup() {
	var canvas = createCanvas(1000, 500);
	engine = Engine.create();
	world = engine.world;
  
	//Create the Bodies Here.
    box1 = new Box(600,600,10,100);
    box2 = new Box(490,610,10,100);
    box3 = new Box(490,610,10,100);

    paperball1 = new Paper(600,900,10,10);
    ground = new Ground(400,height,1200,20);
     
}

  	Engine.run(engine);
  

function draw() {
    background(0);
    Engine.update(engine); 
    box1.display();
    box2.display();
    box3.display();
    paperball1.display(); 
    ground.display();
    ellipseMode(RADIUS);
    ellipse(paperball1.position.x,paperball1.position.y,20,20); 
    Matter.Bodies.circe(x,y,radius);
  drawSprites();
 
}

  function keyPressed() {
    if (keyCode === UP_ARROW) {  
     Matter.Body.applyforce(paperball1.Body, paperball1.position,{x:85, y:85});

    }
  }
