//bitmoji code
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

// my contacts
var contactBook = [
    //athena
    {
        firstName: "Athena",
        lastName: "Weisenburg",
        numba: "401-652-4654",
        insta: "@ateni",
        stars: 4
    },
    //dad
    {
        firstName: "Anh",
        lastName: "Nguyen",
        numba: "401-662-5432",
        insta: "@anhD",
        stars: 1
    },
    //frankie
    {
        firstName: "Frankie",
        lastName: "Colizza",
        numba: "401-465-0236",
        insta: "@frank",
        stars: 3
    },
    //hoami
    {
        firstName: "Hoaimi",
        lastName: "Tran",
        numba: "401-036-8742",
        insta: "@traumamia",
        stars: 4
    },
    //jayden
    {
        firstName: "jayden",
        lastName: "nguyen",
        numba: "401-026-9820",
        insta: "@snorlaxx",
        stars: 1
    },
    //jenna
    {
        firstName: "Jenna",
        lastName: "Andrade",
        numba: "401-710-3089",
        insta: "@battleship",
        stars: 2
    },
    //joon
    {
        firstName: "Namjoon",
        lastName: "Kim",
        numba: "401-028-3579",
        insta: "@rm_bts",
        stars: 1
    },
    //linh linh
    {
        firstName: "Lanhiana",
        lastName: "Nguyen",
        numba: "401-036-9614",
        insta: "@lanhi_n",
        stars: 3
    },
    //mom
    {
        firstName: "Lan",
        lastName: "Nguyen",
        numba: "401-341-8750",
        insta: "@lanH",
        stars: 5
    },
    //nikki
    {
        firstName: "Nikki",
        lastName: "Bubencik",
        numba: "401-743-0236",
        insta: "@buben",
        stars: 5
    }
];

var contactDisplay = function(i){
    noStroke();
    fill(176, 134, 204);
    rect(0, 300, 400, 100);
    fill(5, 5, 5);
    
    text(contactBook[i].firstName, 40, 345);
    text(contactBook[i].lastName, 109, 345);
    text(contactBook[i].numba, 210, 345);
    text(contactBook[i].insta, 310, 345);
    
    for(var j = 0; j < contactBook[i].stars; j++){
        text("how often i contact them:", 100, 370);
        image(getImage("cute/Star"), 195 + j * 25, 347, 30, 30);
    }
};

//contact display screen
var displayScreen = function(){
    background(237, 206, 234);
    fill(10, 10, 10);
    textAlign(CENTER);
    textSize(15);
    for(var k = 0; k < contactBook.length; k++){
        text(contactBook[k].firstName, 200, 76 + k * 18);
    }

    //purple box at the bottom
    noStroke();
    fill(176, 134, 204);
    rect(0, 300, 400, 100);

    //my profile corner
    drawBitmoji(275, 30, 100);
    fill(0, 0, 0);
    text("Juliana's Contacts", 336, 145);
    noFill();
    stroke(0, 0, 0);
    rect(270,0, 128,155);
};


displayScreen();
var mouseClicked = function(){
    //athena
    if(mouseY < 75 && mouseY > 60){
        contactDisplay(0);
    }
    //dad
    if(mouseY < 95 && mouseY > 80){
        contactDisplay(1);
    }
    //frankie
    if(mouseY < 115 && mouseY > 100){
        contactDisplay(2);
    }
    //hoami
    if(mouseY < 135 && mouseY > 120){
        contactDisplay(3);
    }
    //jayden
    if(mouseY < 150 && mouseY > 135){
        contactDisplay(4);
    }
    //jenna
    if(mouseY < 167 && mouseY > 155){
        contactDisplay(5);
    }
    //joon
    if(mouseY < 185 && mouseY > 170){
        contactDisplay(6);
    }
    //linh linh
    if(mouseY < 203 && mouseY > 195){
        contactDisplay(7);
    }
    //mom
    if(mouseY < 220 && mouseY > 205){
        contactDisplay(8);
    }
    //nikki
    if(mouseY < 240 && mouseY > 225){
        contactDisplay(9);
    }
};

