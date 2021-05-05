
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var roof;
var bob1,bob2,bob3,bob4,bob5,bob6,bob7;
var rope1,rope2,rope3,rope4,rope5,rope6,rope7;


function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Roof (700,200,800,20);

	bob1 = new Bob(1000, 600);	
	bob2 = new Bob(900, 600);
	bob3 = new Bob(800, 600);
	bob4 = new Bob(700, 600);
	bob5 = new Bob(600, 600);
	bob6 = new Bob(500, 600);
	bob7 = new Bob(400, 600);
	

	rope1 = new Rope(bob1.body, roof.body, 300, 0);
	rope2 = new Rope(bob2.body, roof.body, 200, 0);
	rope3 = new Rope(bob3.body, roof.body, 100, 0);
	rope4 = new Rope(bob4.body, roof.body, 0, 0);
	rope5 = new Rope(bob5.body, roof.body, -100, 0);
	rope6 = new Rope(bob6.body, roof.body, -200, 0);
	rope7 = new Rope(bob7.body, roof.body, -300, 0);


	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
 
  roof.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  bob6.display();
  bob7.display();

 rope1.display();
 rope2.display();
 rope3.display();
 rope4.display();
 rope5.display();
 rope6.display();
 rope7.display();


 
 if (keyDown("up")) {
	Matter.Body.applyForce(bob1.body, bob1.body.position, { x: 30, y: -45 })
	
}
}



