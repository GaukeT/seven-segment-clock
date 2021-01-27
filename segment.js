class Segment {
    // nums = [0xFE, 0xB0, 0xED, 0xF9, 0xB3, 0xDB, 0xDF, 0xF0, 0xFF, 0xFB];
	nums = [0x7E, 0x30, 0x6D, 0x79, 0x33, 0x5B, 0x5F, 0x70, 0x7F, 0x7B];
    length = 98;
	width = 18;

	constructor(position) {
		this.position = position;
	}

	getColor(val, shift) {
	  let r = 255;
	  let a = 25 + 255 * ((val >> shift) & 1);
	  return color(r, 0, 0, a);
	}

	sevenSegments() {
		this.sevenSegment(this.nums[this.getIndex()]);
	}

	sevenSegment(val) {
	  push();
	  noStroke();
	  noFill();
	  // A
	  this.getHorizontalSegment(60, 20, val, 6);
	  // B
	  this.getVerticalSegment(160, 40, val, 5);
	  // C
	  this.getVerticalSegment(160, 160, val, 4);
	  // D
	  this.getHorizontalSegment(60, 260, val, 3);
	  // E
	  this.getVerticalSegment(40, 160, val, 2);
	  // F
	  this.getVerticalSegment(40, 40, val, 1);
	  // G
	  this.getHorizontalSegment(60, 140, val, 0);
	  
	  // DP
	  if (this.position % 2 !== 0 && this.position <= 4) {
	  	this.getDot(200, 100);
	  	this.getDot(200, 200);
	  }

	  this.getBinary(60, 350, val);
	  pop();
	}

	getHorizontalSegment(offset, height, val, seg) {
      fill(this.getColor(val, seg));
  	  rect(offset + this.calculateIndent(), height+20, this.length, this.width, 10, 10);
	}

	getVerticalSegment(offset, height, val, seg) {
	  fill(this.getColor(val, seg));
	  rect(offset + this.calculateIndent(), height+20, this.width, this.length, 10, 10);
	}

	getDot(offset, height) {
	  fill(color(255, 0, 0));
	  rect(offset + this.calculateIndent(), height+20, 20, 20, 10, 10);
	}

	getBinary(offset, height, val) {
	  textSize(20);
	  fill(140, 190, 140);
	  text(val.toString(2), offset + this.calculateIndent(), height);
	}

	calculateIndent() {
		return this.position * 200;
	}

	getIndex() {
		let arr = this.standarizedTimeArray();
		return arr[this.position];
	}

	standarizedTimeArray() {
		var today = new Date();
		var time = this.prefixWithZero(today.getHours());
		time += this.prefixWithZero(today.getMinutes());
		time += this.prefixWithZero(today.getSeconds());
		return Array.from(String(time), Number);;
	}

	prefixWithZero(val) {
		if (String(val).length === 1) {
			return "0" + val;
		} else {
			return "" + val;
		}
	}
}
