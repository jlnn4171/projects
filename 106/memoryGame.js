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

var currentScene = 0;

//button function
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
    x: 145,
    y: 150,
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
    background(213, 186, 222);
    fill(54, 54, 54);
    textSize(50);
    text("Memory Game", 42, 40);
    drawNguyenBitmoji(5, 255, 100);
    start.draw();
    textSize(15);
    text("Juliana Nguyen", 20, 360);

};

//game screen
var drawScene2 = function(){
    currentScene = 1;

    var Tile = function(x, y, face) {
    this.x = x;
    this.y = y;
    this.size = 50;
    this.face = face;
    this.isFaceUp = false;
    this.isMatch = false;
};

Tile.prototype.draw = function() {
    fill(214, 247, 202);
    strokeWeight(2);
    rect(this.x, this.y, this.size, this.size, 10);
    if (this.isFaceUp) {
        image(this.face, this.x, this.y, this.size, this.size);
    } else {
        image(getImage("creatures/OhNoes-Hmm"), this.x, this.y, this.size, this.size);
    }
};

Tile.prototype.isUnderMouse = function(x, y) {
    return x >= this.x && x <= this.x + this.size  &&
        y >= this.y && y <= this.y + this.size;
};

// Global config
var NUM_COLS = 6;
var NUM_ROWS = 4;

// Declare an array of all possible faces
var faces = [
    getImage("avatars/leafers-seed"),
    getImage("avatars/leafers-ultimate"),
    getImage("avatars/aqualine-seed"),
    getImage("avatars/aqualine-ultimate"),
    getImage("avatars/duskpin-seed"),
    getImage("avatars/duskpin-ultimate"),
    getImage("avatars/piceratops-seed"),
    getImage("avatars/piceratops-ultimate"),
    getImage("avatars/primosaur-seed"),
    getImage("avatars/primosaur-ultimate"),
    getImage("avatars/starky-seed"),
    getImage("avatars/starky-ultimate"),
];

// Make an array which has 2 of each, then randomize it
var possibleFaces = faces.slice(0);
var selected = [];
for (var i = 0; i < (NUM_COLS * NUM_ROWS) / 2; i++) {
    // Randomly pick one from the array of remaining faces
    var randomInd = floor(random(possibleFaces.length));
    var face = possibleFaces[randomInd];
    
    // Push twice onto array
    selected.push(face);
    selected.push(face);
    selected.push(face);
    selected.push(face);
    
    // Remove from array
    possibleFaces.splice(randomInd, 1);
}

// Now shuffle the elements of that array
var shuffleArray = function(array) {
    var counter = array.length;

    // While there are elements in the array
    while (counter > 0) {
        // Pick a random index
        var ind = Math.floor(Math.random() * counter);
        // Decrease counter by 1
        counter--;
        // And swap the last element with it
        var temp = array[counter];
        array[counter] = array[ind];
        array[ind] = temp;
    }
};
shuffleArray(selected);

// Create the tiles
var tiles = [];
for (var i = 0; i < NUM_COLS; i++) {
    for (var j = 0; j < NUM_ROWS; j++) {
        var tileX = i * 54 + 30;
        var tileY = j * 54 + 50;
        var tileFace = selected.pop();
        tiles.push(new Tile(tileX, tileY, tileFace));
    }
}

background(213, 186, 222);

var numTries = 0;
var numMatches = 0;
var flippedTiles = [];
var delayStartFC = null;

mouseClicked = function() {
for (var i = 0; i < tiles.length; i++) {
    var tile = tiles[i];
    if (tile.isUnderMouse(mouseX, mouseY)) {
        if (flippedTiles.length < 4 && !tile.isFaceUp) {
            tile.isFaceUp = true;
            flippedTiles.push(tile);
            if (flippedTiles.length === 4) {
                numTries++;
                if (flippedTiles[0].face === flippedTiles[1].face === flippedTiles[2].face === flippedTiles[3].face) {
                    flippedTiles[0].isMatch = true;
                    flippedTiles[1].isMatch = true;
                    flippedTiles[2].isMatch = true;
                    flippedTiles[4].isMatch = true;
                    flippedTiles.length = 4;
                    numMatches++;
                }
                delayStartFC = frameCount;
            }
        } 
        loop();
    }
}
};

draw = function() {
    background(213, 186, 222);

    var m = millis();
    textSize(25);
    text(m/1000, 155, 335);

    if (delayStartFC && (frameCount - delayStartFC) > 30) {
        for (var i = 0; i < tiles.length; i++) {
            var tile = tiles[i];
            if (!tile.isMatch) {
                tile.isFaceUp = false;
            }
        }
        flippedTiles = [];
        delayStartFC = null;
        noLoop();
    }

    for (var i = 0; i < tiles.length; i++) {
        tiles[i].draw();
    }

    if (numMatches === tiles.length/2) {
        fill(0, 0, 0);
        textSize(20);
        text("You found them all in " + numTries + " tries!", 20, 375);
    }
    };


    noLoop();

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