const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var palyer, playerBase, playerArcher;
var baseimage;

function preload() {
  backgroundImg = loadImage("./assets/background.png");
  baseimage = loadImage("./assets/base.png");
  playerimage = loadImage("./assets/player.png");
}

function setup() {
  canvas = createCanvas(800, 800);

  engine = Engine.create();
  world = engine.world;
  angleMode(DEGREES);
  ground = new Floor (400,780,800,10)
  playerBase = new Base (200,400,250,100)
  playerArcher = new Player (200,300,100,120)
 

}

function draw() {
  background(backgroundImg);



  Engine.update(engine);

  
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);
  ground.display()
  playerBase.display()
  playerArcher.display()
}
