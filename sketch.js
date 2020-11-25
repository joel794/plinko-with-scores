const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var play = 1;
var end = 0;

var balls = [];
var plinkos = [];
var divs = [];

var engine, world;
var ground, particle;
var divHeight = 200;

var gamestate = play;
var score = 0;
var count = 0;
var chances = 5;

function setup(){
    createCanvas(505, 600);
    engine = Engine.create();
    world = engine.world;

    wall1 = new Wall(2, 300, 10, 600);
    wall2 = new Wall(502, 300, 10, 600);

    
    for (var k = 12; k <= width; k = k+80) {
        divs.push(new Division(k, height - divHeight/2, 10, divHeight));
    }


    for (var j = 35; j <=width; j=j+50) {
        plinkos.push(new Plinko(j, 90, 10));
    }

    for (var j = 20; j <=width-10; j = j+50) {
        plinkos.push(new Plinko(j,160, 10));
    }

    for (var j = 35; j <=width; j=j+50) {
        plinkos.push(new Plinko(j, 230, 10));
    }

    for (var j = 20; j <=width-10; j = j+50) {
        plinkos.push(new Plinko(j,300, 10));
    }
    
}

function draw(){
    background(50);
    Engine.update(engine);

    fill("white");
    textSize(25);
    textFont('Tahoma');
    text("Score : ", 10, 30);
    text(score, 100, 30);
    
    fill("white");
    textSize(25);
    textFont('Tahoma');
    text("Chances Left :"+chances,300,30);

    text("500", 30, 450);
    text("500", 110, 450);
    text("300", 190, 450);
    text("300", 270, 450);
    text("100", 350, 450);
    text("100", 430, 450);


    
    for (var k = 0; k < divs.length; k++) {
        divs[k].display();
    }

    for (var j = 0; j < plinkos.length; j++) {
        plinkos[j].display();
    }



        if(particle!=null) {
            particle.display();
    
            if (particle.body.position.y>400) {
    
                if (particle.body.position.x > 0 && particle.body.position.x < 160 && particle.body.position.y > 600){
                    score = score+500;
                    particle=null;
                    count = count+1;
                    chances=chances -1
                    if(count === 5) {
                        gamestate = end;
                    }

                    
                }
            }
        }

        if(particle!=null) {
            particle.display();
    
            if (particle.body.position.y>400) {
    
                if (particle.body.position.x > 160 && particle.body.position.x < 320 && particle.body.position.y > 600){
                    score = score+300;
                    particle=null;
                    count = count+1;
                    chances=chances -1

                    if(count === 5) {
                        gamestate = end;
                    }

                    
                }
            }
        }

        if(particle!=null) {
            particle.display();
    
            if (particle.body.position.y>400) {
    
                if (particle.body.position.x > 320 && particle.body.position.x < 480 && particle.body.position.y > 600){
                    score = score+100;
                    particle=null;
                    count = count+1;
                    chances=chances -1

                    if(count === 5) {
                        gamestate = end;
                    }
    
                   
                }
            }
        }

    
            
        
        if (gamestate === end) {
            
            textSize(30);
            fill("#AFFF33");
            textFont('Loopiejuice Regular');
            text("Game Is Over", 300, 280);
            textSize(30);
            text("OUT OF CHANCES",70, 280);
            textSize(60);
            textFont('AgencyFB')
            text("You scored ="+score,100, 380);

           
        }


    wall1.display();
    wall2.display();
    
}

function mousePressed() {
    if (gamestate !== end) {
        
        particle = new Ball(mouseX, 10, 10, 10);
        
    }

    
}

function reset() {
    gameState = start;
    text.visiblity = false;
}

function keyPressed() {
    if (keyCode===32) {
        reset();
    }
}
