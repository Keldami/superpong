var animate = 	window.requestAnimationFrame || 
		window.webkitRequestAnimationFrame ||
		window.mozRequestAnimationFrame || 
		function(callback) {
			window.setTimeout(callback, 1000/60)
		};	

var canvas = document.getElementById('main');
var width = 640;
var height = 400;
canvas.width = width;
canvas.height = height;
var context = canvas.getContext('2d');

window.onload = function() {
	//document.body.appendChild(canvas);
	animate(step);
};


function Quad(x, y, width, height) {
	this.x = x;
	this.y = y; 
	this.width = width;
	this.height = height;
	this.x_speed = 0;
	this.y_speed = 0; 
};

Quad.prototype.render = function() {
	context.fillStyle = "#FFFFFF";
	context.fillRect(this.x, this.y, this.width, this.height);
};

function Player() {
	this.quad = new Quad(10, 10, 20, 20);
}

Player.prototype.render = function() {
	this.quad.render();	
};

var player = new Player();

var keysDown = {};

window.addEventListener("keydown", function(event) {
	keysDown[event.keyCode] = true;
});
window.addEventListener("keyup", function(event) {
	delete keysDown[event.keyCode];	
});

Player.prototype.update = function() {
	for(var key in keysDown) {
		var value = Number(key);
		if (value == 37) { //left
			this.quad.move(-4, 0);
		} else if (value == 39) { //right
			this.quad.move(4, 0);
		} else if (value == 38) { // down
			this.quad.move(0, -4);
		} else if (value == 40) { // up
			this.quad.move(0, 4);
		} else {
			this.quad.move(0, 0);
		}
	}
};

Quad.prototype.move = function(x, y) {
	this.x += x;
	this.y += y;
	this.x_speed = x;
	this.y_speed = y; 
}




var step = function() {
	update();
	render();
	animate(step);
};

var update = function() {
	player.update();
};

var render = function() {
	context.fillStyle = '#000000';
	context.fillRect(0, 0, width, height);
	player.render();
};
