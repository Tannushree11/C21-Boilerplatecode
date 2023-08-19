const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var left , right , top_wall;


function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  
  world = engine.world;
  

  ground = new Ground(200,390,400,20);
  right = new Ground(390 , 200 , 20 , 400);
  left = new Ground(10 , 200 , 20 , 400);
  top_wall = new Ground(200 , 10 , 400,20);

  rectMode(CENTER);
  ellipseMode(RADIUS);
  
}

function draw() 
{
  background(51);
  ground.show();
  right.show();
  left.show();
  top_wall.show();
  Engine.update(engine);
}

