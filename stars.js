let balls = [];

let threshold = 30;
let accChangeX = 0;
let accChangeY = 0;
let accChangeT = 0;

function setup() {
	var canvas = createCanvas(windowWidth, windowHeight);
	canvas.parent("sketch-div");

	for (let i = 0; i < 99; i++) {
		balls.push(new Ball());
	}
}

function draw() {
	background(0);

	for (let i = 0; i < balls.length; i++) {
		balls[i].move();
		balls[i].display();
	}

	checkForShake();
}

function checkForShake() {
	accChangeX = abs(accelerationX - pAccelerationX); // Total change in accelerationX and accelerationY
	accChangeY = abs(accelerationY - pAccelerationY);
	accChangeT = accChangeX + accChangeY;
	
	if (accChangeT >= threshold) { // If isShake
		for (let i = 0; i < balls.length; i++) {
			balls[i].shake();
			balls[i].turn();
		}
	}
	// If isn'tShake
	else {
		for (let i = 0; i < balls.length; i++) {
			balls[i].stopShake();
			balls[i].turn();
			balls[i].move();
		}
	}
}

// This ball class
class Ball {
	constructor() {
		this.x = random(width);
		this.y = random(height);
		this.diameter = random(2, 7);
		this.xspeed = random(-0.3, 0.3);
		this.yspeed = random(-0.3, 0.3);
		this.oxspeed = this.xspeed;
		this.oyspeed = this.yspeed;
		this.direction = 0.7;
	}

	move() {
		this.x += this.xspeed * this.direction;
		this.y += this.yspeed * this.direction;
	}

	// Bounce when touch edge
	turn() {
		if (this.x < 0) {
			this.x = 0;
			this.direction = -this.direction;
		} else if (this.y < 0) {
			this.y = 0;
			this.direction = -this.direction;
		} else if (this.x > width - 20) {
			this.x = width - 20;
			this.direction = -this.direction;
		} else if (this.y > height - 20) {
			this.y = height - 20;
			this.direction = -this.direction;
		}
	}

	// Add to xspeed and yspeed based on change in accelerationX
	shake() {
		this.xspeed += random(5, accChangeX / 3);
		this.yspeed += random(5, accChangeX / 3);
	}

	// Slow down
	stopShake() {
		if (this.xspeed > this.oxspeed) {
			this.xspeed -= 0.6;
		} else {
			this.xspeed = this.oxspeed;
		}
		if (this.yspeed > this.oyspeed) {
			this.yspeed -= 0.6;
		} else {
			this.yspeed = this.oyspeed;
		}
	}

	display() {
		ellipse(this.x, this.y, this.diameter, this.diameter);
	}
}
