function preload() {
    // preload code
    ping = loadSound('./sonar_ping.wav');
}

function setup() {
    // put setup code here
}

function draw() {
    // put drawing code here
    ellipse(590, 50, 80, 10);
    if (! ping.isPlaying()) {
	ping.play();
    }
}
