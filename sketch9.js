var participants = [];
var collaborators =[];
var songs =[];
var leaves =[];

function preload() {
    song = loadSound("assets/BlueRidgeMountains.mp3");
    song2= loadSound("assets/Crackling_Fireplace.mp3");
}
function setup() {
    createCanvas(800, 500);
    
    amp = new p5.Amplitude();
    var a = createVector(width / 4, height);
    var b = createVector(width / 4, height - 150);
    var c = createVector(width / random(1.5,2), height);
    var d = createVector(width / random(1.5,2), height - 150);
    var e = createVector(width / random(1,2), height);
var f = createVector(width / random(1,2), height -100);
    var root = new Role (a, b);
   var root2 =new Role (c, d);
    var root3=new Role(e, f);
    participants[0] = root;
    collaborators[0]=root2;
    }

function startSong(){
    song.play();
}
function changeSong(){
    if(song.isPlaying()){
    song.stop();
    song2.loop();
} else if (song2.isPlaying()){
    song2.stop();
    song.play();
}
}
function stopSong(){
    song.stop();
    song2.stop();
}

function draw() {
    background(255);
    var vol = amp.getLevel();
    angle = map(vol,0,.99,0,8);
    for (var i = participants.length-1; i>=0; i--) {
        participants[i].display();
        participants [i].uncertainty();}
    for (var j = collaborators.length-1; j>=0; j--) {
        collaborators[j].display();
        collaborators[j].uncertainty();
    }
    //for(var i=0; i<leaves.length; i++) {
        //fill(0);
        //ellipse(leaves[i].x, leaves[i].y, 8,8);
    
   //for (var j = 0; j < bubbles.length; j++) {
   //if (i != j && bubbles[i].intersects(bubbles[j])) { bubbles[i].changeColor();
     // bubbles[j].changeColor();
   //}
//}   
}

function grow() {
    for (var i=participants.length-1; i>=0 ;i--){ if (!participants[i].finished){
    participants.push(participants[i].actor()); 
    participants.push(participants[i].audience());
    } 
    else if (participants[i].finished) {
    participants.splice(26,1,participants[i].actor()); 
    participants.splice(26,1,participants[i].audience());
    }
        
    }
    for (var i=collaborators.length-1; i>=0 ;i--){ if (!collaborators[i].finished){
    collaborators.push(collaborators[i].actor()); 
    collaborators.push(collaborators[i].audience());
    } 
    else if (collaborators[i].finished) {
    collaborators.splice(26,1,collaborators[i].actor()); 
    collaborators.splice(26,1,collaborators[i].audience());
    }
        
    }                                                                               
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
    this.end.x += random (.5,-.5);
    this.end.y += random (.5,-.5);
}
this.finished=function() {
    if (participants[i].actor&participants[i].audience===26) {
        return true;
            }
     if (collaborators[i].actor&collaborators[i].audience===26) {
        return true;
            }
        }
        
    }
function reset() {
  participants.splice(1,26);
collaborators.splice(1,26);
}


 /*this.intersects = function (other) {
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
*/
