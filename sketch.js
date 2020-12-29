
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;



function preload()
{
  boyImage = loadImage("Plucking mangoes/boy.png");
  treeImage = loadImage("Plucking mangoes/tree.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	stone = new Stone(50,1,50);
    ground = new Ground(100,600,2000,10);
    
boy = createSprite(100,550,50,50);
boy.addImage(boyImage);
boy.scale = 0.1
tree = createSprite(600,420,30,200)
tree.addImage(treeImage);
tree.scale = 0.3
mango1 = new Mango(500,-90,100);
mango2 = new Mango(530,-90,100);


launcher = new Laucher(stone.body,{x:50,y:700});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230,230,230);
  stone.display();
  ground.display();
  mango1.display();
  mango2.display();
  launcher.display();
  
  drawSprites();
 
}
function mouseDragged(){
  
      Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
  
}
function mouseReleased(){
  laucher.fly();
  
}
function detectCollision(a,b){

}
