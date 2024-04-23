var playerTurn = 0;
var NUM_COLS = 3;
var NUM_ROWS = 3;
var SYMBOLS = ['X','O'];
var stillPlaying = true;

var tiles = [];

/* 0 3 6
    1 4 7
    2 5 8
    */

var checkWin = function() {
    if ((tiles[0].label === tiles[1].label && tiles[1].label === tiles[2].label && tiles[0].label !== "") ||
    (tiles[3].label === tiles[4].label && tiles[4].label === tiles[5].label && tiles[3].label !== "") ||
    (tiles[6].label === tiles[7].label && tiles[7].label === tiles[8].label && tiles[6].label !== "") ||
     (tiles[0].label === tiles[4].label && tiles[4].label === tiles[8].label && tiles[0].label !== "") ||
     (tiles[6].label === tiles[4].label && tiles[4].label === tiles[2].label && tiles[6].label !== "") ||
     (tiles[0].label === tiles[3].label && tiles[3].label === tiles[6].label && tiles[0].label !== "") ||
     (tiles[1].label === tiles[4].label && tiles[4].label === tiles[7].label && tiles[1].label !== "") ||
     (tiles[2].label === tiles[5].label && tiles[5].label === tiles[8].label && tiles[8].label !== "")) {
    
    return true;
}
    //Return true if there is a winner, else return false
    return false;
};

var Tile = function(x, y) {
    this.x = x;
    this.y = y;
    this.size = width/NUM_COLS;
    this.label = "";
};

Tile.prototype.draw = function() {
    fill(214, 247, 202);
    strokeWeight(2);
    rect(this.x, this.y, this.size, this.size, 10);
    textSize(100);
    textAlign(CENTER, CENTER);
    fill(0, 0, 0);
    text(this.label, this.x+this.size/2, this.y+this.size/2);
};

Tile.prototype.empty = function() {
    return this.label === "";
};

Tile.prototype.onClick = function() {
    // If the tile is not empty, exit the function
    if (!this.empty()) {
        return ;
    }
    
    this.label = SYMBOLS[playerTurn];
    
    playerTurn++;
    if ( playerTurn >= SYMBOLS.length) {
         playerTurn = 0;
    }
    
    // Put the player's symbol on the tile
    
    // Change the turn
};

Tile.prototype.handleMouseClick = function(x, y) {
    // Check for mouse clicks inside the tile
        if (x >= this.x && x <= this.x + this.size && y >= this.y && y <= this.y + this.size)
        {
            this.onClick();
        }
        
};

for (var i = 0; i < NUM_COLS; i++) {
    for (var j = 0; j < NUM_ROWS; j++) {
        tiles.push(new Tile(i * (width/NUM_COLS-1), j * (height/NUM_ROWS-1)));
    }
}

var drawTiles = function() {
    for (var i in tiles) {
        tiles[i].draw();
    }
};

mouseReleased = function() {
    for (var i in tiles) {
        tiles[i].handleMouseClick(mouseX, mouseY);
    }
};

draw = function() {
    if (stillPlaying)
    {
        background(143, 143, 143);
        drawTiles();
        if (checkWin())
         {
            fill(255, 0, 0);
            text("Winner!", 200,200);
            stillPlaying = false;
         }
    }
};