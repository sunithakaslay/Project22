var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground, engine, world;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png");
	packageIMG=loadImage("package.png");
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG);
	packageSprite.scale=0.2;

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6;

	groundSprite=createSprite(width/2, height-35, width,50);
	groundSprite.shapeColor="white";


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.8, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 50, {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
 ellipseMode(RADIUS);
  background(0);
  Engine.update(engine);
  packageSprite.x= packageBody.position.x ;
  packageSprite.y= packageBody.position.y ;
    
  if(keyDown("DOWN_ARROW")){
	 Matter.Body.setStatic(packageBody,false);
  }
  console.log(packageBody);
  drawSprites();
 
}

