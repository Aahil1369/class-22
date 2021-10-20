const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world, backgroundImg;

var canvas, angle, tower, ground, cannon;
var angle = 20;

function preload(){
  backgroundImg = loadImage("./assets/background.gif");
  towerImg = loadImage("./assets/tower.png");
}

function setup(){
  canvas = createCanvas(1200,600);
  engine = Engine.create();
  world = engine.world;

  ground_options = {
    isStatic:true

  }

  tower_options = {
    isStatic:true

  }

  ground = Bodies.rectangle(0,height-1,width*2,1,ground_options);
  World.add(world,ground);

  tower = Bodies.rectangle(160,350,160,310,tower_options);
  World.add(world,tower);

  cannon = new Cannon(180,110,130,100,angle);
}

function draw(){
  image(backgroundImg,0,0,1200,600);
  Engine.update(engine);
  rect(ground.position.x,ground.position.y,width*2,1);
  push();
  imageMode(CENTER);
  //rect(tower.position.x,tower.position.y,160,310);
  image(towerImg,tower.position.x,tower.position.y,160,310)
  pop();
  cannon.display();
}