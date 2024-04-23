//bitmoji
var drawBitmoji = function (){
    
var drawMe = function (bitmojiX, bitmojiY, bodyHeight){
    
//hair
    fill(23, 14, 3);
    quad(bitmojiX+(bodyHeight/150*78),bitmojiY+(bodyHeight/150*51),bitmojiX+(bodyHeight/150*125),bitmojiY+(bodyHeight/150*51),bitmojiX+(bodyHeight/150*117),bitmojiY-(bodyHeight/150*1),bitmojiX+(bodyHeight/150*79),bitmojiY-(bodyHeight/150*2));

//torso
    //body
        noStroke();
        fill(250, 246, 237);
        rect(bitmojiX+(bodyHeight/150*65),bitmojiY+(bodyHeight/150*45),(bodyHeight/150*70),(bodyHeight/150*85));
    //arms
        stroke(250, 239, 237);
        strokeWeight(20);
        //right
            line(bitmojiX+(bodyHeight/150*70),bitmojiY+(bodyHeight/150*60),bitmojiX+(bodyHeight/150*56),bitmojiY+(bodyHeight/150*90));
            line(bitmojiX+(bodyHeight/150*69),bitmojiY+(bodyHeight/150*120),bitmojiX+(bodyHeight/150*56),bitmojiY+(bodyHeight/150*90));
        //left
            line(bitmojiX+(bodyHeight/150*130),bitmojiY+(bodyHeight/150*60),bitmojiX+(bodyHeight/150*150),bitmojiY+(bodyHeight/150*94));
            line(bitmojiX+(bodyHeight/150*126),bitmojiY+(bodyHeight/150*126),bitmojiX+(bodyHeight/150*150),bitmojiY+(bodyHeight/150*94));
    //hands
        //right
            noStroke();
            fill(255,231,178);
            ellipse(bitmojiX+(bodyHeight/150*77),bitmojiY+(bodyHeight/150*129),(bodyHeight/150*20),(bodyHeight/150*20));
        //left
            noStroke();
            fill(255,231,178);
            ellipse(bitmojiX+(bodyHeight/150*120),bitmojiY+(bodyHeight/150*133),(bodyHeight/150*20),(bodyHeight/150*20));
//hair
    fill(23, 14, 3);
    quad(bitmojiX+(bodyHeight/150*115),bitmojiY+(bodyHeight/150*77),bitmojiX+(bodyHeight/150*134),bitmojiY+(bodyHeight/150*84),bitmojiX+(bodyHeight/150*113),bitmojiY-(bodyHeight/150*1),bitmojiX+(bodyHeight/150*107),bitmojiY+(bodyHeight/150*3));
    quad(bitmojiX+(bodyHeight/150*92),bitmojiY+(bodyHeight/150*77),bitmojiX+(bodyHeight/150*73),bitmojiY+(bodyHeight/150*88),bitmojiX+(bodyHeight/150*83),bitmojiY-(bodyHeight/150*1),bitmojiX+(bodyHeight/150*87),bitmojiY+(bodyHeight/150*1));
//neck
    noStroke();
    fill(255,231,178);
    quad(bitmojiX+(bodyHeight/150*90),bitmojiY+(bodyHeight/150*50),bitmojiX+(bodyHeight/150*112),bitmojiY+(bodyHeight/150*50),bitmojiX+(bodyHeight/150*101),bitmojiY-(bodyHeight/150*1),bitmojiX+(bodyHeight/150*99),bitmojiY+(bodyHeight/150*1));
    triangle(bitmojiX+(bodyHeight/150*90), bitmojiY+(bodyHeight/150*49), bitmojiX+(bodyHeight/150*113), bitmojiY+(bodyHeight/150*48), bitmojiX+(bodyHeight/150*101), bitmojiY+(bodyHeight/150*60));
fill(217, 137, 169);
text("JN",bitmojiX+(bodyHeight/150*94),bitmojiY+(bodyHeight/150*86),(bodyHeight/150*20),(bodyHeight/150*20));
};
    var drawHead = function(bitmojiX, bitmojiY, headHeight){
    //head
    //shape
        noStroke();
        fill(255,231,178);
        ellipse(bitmojiX+(headHeight/150*100),bitmojiY+(headHeight/150*15),(headHeight/150*40),(headHeight/150*44));
    //eyes
    strokeWeight(1);
        //left
            noStroke();
            fill(255, 255, 255);
            ellipse(bitmojiX+(headHeight/150*107),bitmojiY+(headHeight/150*7),(headHeight/150*7),(headHeight/150*7));
            fill(138, 96, 41);
            ellipse(bitmojiX+(headHeight/150*108),bitmojiY+(headHeight/150*8),(headHeight/150*4),(headHeight/150*4));
            stroke(0, 0, 0);
            fill(0, 0, 0);
            ellipse(bitmojiX+(headHeight/150*108),bitmojiY+(headHeight/150*8),(headHeight/150*1.2),(headHeight/150*1.2));
        //right
            noStroke();
            fill(255, 255, 255);
            ellipse(bitmojiX+(headHeight/150*91),bitmojiY+(headHeight/150*8),(headHeight/150*7), (headHeight/150*7));
            fill(138, 96, 41);
            ellipse(bitmojiX+(headHeight/150*92),bitmojiY+(headHeight/150*9),(headHeight/150*4),(headHeight/150*4));
            stroke(0, 0, 0);
            fill(0, 0, 0);
            ellipse(bitmojiX+(headHeight/150*92),bitmojiY+(headHeight/150*9),(headHeight/150*1.2),(headHeight/150*1.2));
    //nose
        stroke(0, 0, 0);
        arc(bitmojiX+(headHeight/150*100), bitmojiY+(headHeight/150*19), (headHeight/150*4.8), (headHeight/150*3.2), -15, 143); 
        line(bitmojiX+(headHeight/150*99),bitmojiY+(headHeight/150*12),bitmojiX+(headHeight/150*103),bitmojiY+(headHeight/150*20));
        //necklace
            stroke(207, 201, 23);
            fill(207,201,23);
            arc(bitmojiX+(headHeight/150*99), bitmojiY+(headHeight/150*43), (headHeight/150*23.9), (headHeight/150*4.5), -15, 143);
    //mouth
    stroke(250, 136, 108);
    fill(250, 136, 108);
    arc(bitmojiX+(headHeight/150*100), bitmojiY+(headHeight/150*28), (headHeight/150*11.1), (headHeight/150*5.0), -15, 143);
    arc(bitmojiX+(headHeight/150*98), bitmojiY+(headHeight/150*29), (headHeight/150*5.0), (headHeight/150*4.5), 160, 360);
    arc(bitmojiX+(headHeight/150*103), bitmojiY+(headHeight/150*29), (headHeight/150*5.0), (headHeight/150*4.5), 160, 360);
//hair
    noStroke();
    fill(23, 14, 3);
    quad(bitmojiX+(headHeight/150*119),bitmojiY+(headHeight/150*66),bitmojiX+(headHeight/150*127),bitmojiY+(headHeight/150*47),bitmojiX+(headHeight/150*117),bitmojiY+(headHeight/150*1),bitmojiX+(headHeight/150*114),bitmojiY+(headHeight/150*3));
    quad(bitmojiX+(headHeight/150*85),bitmojiY+(headHeight/150*33),bitmojiX+(headHeight/150*79),bitmojiY+(headHeight/150*47),bitmojiX+(headHeight/150*80),bitmojiY+(headHeight/150*8),bitmojiX+(headHeight/150*82),bitmojiY+(headHeight/150*1));
//hat
    noStroke();
    fill(217, 137, 169);
    rect(bitmojiX+(headHeight/150*75), bitmojiY-(headHeight/150*8), (headHeight/150*48), (headHeight/150*11));
    quad(bitmojiX+(headHeight/150*78), bitmojiY-(headHeight/150*8), bitmojiX+(headHeight/150*118), bitmojiY-(headHeight/150*8), bitmojiX+(headHeight/150*111), bitmojiY-(headHeight/150*20), bitmojiX+(headHeight/150*93), bitmojiY-(headHeight/150*17));
    quad(bitmojiX+(headHeight/150*108), bitmojiY-(headHeight/150*13), bitmojiX+(headHeight/150*120), bitmojiY-(headHeight/150*13), bitmojiX+(headHeight/150*112), bitmojiY-(headHeight/150*21), bitmojiX+(headHeight/150*94), bitmojiY-(headHeight/150*17));
};

    drawMe (100,300,100);
    drawHead (100,300,100);
};

var badDay = function(){
    fill(252, 202, 226);
    ellipse(275,285, 165, 85);
    fill(3, 3, 3);
    text ("juliana says", 245, 275);
    text ("you had a rough day", 220, 295);
    fill(0, 0, 0);
    line(192,280, 160, 300);
    drawBitmoji();
};

var goodDay = function(){
    fill(252, 202, 226);
    ellipse(275,285, 165, 85);
    fill(3, 3, 3);
    text ("juliana says", 245, 275);
    text ("you had a good day", 220, 295);
    fill(0, 0, 0);
    line(192,280, 160, 300);
    drawBitmoji();
};

fill(0, 0, 0);
textSize(20);
text("today's routine",135,23);

textSize(15);
text("did you wake up early",125,50);
text("yes",150,70);
text("no",230,70);

mouseClicked = function(){
    if(mouseX > 150 && mouseX < 175 && mouseY > 60 && mouseY < 70){
        text("did you take a shower",130,100);
        text("yes",150,120);
        text("no",230,120);
    } 
    else if(mouseX > 230 && mouseX < 248 && mouseY > 60 && mouseY < 70){
    badDay();
    }
    else if(mouseX > 150 && mouseX < 175 && mouseY > 110 && mouseY < 120){
        text("did you take a nap",140,150);
        text("yes",150,170);
        text("no",230,170);
    }
    else if(mouseX > 230 && mouseX < 248 && mouseY > 110 && mouseY < 120){
        badDay();
    }
    else if(mouseX > 150 && mouseX < 175 && mouseY > 160 && mouseY < 170){
        text("did you do homework at the library",85,200);
        text("yes",150,220);
        text("no",230,220);
    }
    else if(mouseX > 230 && mouseX < 248 && mouseY > 160 && mouseY < 170){
        badDay();
    }
    else if(mouseX > 230 && mouseX < 248 && mouseY > 215 && mouseY < 220){
        badDay();
    }
    else if(mouseX > 150 && mouseX < 175 && mouseY > 215 && mouseY < 225){
        goodDay();
    }
};
