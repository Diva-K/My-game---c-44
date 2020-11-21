const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var backgroundImg;
var stone;
var meteorite;
var slingshot;
var lifeline;
var exploding, losing;

function preload(){
backgroundImg = loadImage("images/park.png")
exploding = loadSound("explode.mp3")
losing = loadSound("lose.mp3")
}

function setup(){
    var canvas = createCanvas(800,400);
    engine = Engine.create();
    world = engine.world;
    stone = new Stone(200,height-135)
    meteorite = new Meteorite(width-100,100)
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
//if(frameCount%100===0){
    
    meteorite.display()
//}
if(keyWentDown("space")){
exploding.play()
}
if(keyWentDown("a")){
    losing.play()
    }
    stone.display()
    

}