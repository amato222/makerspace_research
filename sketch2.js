var song;
var amp;

function preload() {
    song = loadSound("assets/BlueRidgeMountains.mp3");
}

function setup() {
    song.loop();
    createCanvas(window.innerWidth, window.innerHeight);
    background(70, 0, 90);
    amp = new p5.Amplitude();
}

function draw() {
    var vol = amp.getLevel();
    var diam = map(vol, 0, 0.3, 10, 500);
    var side = map(vol, 0,.3,10,500);
    fill((diam / 4), (diam / 2), (diam / 2), diam)
    noStroke()
    ellipse(window.innerWidth/2, window.innerHeight/2, diam, diam);
    rect(window.innerWidth/2, window.innerHeight/2,side, side);
}
