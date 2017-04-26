var participants = [];
var song;

function preload() {
    song = loadSound("assets/BlueRidgeMountains.mp3");
}
function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    song.loop();
    amp = new p5.Amplitude();
    var a = createVector(width / 4, height);
    var b = createVector(width / 4, height - 150);
    var c = createVector(width / 2, height);
    var d = createVector(width / 2, height - 150);
    var root = new Role (a, b);
    var root2 =new Role (c, d);

    participants[0] = root;
    participants[1]= root2;

}

function mousePressed() {
    for (var i=participants.length-1; i>=0 ;i--){ if (!participants[i].finished){
    participants.push(participants[i].actor()); 
    participants.push(participants[i].audience());
    }
                                            
    participants[i].finished=true;
                                            
}
}

function draw() {
    background(255);
    var vol = amp.getLevel();
    angle = map(vol,0,.99,0,8);
    for (var i = 0; i < participants.length; i++) {
        participants[i].display();
        participants [i].uncertainty();}
   //for (var j = 0; j < bubbles.length; j++) {
   //if (i != j && bubbles[i].intersects(bubbles[j])) { bubbles[i].changeColor();
     // bubbles[j].changeColor();
   //}
//}
}
function Role(begin, end) {
    this.begin = begin;
    this.end = end;
    this.finished = false;
    this.col = color(random(100), 50, 100,random(120));
    this.display = function () {
        stroke(this.col);
        strokeWeight(3);
        line(this.begin.x, this.begin.y, this.end.x, this.end.y);
    }
    this.actor = function () {
        this.col = color(random(100), 50, 100,random(120));
        stroke(this.col);
        var dir = p5.Vector.sub(this.end, this.begin);
        dir.rotate(angle);
        dir.mult(.9);
        var newEnd = p5.Vector.add(this.end, dir);
        var right = new Role(this.end, newEnd);
        return right;
    }
     this.audience = function () {
        this.col = color(random(255), 20, 60,random(120));
        stroke(this.col);
         var dir = p5.Vector.sub(this.end, this.begin);
        dir.rotate(-angle);
         dir.mult(.6);
        var newEnd = p5.Vector.add(this.end, dir);
        var left = new Role (this.end, newEnd);
        return left;
}
this.uncertainty = function(){
    this.end.x += random (1,-1);
    this.end.y += random (1,-1);
}
}

 this.intersects = function (other) {
      var d = dist(this.end.x, other.end.y, other.end.x, other.end.y);
      if (d < 1) {
       return true;
    }
      else {
        return false
        };
   }
this.changeColor = function () {
  ellipse(this.end.x,this.end.y,5,5);}
