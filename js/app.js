// Enemies our player must avoid
var Enemy = function(x, y, speed) {
    // Variables applied to each of our instances go here,

    this.x = x;
    this.y = y;
    this.location = ( x, y);
    this.speed = speed;

    // The image/sprite for our enemies, this uses a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter

    this.x += this.speed * dt
    // which will ensure the game runs at the same speed for
    // all computers.
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};



// Now write your own player class
var Player = function (x, y){
    this.x = x;
    this.y = y;
    this.sprite = 'images/char-boy.png';
};

// This class requires an update(), render() and
var playerX
var playerY

Player.prototype.update = function(){
    // You should multiply any movement by the dt parameter
    playerX = this.x;
    playerY = this.y
}

Player.prototype.render = function(){
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

// a handleInput() method
Player.prototype.handleInput = function(pressedKeys){
    if (pressedKeys === 'left' && this.x > 33){
        this.x -= 55; 
    }
    else if (pressedKeys === 'up'&& this.y > 18){
        this.y -= 55;
        if (this.y < 55){
            this.reset();
        }
    }
    else if (pressedKeys === 'right' && this.x < 420){
        this.x += 55
    }
    else if (pressedKeys === 'down' && this.y < 420){
        this.y += 55
    }
};

Player.prototype.reset = function(){
    console.log("reset player");
    this.x = 200;
    this.y = 390;
}

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
var allEnemies = []

// Place the player object in a variable called player
var player = new Player(200, 390);



// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
