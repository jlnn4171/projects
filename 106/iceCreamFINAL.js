//nguyen bitmoji function
var drawNguyenBitmoji = function (x,y,h){
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

//beet bitmoji function
var drawBeetBitmoji = function(x, y, bitHeight){
noStroke();
fill(232, 202, 169); //skin neck
rect(x-17*bitHeight/150,y+45*bitHeight/150,bitHeight/150*32,bitHeight/150*47); //neck
fill(255,224,189); //skin
ellipse(x,y,bitHeight/150*83,bitHeight/150*100); //head
fill(255,255,255);
arc(x-44*bitHeight/150,y+50*bitHeight/150,bitHeight/150*36,bitHeight/150*68,bitHeight/150*4,bitHeight/150*360); //left chisel
arc(x+51*bitHeight/150,y+49*bitHeight/150,bitHeight/150*57,bitHeight/150*88,bitHeight/150*31,bitHeight/150*313); //right chisel
fill (0,0,0); //black shirt
rect(x-50*bitHeight/150,y+56*bitHeight/150,bitHeight/150*102,bitHeight/150*85); //shirt
fill(232,202,169); //neck 
ellipse(x-1*bitHeight/150,y+68*bitHeight/150,bitHeight/150*52,bitHeight/150*33); //neck shirt
fill(247, 238, 168); //blonde
quad(x-49 *bitHeight/150,y+16*bitHeight/150,x-37*bitHeight/150,y-41*bitHeight/150,x-8*bitHeight/150,y-52*bitHeight/150,x-38*bitHeight/150,y+2*bitHeight/150); //left hair
ellipse(x-42*bitHeight/150,y+9*bitHeight/150,bitHeight/150*16,bitHeight/150*23);
ellipse(x-43*bitHeight/150,y+28*bitHeight/150,bitHeight/150*16,bitHeight/150*23);
ellipse(x-42*bitHeight/150,y+47*bitHeight/150,bitHeight/150*16,bitHeight/150*23);
ellipse(x-42*bitHeight/150,y+68*bitHeight/150,bitHeight/150*16,bitHeight/150*23);
ellipse(x-42*bitHeight/150,y+89*bitHeight/150,bitHeight/150*16,bitHeight/150*23);

quad(x+43*bitHeight/150,y-9*bitHeight/150,x+40*bitHeight/150,y-36*bitHeight/150,x+10*bitHeight/150,y-52*bitHeight/150,x+46*bitHeight/150,y+29*bitHeight/150); //right hair
ellipse(x+40*bitHeight/150,y+9*bitHeight/150,bitHeight/150*16,bitHeight/150*23);
ellipse(x+40*bitHeight/150,y+28*bitHeight/150,bitHeight/150*16,bitHeight/150*23);
ellipse(x+40*bitHeight/150,y+47*bitHeight/150,bitHeight/150*16,bitHeight/150*23);
ellipse(x+40*bitHeight/150,y+68*bitHeight/150,bitHeight/150*16,bitHeight/150*23);
ellipse(x+40*bitHeight/150,y+89*bitHeight/150,bitHeight/150*16,bitHeight/150*23);
fill(0,0,0);
arc(x+2*bitHeight/150,y-35*bitHeight/150,bitHeight/150*79,bitHeight/150*-78,1,180); //hat
fill(247, 238, 168); //hat
rect(x-20*bitHeight/150,y-49*bitHeight/150,bitHeight/150*43,bitHeight/150*10); //hat
fill(0,0,0); //black eye
ellipse(x-16*bitHeight/150,y-18*bitHeight/150,bitHeight/150*17,bitHeight/150*14); //eye line left
ellipse(x+14*bitHeight/150,y-18*bitHeight/150,bitHeight/150*17,bitHeight/150*14); //eye line right
fill(255,255,255); //eye white
ellipse(x-16*bitHeight/150,y-15*bitHeight/150,bitHeight/150*18,bitHeight/150*13); //left eye white
fill(83,144,214);//blue eye 
ellipse(x-15*bitHeight/150,y-15*bitHeight/150,bitHeight/150*7,bitHeight/150*8); //left eye pupil
fill(255,255,255); //eye white
ellipse(x+14*bitHeight/150,y-15*bitHeight/150,bitHeight/150*18,bitHeight/150*13); //right eye white
fill(83, 144, 214);//blue eye 
ellipse(x+14*bitHeight/150,y-15*bitHeight/150,bitHeight/150*7,bitHeight/150*8); //right eye pupil
fill(245, 204, 159); //nose fill
rect(x-4*bitHeight/150,y-11*bitHeight/150,bitHeight/150*5,bitHeight/150*18); //nose
ellipse(x-1*bitHeight/150,y+9*bitHeight/150,bitHeight/150*14,bitHeight/150*10); //nose
fill(240, 29, 29); //lip
arc(x-2*bitHeight/150,y+20*bitHeight/150,bitHeight/150*34,bitHeight/150*29,-13,196); //lip
fill(255,255,255); //teeth
arc(x-2*bitHeight/150,y+22*bitHeight/150,bitHeight/150*28,bitHeight/150*15,-22,209); //teeth
};

//ice cream functions
var vanic = function(x,y,h){
    noStroke();
    fill(224, 174, 98);
    triangle(x+(h/150*65),y+(h/150*115),x+(h/150*135),y+(h/150*115),x+(h/150*101),y+(h/150*208));
    fill(230, 221, 193);
    ellipse(x+(h/150*100),y+(h/150*93),(h/150*85),(h/150*65));
    ellipse(x+(h/150*60),y+(h/150*110),(h/150*40),(h/150*30));
    ellipse(x+(h/150*85),y+(h/150*125),(h/150*40),(h/150*30));
    ellipse(x+(h/150*122),y+(h/150*125),(h/150*40),(h/150*30));
    ellipse(x+(h/150*141),y+(h/150*110),(h/150*40),(h/150*30));
};

var strawbic = function(x,y,h){
    noStroke();
    fill(224, 174, 98);
    triangle(x+(h/150*65),y+(h/150*115),x+(h/150*135),y+(h/150*115),x+(h/150*101),y+(h/150*208));
    fill(235, 181, 231);
    ellipse(x+(h/150*100),y+(h/150*93),(h/150*85),(h/150*65));
    ellipse(x+(h/150*60),y+(h/150*110),(h/150*40),(h/150*30));
    ellipse(x+(h/150*85),y+(h/150*125),(h/150*40),(h/150*30));
    ellipse(x+(h/150*122),y+(h/150*125),(h/150*40),(h/150*30));
    ellipse(x+(h/150*141),y+(h/150*110),(h/150*40),(h/150*30));
};

var chocoic = function(x,y,h){
    noStroke();
    fill(224, 174, 98);
    triangle(x+(h/150*65),y+(h/150*115),x+(h/150*135),y+(h/150*115),x+(h/150*101),y+(h/150*208));
    fill(140, 109, 61);
    ellipse(x+(h/150*100),y+(h/150*93),(h/150*85),(h/150*65));
    ellipse(x+(h/150*60),y+(h/150*110),(h/150*40),(h/150*30));
    ellipse(x+(h/150*85),y+(h/150*125),(h/150*40),(h/150*30));
    ellipse(x+(h/150*122),y+(h/150*125),(h/150*40),(h/150*30));
    ellipse(x+(h/150*141),y+(h/150*110),(h/150*40),(h/150*30));
};

var flavors = 0; //3 is choc, 2 is strawb, 1 is vanilla

//vehicle functions
var ictruck = function(x,y,h){
    noStroke();
    fill(206, 222, 221);
    rect(x-(h/150*10),y+(h/150*50),(h/150*70),(h/150*55));
    triangle(x+(h/150*60),y+(h/150*55),x+(h/150*55),y+(h/150*105),x+(h/150*78),y+(h/150*104));
    rect(x+(h/150*65),y+(h/150*81),(h/150*15),(h/150*23));
    //wheels
    fill(59, 58, 71);
    ellipse(x+(h/150*10),y+(h/150*100),(h/150*25),(h/150*25));
    ellipse(x+(h/150*60),y+(h/150*100),(h/150*25),(h/150*25));
    //truck window
    fill(255, 255, 255);
    rect(x+(h/150*40),y+(h/150*55),(h/150*10),(h/150*20));
    triangle(x+(h/150*55),y+(h/150*55),x+(h/150*55),y+(h/150*75),x+(h/150*65),y+(h/150*75));
    //ice cream
    strawbic(x+(h/150*1),y+(h/150*45),(h/150*30));
}; // ice cream truck draw function
var car = function(x,y,h){
    noStroke();
    fill(222, 206, 206);
    ellipse(x-(h/150*-36),y+(h/150*76),(h/150*73),(h/150*48));
    rect(x+(h/150*-9),y+(h/150*75),(h/150*87),(h/150*23));
    //wheels
    fill(59, 58, 71);
    ellipse(x+(h/150*15),y+(h/150*95),(h/150*17),(h/150*17));
    ellipse(x+(h/150*60),y+(h/150*95),(h/150*17),(h/150*17));
    //truck window
    fill(255, 255, 255);
    rect(x+(h/150*38),y+(h/150*57),(h/150*12),(h/150*18));
    rect(x+(h/150*20),y+(h/150*57),(h/150*12),(h/150*18));
    triangle(x+(h/150*55),y+(h/150*57),x+(h/150*55),y+(h/150*75),x+(h/150*65),y+(h/150*75));
    triangle(x+(h/150*17),y+(h/150*57),x+(h/150*3),y+(h/150*75),x+(h/150*17),y+(h/150*75));

}; // car function

//cloud config
var Cloud = function(x, y) {
    this.x = x;
    this.y = y;
};

Cloud.prototype.draw = function() { //cloud prototype function
    stroke(230, 101, 200);
    fill(254, 242, 255);
    ellipse(this.x+69, this.y-1, 40, 37);
    ellipse(this.x+25.5, this.y-1.5, 38, 40);
    ellipse(this.x+8.5, this.y+3.5, 25, 27);
    ellipse(this.x+83.5, this.y+1.5, 25.5, 27);
    ellipse(this.x+50, this.y-9.5, 51.5, 52.5);
    noStroke();
    fill(254, 242, 255);
    ellipse(this.x+25, this.y-1.5, 32.5, 37.5);
    ellipse(this.x+82.5, this.y+0.5, 25, 25);
    ellipse(this.x+50, this.y-9.5, 50, 50);
    ellipse(this.x+68, this.y-1, 34, 36);
};

var clouds = []; //array declaring clouds
for (var i = 0; i < 3000; i++) {  
    clouds.push(new Cloud(i * 40 + 300, random(20, 260)));
} //clouds continue off screen

//moving grass loop
var grassXs = []; //array declaring grass
for (var i = 0; i < 250; i++) { 
    grassXs.push(i*20);
} //grass moves on screen

// font function
var s = createFont("sans-serif"); 
var f = createFont("cursive");

var currentScene = 0;

//button function class
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

//drawing the start button
var start = new Button({
    x: 165,
    y: 340,
    width: 65,
    height: 48,
    label: "start",
    color: color(255, 255, 255),
    onClick: function() {
        currentScene = 1;
    }
});

//drawing the next buttons that change the scenes
var next1 = new Button({
    x: 330,
    y: 355,
    width: 65,
    height: 35,
    label: "next",
    color: color(255, 255, 255),
    onClick: function() {
        currentScene = 2;
    }
});
var next2 = new Button({
    x: 330,
    y: 355,
    width: 65,
    height: 35,
    label: "next",
    color: color(255, 255, 255),
    onClick: function() {
        currentScene = 3;
    }
});
var next3 = new Button({
    x: 330,
    y: 355,
    width: 65,
    height: 35,
    label: "next",
    color: color(255, 255, 255),
    onClick: function() {
        currentScene = 4;
    }
});
var next4 = new Button({
    x: 330,
    y: 355,
    width: 65,
    height: 35,
    label: "next",
    color: color(255, 255, 255),
    onClick: function() {
        currentScene = 5;
    }
});
var next5 = new Button({
    x: 330,
    y: 355,
    width: 65,
    height: 35,
    label: "next",
    color: color(255, 255, 255),
    onClick: function() {
        currentScene = 6;
    }
});
var next6 = new Button({
    x: 330,
    y: 355,
    width: 65,
    height: 35,
    label: "next",
    color: color(255, 255, 255),
    onClick: function() {
        currentScene = 7;
    }
});
var next7 = new Button({
    x: 330,
    y: 355,
    width: 65,
    height: 35,
    label: "next",
    color: color(255, 255, 255),
    onClick: function() {
        currentScene = 8;
    }
});

var next8 = new Button({
    x: 330,
    y: 355,
    width: 65,
    height: 35,
    label: "next",
    color: color(255, 255, 255),
    onClick: function() {
        currentScene = 9;
    }
});
var next9 = new Button({
    x: 330,
    y: 355,
    width: 65,
    height: 35,
    label: "next",
    color: color(255, 255, 255),
    onClick: function() {
        currentScene = 10;
    }
});
var next10 = new Button({
    x: 330,
    y: 355,
    width: 65,
    height: 35,
    label: "next",
    color: color(255, 255, 255),
    onClick: function() {
        currentScene = 11;
    }
});
var next11 = new Button({
    x: 330,
    y: 355,
    width: 65,
    height: 35,
    label: "next",
    color: color(255, 255, 255),
    onClick: function() {
        currentScene = 12;
    }
});
var next12 = new Button({
    x: 330,
    y: 355,
    width: 65,
    height: 35,
    label: "next",
    color: color(255, 255, 255),
    onClick: function() {
        currentScene = 13;
    }
});
var next13 = new Button({
    x: 330,
    y: 355,
    width: 65,
    height: 35,
    label: "next",
    color: color(255, 255, 255),
    onClick: function() {
        currentScene = 14;
    }
});
var next14 = new Button({
    x: 330,
    y: 355,
    width: 65,
    height: 35,
    label: "next",
    color: color(255, 255, 255),
    onClick: function() {
        currentScene = 15;
    }
});
var next15 = new Button({
    x: 330,
    y: 355,
    width: 65,
    height: 35,
    label: "next",
    color: color(255, 255, 255),
    onClick: function() {
        currentScene = 16;
    }
});
//declare finish button
var finish = new Button({
    x: 330,
    y: 355,
    width: 65,
    height: 35,
    label: "Finish",
    color: color(255, 255, 255),
    onClick: function() {
        currentScene = 17;
    }
});
//declare a home button that brings back to the splash screen
var home = new Button({
    x: 330,
    y: 355,
    width: 65,
    height: 35,
    label: "Home",
    color: color(255, 255, 255),
    onClick: function() {
        currentScene = 0;
    }
});

//ice cream buttons for the labels to make the flavor choice 
var strawb = new Button({
    x: 146,
    y: 300,
    width: 110,
    height: 35,
    label: "strawberry",
    color: color(255, 255, 255),
    onClick: function() {
        flavors = 2; //this controls which flavor is picked to move to the next scene
    } 
});
var vanilla = new Button({
    x: 31,
    y: 299,
    width: 72,
    height: 35,
    label: "vanilla",
    color: color(255, 255, 255),
    onClick: function() {
        flavors = 1; //this controls which flavor is picked to move to the next scene
        //currentScene = 14;
    } 
});
var choc = new Button({
    x: 283,
    y: 299,
    width: 105,
    height: 35,
    label: "chocolate",
    color: color(255, 255, 255),
    onClick: function() {
        flavors = 3; //this controls which flavor is picked to move to the next scene
        //currentScene = 14;
    } 
});

//toppings buttons drawings
var chocSyrup = new Button({
    x: 300,
    y: 80,
    label: "chocolate",
    color: color(56, 40, 21),
    onClick: function(){
        fill(56, 40, 21);
    }
});
var whippedC = new Button({

    x: 300,
    y: 140,
    label: "whip cream",
    color: color(252, 238, 226),
    onClick: function(){
        fill(252, 238, 226);
    }
});

var caramel = new Button({
    x: 300,
    y: 20,
    label: "caramel",
    color: color(240, 156, 67),
    onClick: function(){
        fill(240, 156, 67);
    }
});

var sprinkles = new Button({
    x: 300,
    y: 217,
    label: "sprinkles",
    color: color(192, 25, 207),
    onClick: function(){
        fill(mouseX/2, mouseY/2, (mouseX + mouseY)/4);
        rect(mouseX, mouseY, 9, 20);
    }
});


var syrupBtns = function(){
caramel.draw();
chocSyrup.draw();
whippedC.draw();
sprinkles.draw();
};

// ---------- story scene draw functions-------------

//opening screen
var splash = function(){
    currentScene = 0;
    background(188, 211, 224);
    fill(255, 255, 255);
    textFont(f);
    textSize(45);
    text("All For Ice Cream", 15, 40);
    drawNguyenBitmoji(5, 155, 100);
    drawBeetBitmoji(326, 176, 85);
    noStroke();
    fill(228, 220, 237);
    rect(0,320,400,80);
    start.draw();
    textFont(s);
    textSize(15);
    text("By Juliana Nguyen & Giuliana Beet", 85, 105);
    vanic(120,155,60);
    strawbic(165,125,60);
    chocoic(210,155,60);

};

//story screen 1
var drawScene2 = function(){
    currentScene = 1;

    background(178, 151, 184);

    //wall dimension
    stroke(141, 110, 150);
    line(70,0,70,280);
    line(320,0,320,280);
    //windows
    noStroke();

    fill(197, 225, 235);
    rect(85,60,220,140);

    fill(248, 255, 120);
    ellipse(275, 90, 50, 50);

    //verticals lines
    for (var i = 0; i < 3; i++){
    noStroke();
    fill(255, 255, 255);
    rect(84+(i*109), 63, 4, 141);
    }
    //horizontal lines
    for (var i = 0; i < 3; i++){
    noStroke();
    fill(255, 255, 255);
    rect(84, 60+(i*70), 222, 4);
    }
    //floor 
    fill(171, 152, 115);
    quad(0, 400, 70, 280, 320, 280, 400, 400);

    noStroke();
    fill(228, 220, 237);
    rect(0,345,400,55);

    drawNguyenBitmoji(45, 202, 100);
    drawBeetBitmoji(290, 226, 85);

    textSize(15);
    fill(0, 0, 0);
    text("it was a sunny afternoon and 2 girls were bored", 5, 365);

    next1.draw();
};

//story screen 1.1
var drawScene3 = function(){
    currentScene = 2;

    background(178, 151, 184);

    //wall dimension
    stroke(141, 110, 150);
    line(70,0,70,280);
    line(320,0,320,280);

    //windows
    noStroke();

    fill(153, 230, 255);
    rect(85,60,220,140);

    fill(248, 255, 120);
    ellipse(275, 90, 50, 50);

    //verticals lines
    for (var i = 0; i < 3; i++){
    noStroke();
    fill(255, 255, 255);
    rect(84+(i*109), 63, 4, 141);
    }
    //horizontal lines
    for (var i = 0; i < 3; i++){
    noStroke();
    fill(255, 255, 255);
    rect(84, 60+(i*70), 222, 4);
    }
    //floor 
    fill(171, 152, 115);
    quad(0, 400, 70, 280, 320, 280, 400, 400);

    noStroke();
    fill(228, 220, 237);
    rect(0,345,400,55);

    ictruck(100,100,130);

    drawNguyenBitmoji(45, 202, 100);
    drawBeetBitmoji(290, 226, 85);

    textSize(15);
    fill(0, 0, 0);
    text("They stared out the window and saw an ice", 5, 365);
    text("cream truck drive by.", 5, 385);

    next2.draw();
};

//story screen 2 
var drawScene4 = function(){
    currentScene = 3;
    background(204, 243, 255);
    noStroke();
    fill(52, 128, 45);
    rect(0,270,400,150);

    //house
    fill(214, 199, 122);
    rect(80,126,250,150);
    fill(189, 175, 106);
    triangle(200,10,350,130,50,130);

    //windows
    fill(207, 255, 255);
    rect(101,148,129,110);
    //verticals lines
    for (var i = 0; i < 6; i++){
    noStroke();
    fill(255, 255, 255);
    rect(100+(i*25.5), 148, 3, 110);
    }
    //horizontal lines
    for (var i = 0; i < 6; i++){
    noStroke();
    fill(255, 255, 255);
    rect(100, 147+(i*22), 130, 3);
    }
    fill(214, 199, 122);
    rect(97,194,136,19);
    rect(154,138,22,136);

    //door
    fill(191, 76, 76);
    rect(258, 192, 55, 85);
    fill(245, 228, 37);
    ellipse(300,240,10,10);

    drawNguyenBitmoji(45, 202, 100);
    drawBeetBitmoji(250, 226, 85);

    noStroke();
    fill(228, 220, 237);
    rect(0,345,400,55);
    textSize(15);
    fill(0, 0, 0);
    text("when they got outside the truck was already", 5, 365);
    text("very far away", 5, 385);

    next3.draw();
};

//story screen 3 
var drawScene5 = function(){
    currentScene = 4;

    background(204, 243, 255);
    var cloud = function(x,y,h) { //cloud function to be drawn for background
    stroke(230, 101, 200);
    fill(254, 242, 255);
    ellipse(x+(h/150*136), y-(h/150*2), (h/150*68), (h/150*72));
    ellipse(x+(h/150*51), y-(h/150*3), (h/150*76), (h/150*80));
    ellipse(x+(h/150*17), y+(h/150*7), (h/150*50), (h/150*54));
    ellipse(x+(h/150*167), y+(h/150*3), (h/150*51), (h/150*54));
    ellipse(x+(h/150*100), y-(h/150*19), (h/150*103), (h/150*105));
    noStroke();
    fill(254, 242, 255);
    ellipse(x+(h/150*135), y-(h/150*2), (h/150*68), (h/150*70));
    ellipse(x+(h/150*50), y-(h/150*3), (h/150*65), (h/150*75));
    ellipse(x+(h/150*20), y+(h/150*5), (h/150*50), (h/150*50));
    ellipse(x+(h/150*165), y+(h/150*1), (h/150*50), (h/150*50));
    ellipse(x+(h/150*100), y-(h/150*19), (h/150*100), (h/150*100));
    };

    // static
    background(153, 230, 255);
    fill(130, 79, 43);
    rect(0, height*0.74, width, height*0.18);

    noStroke();
    fill(228, 220, 237);
    rect(0,345,400,55);
    textSize(15);
    fill(0, 0, 0);
    text("the girls decided to hit the road and chase", 5, 365);
    text(" the truck", 5, 385);

    for (var i = 0; i < grassXs.length; i++) { //moves grass
        image(getImage("cute/GrassBlock"), grassXs[i], height*0.71, 20, 20);
        grassXs[i] -= 1;
        if (grassXs[i] <= -20) {
            grassXs[i] = width;
        }
    }

    for (var i = 0; i < clouds.length; i++) { //moves clouds
        clouds[i].draw();
        clouds[i].x -= 3;
    }

    car(25,175,215); //car declaration
    next4.draw(); 

};

//story screen 3.1 
var drawScene6 = function(){
    currentScene = 5;

    var Wind = function(x, y) { //wind 
    this.x = x;
    this.y = y;
    };
    Wind.prototype.draw = function() {
    noStroke();
    fill(209, 202, 227);
    rect(this.x, this.y, 30, 2);
    };
    var wind = [];
    for (var i = 0; i < 2000; i++) {  //moves wind
    wind.push(new Wind(i * 50 + 268, random(10, 300)));
    }

    // static
    background(204, 243, 255);
    fill(130, 79, 43);
    rect(0, height*0.74, width, height*0.18);

    noStroke();
    fill(228, 220, 237);
    rect(0,345,400,55);
    textSize(15);
    fill(0, 0, 0);
    text("They drove through wind,", 5, 365);

    for (var i = 0; i < grassXs.length; i++) { //moves grass
    image(getImage("cute/GrassBlock"), grassXs[i], height*0.71, 20, 20);
    grassXs[i] -= 5;
    if (grassXs[i] <= -20) {
        grassXs[i] = width;
    }
    }

    for (var i = 0; i < clouds.length; i++) { //moves clouds
    clouds[i].draw();
    clouds[i].x -= 3;
    }

    car(25,175,215); //car declation

    for (var i = 0; i < wind.length; i++) {
    wind[i].draw();
    wind[i].x -= 10;
    }

    next5.draw();
};

//story screen 3.2
var drawScene7 = function(){
    currentScene = 6;

    var xPositions = [200,100]; 
    var yPositions = [0,20];
    var dropColor = [];
    var dropSpeed = [];

    for (var i = 0; i < 100; i++){ //for the snow movement
    xPositions.push(round(random(10,390)));
    yPositions.push(round(random(10,390)));
    dropColor.push(color(255, 255, 255));
    dropSpeed.push(round(random(1,5)));
    }

    background(125, 141, 181);

    // static
    background(125, 141, 181);
    fill(130, 79, 43);
    rect(0, height*0.74, width, height*0.18);

    for (var i = 0; i < grassXs.length; i++) { //grass movement
    image(getImage("cute/GrassBlock"), grassXs[i], height*0.71, 20, 20);
    grassXs[i] -= 5;
    if (grassXs[i] <= -20) {
        grassXs[i] = width;
    }
    }

    for (var i = 0; i < clouds.length; i++) { //cloud movement
    clouds[i].draw();
    clouds[i].x -= 3;
    }

    car(25,175,215);

    for (var i = 0; i < xPositions.length; i++) { //snow movement
    noStroke();
    fill(dropColor[i]);
    ellipse(xPositions[i], yPositions[i], 10, 10);
    yPositions[i] += dropSpeed[i];

    if (mouseY-10 < yPositions[i] && mouseY+10 > yPositions[i] && mouseX-10             < xPositions[i] && mouseX+10 > xPositions[i]) 
    {dropColor[i] = color(0,0,0);}

    if (yPositions[i] > 400) 
    {yPositions[i] = round(random(-5,10));}
    }

    noStroke();
    fill(228, 220, 237);
    rect(0,345,400,55);
    textSize(15);
    fill(0, 0, 0);
    text("snow,", 5, 365);    

    next6.draw();
};

//story screen 3.3
var drawScene8 = function(){
    currentScene = 7;

    var Rain = function(x, y) { //rain function
    this.x = x;
    this.y = y;
    };
    Rain.prototype.draw = function() {
    noStroke();
    fill(18, 98, 168);
    rect(this.x, this.y, 5, 40);
    };
    var rain = [];
    for (var i = 0; i < 3000; i++) {  //rain movement
    rain.push(new Rain(random(10, 390), i * -55 + 349));
    }


    // static
    background(125, 141, 181);
    fill(130, 79, 43);
    rect(0, height*0.74, width, height*0.18);

    for (var i = 0; i < grassXs.length; i++) { //grass movement
    image(getImage("cute/GrassBlock"), grassXs[i], height*0.71, 20, 20);
    grassXs[i] -= 5;
    if (grassXs[i] <= -20) {
        grassXs[i] = width;
    }
    }

    for (var i = 0; i < clouds.length; i++) { //cloud movement
    clouds[i].draw();
    clouds[i].x -= 3;
    }

    car(25,175,215); //car declaration

    for (var i = 0; i < rain.length; i++) { //rain loop
    rain[i].draw();
    rain[i].y -= -5;
    }


    noStroke();
    fill(228, 220, 237);
    rect(0,345,400,55);
    textSize(15);
    fill(0, 0, 0);
    text("and rain.", 5, 365);

    next7.draw();
};

//story screen 4
var drawScene9 = function(){
    currentScene = 8;

    // static
    background(204, 243, 255);

    noStroke();
    fill(128, 128, 128);
    rect(0,190,400,150);

    for (var i = 0; i < 7; i++){
    fill(255, 237, 43);
    rect(8+(i*60), 250, 23, 10);}

    noStroke();
    fill(228, 220, 237);
    rect(0,345,400,55);
    textSize(15);
    fill(0, 0, 0);
    text("They finally caught up to the ice cream truck.", 5, 365);

    for (var i = 0; i < grassXs.length; i++) {
    image(getImage("cute/GrassBlock"), grassXs[i], height*0.82, 20, 20);
    image(getImage("cute/GrassBlock"), grassXs[i], height*0.32, 20, 65);

    }

    ictruck(183,-75,395);
    car(25,175,215);

    next8.draw();
};

//story screen 4.1
var drawScene10 = function(){
    currentScene = 9;
    for (var i = 0; i < 25; i++) { 
    grassXs.push(i*20);
    }
    background(204, 243, 255);

    noStroke();
    fill(128, 128, 128);
    rect(0,190,400,177);

    for (var i = 0; i < 7; i++){
    fill(255, 237, 43);
    rect(8+(i*89), 339, 48, 15);}

    noStroke();
    fill(228, 220, 237);
    rect(0,345,400,55);
    textSize(15);
    fill(0, 0, 0);
    text("However, they don't know what to choose.", 5, 365);
    text("Will you help?", 5, 390);

    for (var i = 0; i < grassXs.length; i++) {
    image(getImage("cute/GrassBlock"), grassXs[i], height*0.32, 20, 65);

    }

    ictruck(156,-91,491);

    fill(242, 252, 255);
    rect(154,92,106,80);
    fill(33, 65, 82);
    rect(154,92,106,10);

    //ice cream man
    noFill();
    stroke(77, 44, 26);
    strokeWeight(4);
    ellipse(190,126,40,40);
    line(190,145,190,171);
    line(189,160,171,170);
    line(181,186,171,170);
    line(189,160,214,160);
    line(226,138,214,160);

    //word bubble
    strokeWeight(1);
    fill(255, 255, 255);
    triangle(268,114,250,102,219,117);
    ellipse(306,75,150,100);
    fill(0, 0, 0);
    text("What kind of", 262, 62);
    text("ice cream can I get", 246, 82);
    text("you?", 294, 102);

    drawBeetBitmoji(100,183,90);
    drawNguyenBitmoji(-30,195,110);

    next9.draw();
};

var drawScene11 = function(){
    currentScene = 10;
    background(87, 52, 52);
    next10.draw();
};
var drawScene12 = function(){
    currentScene = 11;
    background(255, 0, 0);
    next11.draw();
};
var drawScene13 = function(){
    currentScene = 12;
    next12.draw();
};
var drawScene14 = function(){
    currentScene = 13;
    background(255, 0, 0);
    next13.draw();
};
//ice cream scene
var drawScene15 = function(){
    currentScene = 14;
    background(188, 211, 224);
    textSize(25);
    fill(255, 255, 255);
    text("Choose a flavor!", 100, 20);

    vanic(-20,120,120); //vanilla cone declaration and placement
    strawbic(110,120,120); //strawberry cone declaration and placement
    chocoic(240,120,120); //chocolate cone declaration and placement

    //ice cream choices buttons
    strawb.draw();
    choc.draw();
    vanilla.draw();
    if (flavors > 0) { //if a flavor is chosen, the next button pops up 
    next15.draw();
    }


    //ice cream choices buttons
    strawb.draw();
    choc.draw();
    vanilla.draw();
    if (flavors > 0) { //if a flavor is chosen, the next button pops up 
    next15.draw();
    }
};
var drawScene16 = function(){
    currentScene = 15;
    background(188, 211, 224);
    noStroke();
    fill(228, 220, 237);
    rect(0,342,400,40);
    textSize(15);
    fill(0, 0, 0);
    text("Click your mouse to add sprinkles!", 5, 354);


    if (flavors === 1) { //if vanilla cone was chosen in the last scene
        vanic(-50,-130,338); //draw vanilla

    }
    if (flavors === 2){ //if strawberry cone was chosen in the last scene
        strawbic(-50,-130,338); //draw strawberry
    
    }
    if (flavors === 3){ //if chocolate cone was chosen in the last scene
        chocoic(-50,-130,338); //draw chocolate
    
    }

    draw = function() { //draw function that creates sprinkles on click
        if (mouseIsPressed){
            noStroke();
            fill(random(0,255), random(0,255), random(0,255));
            rect(mouseX, mouseY, 7, 7);
        }
    };

    finish.draw(); //finish drwaw button
};

var drawScene17 = function(){
    drawScene16(); //displays cone how it was decorated
    home.draw(); //take you back to home 
};

// ------- finsihed scenes --------------

//making the start button work on click
mouseClicked = function() {
    start.handleMouseClick();
    next1.handleMouseClick();
    next2.handleMouseClick();
    next3.handleMouseClick();
    next4.handleMouseClick();
    next5.handleMouseClick();
    next6.handleMouseClick();
    next7.handleMouseClick();
    next8.handleMouseClick();
    next9.handleMouseClick();
    next10.handleMouseClick();
    next11.handleMouseClick();
    next12.handleMouseClick();
    next13.handleMouseClick();
    next14.handleMouseClick();
    next15.handleMouseClick();
    finish.handleMouseClick();
    strawb.handleMouseClick();
    choc.handleMouseClick();
    vanilla.handleMouseClick();
};

//mpuse clicked function to make sure buttons only work on specific scenes
mouseClicked = function() {
    if(currentScene === 0 ){
        start.handleMouseClick();
    }
    else if (currentScene === 1 ){
        next1.handleMouseClick();
    }
    else if (currentScene === 2) {
        next2.handleMouseClick();
    }
    else if (currentScene === 3) {
        next3.handleMouseClick();
    }
    else if (currentScene === 4) {
        next4.handleMouseClick();
    }
    else if (currentScene === 5) {
        next5.handleMouseClick();
    }
    else if (currentScene === 6) {
        next6.handleMouseClick();
    }
    else if (currentScene === 7) {
        next7.handleMouseClick();
    }
    else if (currentScene === 8) {
        next8.handleMouseClick();
    }
    else if (currentScene === 9) {
        next9.handleMouseClick();
    }
    else if (currentScene === 10) {
        next10.handleMouseClick();
    }
    else if (currentScene === 11) {
        next11.handleMouseClick();
    }
    else if (currentScene === 12) {
        next12.handleMouseClick();
    }
    else if (currentScene === 13) {
        next13.handleMouseClick();
    }
    else if (currentScene === 14) {
        next14.handleMouseClick();
        choc.handleMouseClick();
        vanilla.handleMouseClick();
        strawb.handleMouseClick();
    }
    else if (currentScene === 15) {
        next15.handleMouseClick();
    }
    else if (currentScene === 16) {
        finish.handleMouseClick();
    }
    else if (currentScene === 17) {
        home.handleMouseClick();
    }

};

//draws the different scenes depending on the current scene 
draw = function() {
    if(currentScene === 0){
        splash();
    } 
    if(currentScene === 1){
        drawScene2();
    }
    if(currentScene === 2){
        drawScene3();
    }
    if(currentScene === 3){
        drawScene4();
    }
    if(currentScene === 4){
        drawScene5();
    }
    if(currentScene === 5){
        drawScene6();
    }
    if(currentScene === 6){
        drawScene7();
    }
    if(currentScene === 7){
        drawScene8();
    }
    if(currentScene === 8){
        drawScene9();
    }
    if(currentScene === 9){
        drawScene15();
    }
    if(currentScene === 14){
        drawScene15();
    }
    if(currentScene === 11){
        drawScene14();
    }
    if(currentScene === 12){
        drawScene14();
    }if(currentScene === 14){
        drawScene15();
    }
    if(currentScene === 15){
        drawScene16();
    }
    if(currentScene === 16){
        splash();
    }

};

