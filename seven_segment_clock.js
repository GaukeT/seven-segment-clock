/*
* Seven Digit Segments clock 
*/
segments = [];

function setup() {
  createCanvas(windowWidth, windowHeight);

  segments.push(new Segment(0));
  segments.push(new Segment(1));
  segments.push(new Segment(2));
  segments.push(new Segment(3));
  segments.push(new Segment(4));
  segments.push(new Segment(5));
}

function draw() {
  background(60);

  for(let i = 0; i < segments.length; i++) {
    segments[i].sevenSegments();	
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
