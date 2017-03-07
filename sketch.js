var circle1 = {
    x: 0
    , y: 500
    , speedx: 2
    , speedy: 4
};
var col = {
    r: 255
    , g: 0
    , b: 0
};


function setup() {
var myCanvas = createCanvas(innerWidth, 500);
myCanvas.parent('p5sketch');
    
background(0);
}

function draw() {
    col.r = random(100, 255);
    col.g = 0;
    col.b = random(100, 190);
    fill(col.r, col.g, col.b, 100);
    circle1.x = circle1.x + circle1.speedx;
    circle1.y = circle1.y - circle1.speedy;
    if (circle1.y < 0) {
        circle1.speedy = -3;
    }
    else if (circle1.y > 500) {
        circle1.speedy = 4
    }
    if (circle1.x > 1000) {
        circle1.speedx = -2
    }
    else if (circle1.x < 1) {
        circle1.speedx = 2
    }
    if (circle1.x > 400) {
        rect(circle1.x, circle1.y, 100, 100)
    }
    else {
        ellipse(circle1.x, circle1.y, 100, 100);
    }
}