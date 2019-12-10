/*
* Seven Digit Segments clock 
*/
let s1;
let s2;
let s3;
let s4;
let s5;
let s6;

function setup() {
  createCanvas(1300, 400);

  s1 = new Segment(0);
  s2 = new Segment(1);
  s3 = new Segment(2);
  s4 = new Segment(3);
  s5 = new Segment(4);
  s6 = new Segment(5);
}

function draw() {
  background(0);

  s1.sevenSegments();
  s2.sevenSegments();
  s3.sevenSegments();
  s4.sevenSegments();
  s5.sevenSegments();
  s6.sevenSegments();
}
