function preload() {
    ping = loadSound('./sonar_ping.wav');
}

function setup() {
    // put setup code here
}

function draw() {
    // put drawing code here
    ellipse(50, 50, 80, 90);
    if (! ping.isPlaying()) {
	ping.play();
    }
}
