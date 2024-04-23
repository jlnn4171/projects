//variable to set the number of bitmojis
var numBitmojis = 50;  

// my drawBitmoji function
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


//three arrays: one for the X,Y, and Speed of the bitmojis
var X = [200,100];
var Y = [0,20];
var speed = [];

//for loop to fill the three arrays with random values
for (var i = 0; i < 100; i++) {
    X.push(round(random(10,390)));
    Y.push(round(random(10,390)));
    speed.push(round(random(3,5)));
}

var draw = function() 
{
    //background
    background(255, 255, 255);
   
    // for loop the bitmojis
    for (var i = 0; i < X.length; i++) {
        drawBitmoji(X[i]-40, Y[i]-40, 50, 50);
        
        //moves the bitmoji by moving x position
        X[i] += speed[i];
       
    //redraw the bitmoji on the left side
        if (X[i] > 400) 
        {X[i] = round(random(-5,10));}
    }
    
    //the circle of the tagger that follows the mouse
    noFill();
    stroke(0, 0, 0);
    ellipse(mouseX, mouseY, 20, 20);
};

 
//gets rid of bitmoji when clicked on
var mouseClicked = function()
{
  for (var i = 0; i < X.length; i++) {
      if (mouseX-20 < X[i] && mouseX+20 > X[i] && mouseY-20 < Y[i] && mouseY+20 > Y[i]) 
        {Y[i] = 500;}       
        }
};
