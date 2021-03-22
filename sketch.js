
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper,dustbin1,dustbin2,dustbin3,ground;




function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  paper=new Paper(200,400,20);
  ground=new Ground(800,670,width,20);
 dustbin1=new dustbin(500,650,100,10);
 dustbin2=new dustbin(450,620,10,50);
 dustbin3=new dustbin(550,620,10,50);
}


function draw() {
  rectMode(CENTER);
  background(0);
  
paper.display();
ground.display();
dustbin1.display();
dustbin2.display();
dustbin3.display();





  drawSprites();

}
function keyPressed(){
if(keyCode===UP_ARROW){
Matter.Body.applyForce(paper.body,paper.body.position,{x:30,y:-30});

}	


}



