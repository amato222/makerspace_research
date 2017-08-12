var bubbles = [];
var col= color(255, 100);

function setup() {
createCanvas(innerWidth, 500);
for (var i = 0; i < 20; i++){
bubbles[i] = new Bubble(random(width),random(height));
    }
}

function draw() {
    background(0);
    for (var i = 0; i < bubbles.length; i++) {
    bubbles[i].display();
    bubbles[i].update();
    for (var j = 0; j <bubbles.length; j++) {
    if (i != j && bubbles[i].intersects(bubbles[j])) {
        bubbles[i].changeColor();
        bubbles[i].bounce();
        bubbles[j].changeColor();
        }
}
    
    }
}
function reset() {
bubbles.splice(0,20);
}



function Bubble(x, y) {
    this.x = x;
    this.y = y;
    this.r = 12;
    this.speedx =3;
    this.speedy=3;
    this.col = color(255, 100);
    this.changeColor = function () {
        this.col = color(random(255), random(255), random(255), 150);
    }
    this.display = function () {
        noStroke();
        fill(this.col);
        ellipse(this.x, this.y, this.r * 2, this.r * 2);
    }
    this.intersects = function (other) {
        var d = dist(this.x, this.y, other.x, other.y);
        if (d < this.r + other.r) {
            return true;
        }
        else {
            return false;
        }
    }
    this.update = function () {
        this.x = this.x + this.speedx;
        this.y = this.y + this.speedy;
        if (this.y>=500|| this.x>=innerWidth){
            this.speedx = this.speedx *-1;
            this.speedy=this.speedy *-1;
            
        } else if (this.y<=0 || this.x<=0){
            this.speedx =this.speedx *-1;
            this.speedy=this.speedy *-1;
        }
    
            }
    this.bounce = function(){
    this.speedx =this.speedx *-1;
        
    }
}


