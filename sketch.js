
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball,ground,leftWall,rightWall;

function setup() {
	createCanvas(1200, 700);
	engine = Engine.create();
	world = engine.world;

	var ball_options={
		isStatic:false,
		restitution:0.2,
		friction:0,
		frictionAir:0.02
	}

	var ground_options={
		isStatic:true
	}

	//Create the Bodies Here.

	ball = Bodies.circle(200,100,20,ball_options);
  	World.add(world, ball);

	ground = new Plane((width/2),690,width,20);
	leftWall = new Plane(1100,620,20,120);
	rightWall = new Plane(950,620,20,120);
	ellipseMode(RADIUS);
	rectMode(CENTER);
	Engine.run(engine);
  
}


function draw() {
  strokeWeight(0);
  fill("white");
  background(0);

  keyPress();

  ellipse(ball.position.x,ball.position.y,20);
  ground.show();
  leftWall.show();
  rightWall.show();
 
}

function keyPress(){
	if(keyDown("UP_ARROW")){
		Matter.Body.applyForce(ball,ball.position,{x:0.005,y:-0.005});
	}
}

