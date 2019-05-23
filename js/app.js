// Enemies our player must avoid
var Enemy = function(x, y, speed) {
  // Variables applied to each of our instances go here,
  // we've provided one for you to get started
  // The image/sprite for our enemies, this uses
  // a helper we've provided to easily load images
  this.x = x;
  this.y = y;
  this.speed = speed;
  this.sprite = 'images/enemy-bug.png';
};

//Player
//This function provides the sprite for the player in the canvas
var Player = function(x, y) {
  this.x = x;
  this.y = y;
  this.sprite = 'images/char-pink-girl.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.checkCollision = function() {
  if (player.x < this.x + 60 && player.x + 60 > this.x && player.y < this.y + 60 && player.y + 65 > this.y) {
    player.x = 200;
    player.y = 405;
  }
};

// You should multiply any movement by the dt parameter
// which will ensure the game runs at the same speed for
// all computers.
//Multiplication of speed for the enemies sprite
Enemy.prototype.update = function(dt) {
  this.x = this.x + this.speed * dt;
  if (this.x == 0) {
    this.speed = 100 + Math.floor(Math.random() * 100);
  } else if (this.x > 505) {
    this.x = 0;
  }
};
//player prototype function
Player.prototype.update = function(dt) {
  if (this.y < 60) {
    setTimeout(function() {
     player.x = 200;
     player.y = 405;
    }, 500);
  }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

//Player render function
// Draw the player on the screen, required method for game
Player.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// A handleInput() method.
//This method is used for movement of the player across the canvas.
//we use the keys for left,right,top and down movements in the keyboard

Player.prototype.handleInput = function(which) {
  if (which == 'left' && this.x > 0) {
    this.x = this.x - 101;
  } else if (which == 'right' && this.x < 365) {
    this.x = this.x + 101;
  } else if (which == 'up' && this.y > 60) {
    this.y = this.y - 83;
  } else if (which == 'down' && this.y < 365) {
    this.y = this.y + 83;
  }
}

// all enemy objects are placed in an array called allEnemies
//now add all the enemies to the canvas by using the for loop.

var allEnemies = [];
var enemy = [60, 145, 230];
for (i in enemy) {
  var e = new Enemy(0, enemy[i], 10);
  allEnemies.push(e);
}
// The player object in a variable called player
var player = new Player(200, 405);

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
