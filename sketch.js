const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
function preload(){
    polygonImage =loadImage("polygon.png")
}




function setup(){
    var canvas = createCanvas(900,400);
    engine = Engine.create();
    world = engine.world;
ground1 =new ground ()
stand1=new stand (390,300,250,10)
stand2=new stand (700,200,200,10)
block1 = new block (300,275,30,40)
block2 = new block (330,275,30,40)
block3 = new block (390,275,30,40)
block4 = new block (420,275,30,40)
block5= new block (450,275,30,40)
ball = Bodies.circle(50,200,20)
World.add (world,ball)
slingshot = new SlingShot(this.ball,{x:100,y:200
})
}

function draw(){
    background("yellow");
    Engine.update(engine);
    //strokeWeight(4);
    stand1.display();
    stand1.display();
    ground1.display();
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    slingshot.display();
ball.display();



  
}

function mouseDragged(){
        Matter.Body.setPosition(this.ball, {x: mouseX , y: mouseY});
    }
function mouseReleased(){
    slingshot.fly()
}
