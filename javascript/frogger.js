//bitmoji function
var drawBitmoji = function (x,y,h){
    //hair
        fill(23, 14, 3);
        quad(x+(h/150*78),y+(h/150*51),x+(h/150*125),y+(h/150*51),x+(h/150*117),y-(h/150*1),x+(h/150*79),y-(h/150*2));
    
    //torso
        //body
            noStroke();
            fill(250, 246, 237);
            rect(x+(h/150*65),y+(h/150*45),(h/150*70),(h/150*85));
        //arms
            stroke(250, 239, 237);
            strokeWeight(20);
            //right
                line(x+(h/150*70),y+(h/150*60),x+(h/150*56),y+(h/150*90));
                line(x+(h/150*69),y+(h/150*120),x+(h/150*56),y+(h/150*90));
            //left
                line(x+(h/150*130),y+(h/150*60),x+(h/150*150),y+(h/150*94));
                line(x+(h/150*126),y+(h/150*126),x+(h/150*150),y+(h/150*94));
        //hands
            //right
                noStroke();
                fill(255,231,178);
                ellipse(x+(h/150*77),y+(h/150*129),(h/150*20),(h/150*20));
            //left
                noStroke();
                fill(255,231,178);
                ellipse(x+(h/150*120),y+(h/150*133),(h/150*20),(h/150*20));
    //hair
        fill(23, 14, 3);
        quad(x+(h/150*115),y+(h/150*77),x+(h/150*134),y+(h/150*84),x+(h/150*113),y-(h/150*1),x+(h/150*107),y+(h/150*3));
        quad(x+(h/150*92),y+(h/150*77),x+(h/150*73),y+(h/150*88),x+(h/150*83),y-(h/150*1),x+(h/150*87),y+(h/150*1));
    //neck
        noStroke();
        fill(255,231,178);
        quad(x+(h/150*90),y+(h/150*50),x+(h/150*112),y+(h/150*50),x+(h/150*101),y-(h/150*1),x+(h/150*99),y+(h/150*1));
        triangle(x+(h/150*90), y+(h/150*49), x+(h/150*113), y+(h/150*48), x+(h/150*101), y+(h/150*60));
    fill(217, 137, 169);
    text("JN",x+(h/150*94),y+(h/150*86),(h/150*20),(h/150*20));
        //head
        //shape
            noStroke();
            fill(255,231,178);
            ellipse(x+(h/150*100),y+(h/150*15),(h/150*40),(h/150*44));
        //eyes
        strokeWeight(1);
            //left
                noStroke();
                fill(255, 255, 255);
                ellipse(x+(h/150*107),y+(h/150*7),(h/150*7),(h/150*7));
                fill(138, 96, 41);
                ellipse(x+(h/150*108),y+(h/150*8),(h/150*4),(h/150*4));
                stroke(0, 0, 0);
                fill(0, 0, 0);
                ellipse(x+(h/150*108),y+(h/150*8),(h/150*1.2),(h/150*1.2));
            //right
                noStroke();
                fill(255, 255, 255);
                ellipse(x+(h/150*91),y+(h/150*8),(h/150*7), (h/150*7));
                fill(138, 96, 41);
                ellipse(x+(h/150*92),y+(h/150*9),(h/150*4),(h/150*4));
                stroke(0, 0, 0);
                fill(0, 0, 0);
                ellipse(x+(h/150*92),y+(h/150*9),(h/150*1.2),(h/150*1.2));
        //nose
            stroke(0, 0, 0);
            arc(x+(h/150*100), y+(h/150*19), (h/150*4.8), (h/150*3.2), -15, 143); 
            line(x+(h/150*99),y+(h/150*12),x+(h/150*103),y+(h/150*20));
            //necklace
                stroke(207, 201, 23);
                fill(207,201,23);
                arc(x+(h/150*99), y+(h/150*43), (h/150*23.9), (h/150*4.5), -15, 143);
        //mouth
        stroke(250, 136, 108);
        fill(250, 136, 108);
        arc(x+(h/150*100), y+(h/150*28), (h/150*11.1), (h/150*5.0), -15, 143);
        arc(x+(h/150*98), y+(h/150*29), (h/150*5.0), (h/150*4.5), 160, 360);
        arc(x+(h/150*103), y+(h/150*29), (h/150*5.0), (h/150*4.5), 160, 360);
    //hair
        noStroke();
        fill(23, 14, 3);
        quad(x+(h/150*119),y+(h/150*66),x+(h/150*127),y+(h/150*47),x+(h/150*117),y+(h/150*1),x+(h/150*114),y+(h/150*3));
        quad(x+(h/150*85),y+(h/150*33),x+(h/150*79),y+(h/150*47),x+(h/150*80),y+(h/150*8),x+(h/150*82),y+(h/150*1));
    //hat
        noStroke();
        fill(217, 137, 169);
        rect(x+(h/150*75), y-(h/150*8), (h/150*48), (h/150*11));
        quad(x+(h/150*78), y-(h/150*8), x+(h/150*118), y-(h/150*8), x+(h/150*111), y-(h/150*20), x+(h/150*93), y-(h/150*17));
        quad(x+(h/150*108), y-(h/150*13), x+(h/150*120), y-(h/150*13), x+(h/150*112), y-(h/150*21), x+(h/150*94), y-(h/150*17));
        

   quad(x+(h/150*78), y-(h/150*8), x+(h/150*118), y-(h/150*8), x+(h/150*111), y-(h/150*20), x+(h/150*93), y-(h/150*17));
        quad(x+(h/150*108), y-(h/150*13), x+(h/150*120), y-(h/150*13), x+(h/150*112), y-(h/150*21), x+(h/150*94), y-(h/150*17));
};

var score = 0;
var scoreTop = true;
var scoreBot = false;

//constructor person object
var Person = function(x, y) { 
    this.x = x;
    this.y = y;
    this.sticks = 0;
};

Person.prototype.draw = function() { 
    fill(255, 0, 0);
    this.y = constrain(this.y, 0, height-50);
    drawBitmoji(this.x, this.y, 30);
    
    if(this.y < 50 && scoreTop){
        score++;
        scoreTop = false;
        scoreBot = true;
    }
    else if (this.y > 300 && scoreBot){
        score++;
        scoreTop = true;
        scoreBot = false;
    }
};

//moving the bitmoji up & down
Person.prototype.hop = function() { 
    this.y -= 5; //going up (how you're making it hop)
};
Person.prototype.fall = function() {
    this.y += 5;
};

//checks to see if bitmoji has touched the car
Person.prototype.checkForStickGrab = function(stick) { //
    if ((stick.x >= this.x && stick.x <= (this.x + 40)) &&
    (stick.y >= this.y && stick.y <= (this.y + 40))) {
    stick.y = -400;
    //takes the score
    this.sticks++;
    score--;
}
};

//constructor stick (car) object
var Stick = function(x, y, speed) {
    this.x = x;
    this.y = y;
    this.speed = speed;
};

//draw car
Stick.prototype.draw = function() {
    fill(255, 0, 0);
    rectMode(CENTER);
    //car body
    rect(this.x, this.y, 40, 10);
    fill(89, 71, 0);
    //wheels
    ellipse(this.x+9, this.y+8, 10, 10);
    ellipse(this.x-9, this.y+8, 10, 10);
};

var person = new Person(200, 300);

var sticks = [];
//animating the cars and their positions

for (var i = 0; i < 40; i++) {  
//spacing the x out every 40 pixels, y position is random
    sticks.push(new Stick(i * 40 - 300, random(50, 325)));  

}

var currentScene = 0;

var Button = function(config) {
    this.x = config.x || 0;
    this.y = config.y || 0;
    this.width = config.width || 75;
    this.height = config.height || 50;
    this.label = config.label || "Click";
    this.color = config.color || (255, 255, 255);
    this.onClick = config.onClick || function() {};
};

Button.prototype.draw = function() {
    fill(this.color);
    rect(this.x, this.y, this.width, this.height, 5);
    fill(0, 0, 0);
    textSize(19);
    textAlign(LEFT, TOP);
    text(this.label, this.x+10, this.y+this.height/4);
};

Button.prototype.isMouseInside = function() {
    return mouseX > this.x &&
    mouseX < (this.x + this.width) &&
    mouseY > this.y &&
    mouseY < (this.y + this.height);
};

Button.prototype.handleMouseClick = function() {
    if (this.isMouseInside()) {
        this.onClick();
    }
};

Button.prototype.changeColor = function(newColor){
    this.color = newColor;
};

//drawing the start button
var start = new Button({
    x: 145,
    y: 268,
    width: 100,
    height: 50,
    label: "start",
    color: color(255, 255, 255),
    onClick: function() {
        currentScene = 1;
    }
});

//opening screen
var splash = function(){
    currentScene = 0;
    background(176, 212, 205);
    fill(255, 255, 255);
    textSize(40);
    text("frogger game" , 85, 60);
    drawBitmoji(130, 145, 100);
    start.draw();
    textSize(15);
    fill(255, 255, 255);
    text("Juliana Nguyen", 150, 350);
};

//start screen
var drawScene2 = function(){
    currentScene = 1;

    //establishing the background
    background(227, 254, 255);
    fill(130, 79, 43);
    rectMode(CORNER);
    //lower road
    rect(0, height*0.90, width, height*0.10); 
    //upper road
    rect(0, height*0, width, height*0.10); 


    for (var i = 0; i < sticks.length; i++) { 
        //drawing stick (cars)
        sticks[i].draw(); 
        person.checkForStickGrab(sticks[i]); 

        //car's speed control, random between 1 and 3
        var x = sticks[i].x;
        var speed = round(random(0.5,3.5));

        if (x>375){
            speed = -(speed);
        }
        if (x<25){
            speed = +(speed);
        }

        x = x + speed;
        sticks[i].x = x;
    }


    //score display
    textSize(18);
    fill(255, 255, 255);
    text("Score: " + score, 20, 17); 


    if (keyIsPressed && keyCode === 0) {
        person.hop();
    } else {
        person.fall();
    }
    person.draw();
};

//making the start button work on click
mouseClicked = function() {
    start.handleMouseClick();
};

draw = function() {
    if(currentScene === 0){
        splash();
    } 
    if(currentScene === 1){
        drawScene2();
    }
};
