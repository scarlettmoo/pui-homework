var textPool = ['cunt', 'slut', 'bitch', 'whore', 'chick', 'cheap'];
var words = [];
var maxSpeed = 4;
//frames for every new word
var wordsInterval = 8;

// p5.js + BRFv4 face tracker (via handsfree.js)
// more information here
//https://handsfree.js.org/

// the library is included in index.html so fork the sketch, 
//don't just copy and paste this code

//this object contains the tracking utility
let myHandsfree;

//the model has 68 "landmarks"
//https://pyimagesearch.com/wp-content/uploads/2017/04/facial_landmarks_68markup.jpg
//this grouping in arrays is arbitrary, you don't have to use them so literally
let leftEye = [43, 44, 45, 46, 47, 48];
let rightEye = [37, 38, 39, 40, 41, 42];
let leftEyebrow = [23, 24, 25, 26, 27];
let rightEyebrow = [18, 19, 20, 21, 22];
let noseVertical = [28, 29, 30, 31];
let noseHorizontal = [32, 33, 34, 35, 36];
let mouthOuter = [49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60];
let mouthInner = [61, 62, 63, 64, 65, 66, 67, 68];
let oval = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];
let nosePoint = 34;

//function preload(){
	//face = loadImage("crying.png");}

function setup() {
	createCanvas(600, 600);
	//rainStart();

	//initialization, leave it here...
	var myConfig = {
		hideCursor: true
	};

	myHandsfree = new Handsfree(myConfig);
	myHandsfree.start();


}


function draw() {
	//create new word every x frames
	if (frameCount % wordsInterval == 0) {
		createWord();
	}

	background(0);

	let points = [];

	//checking if there is a face
	if (myHandsfree.isTracking) {
		if (myHandsfree.pose.length > 0) {

			//accessing the first face (there can be multiple)
			let face0 = myHandsfree.pose[0].face;

			//getting the points
			let nPoints = face0.vertices.length;

			//create an array of point objects so they are easier to read

			//starts from 1 for some reason...
			points.push({
				x: 0,
				y: 0
			});

			for (let i = 0; i < nPoints; i += 2) {
				let vx = face0.vertices[i + 0];
				let vy = face0.vertices[i + 1];
				let pt = {
					x: vx,
					y: vy
				};
				points.push(pt);
			}

			// Rotations of the head, in radians
			let rx = face0.rotationX; // pitch
			let ry = face0.rotationY; // yaw
			let rz = face0.rotationZ; // roll


			///////////////////////////

			//from here I can start doing fun things with the points
			//each points is points[i].x and points[i].y
			//where i is the landmark id
			//https://pyimagesearch.com/wp-content/uploads/2017/04/facial_landmarks_68markup.jpg

			//for (let i = 0; i < points.length; i++) {
				//let p = points[i];
				//fill(255, 255, 255);
				//ellipse(p.x, p.y, 10, 10);
				//you can display the landmark number
				//text(i, p.x, p.y-3);
			//}
				
				
			//draw clown nose
			//fill(255, 0, 0);
			//noStroke();
			//ellipse(points[34].x, points[34].y, 20, 20);

			//this is how to use the arrays at the beginning
			//draw an eyebrow line
			stroke(255, 255, 255);
			strokeWeight(3);
			noFill();
			beginShape();
			for (let i = 0; i < leftEyebrow.length; i++) {
				let id = leftEyebrow[i];
				vertex(points[id].x, points[id].y);
			}
			endShape();
			
			beginShape();
			for (let i = 0; i < rightEyebrow.length; i++) {
				let id = rightEyebrow[i];
				vertex(points[id].x, points[id].y);
			}
			endShape();
				
			beginShape();
			for (let i = 0; i < oval.length; i++) {
				let id = oval[i];
				curveVertex(points[id].x, points[id].y);
			}
			endShape();
			
			beginShape();
			for (let i = 0; i < leftEye.length; i++) {
				let id = leftEye[i];
				curveVertex(points[id].x, points[id].y);
			}
			endShape();
			
			beginShape();
			for (let i = 0; i < rightEye.length; i++) {
				let id = rightEye[i];
				curveVertex(points[id].x, points[id].y);
			}
			endShape();
			
			beginShape();
			for (let i = 0; i < noseVertical.length; i++) {
				let id = noseVertical[i];
				vertex(points[id].x, points[id].y);
			}
			endShape();
			
			beginShape();
			for (let i = 0; i < noseHorizontal.length; i++) {
				let id = noseHorizontal[i];
				vertex(points[id].x, points[id].y);
			}
			endShape();
			
			beginShape();
			for (let i = 0; i < mouthOuter.length; i++) {
				let id = mouthOuter[i];
				vertex(points[id].x, points[id].y);
			}
			endShape();
			
			beginShape();
			for (let i = 0; i < mouthInner.length; i++) {
				let id = mouthInner[i];
				vertex(points[id].x, points[id].y);
			}
			endShape();

		}
	} //handsfree///////

	//text rain//////////////////////////

	noStroke();

	fill(255, 0, 0);

	//for each word
	for (var i = 0; i < words.length; i++) {

		//this is the current word
		var w = words[i];

		var hit = false;

		//for each point of the face check if collides
		for (let i = 0; i < points.length; i++) {
			let p = points[i];

			//if point between word beginning and and on the x
			//and between word and the previous position
			if (p.x > w.x && p.x < w.x + w.width && p.y < w.y && p.y > w.y - maxSpeed) {
				hit = true;
			}
		} //point loop

		//if I hit one point
		if (hit) {
			w.speed = 0;
		} else {
			//accelerate until it reaches maximum speed 
			if (w.speed < maxSpeed)
				w.speed+=0.02; //acceleration
		}

		//update
		w.y += w.speed;
		//draw text
		textSize(22);
		text(w.text, w.x, w.y);

	} //word loop


	//AFTER the update I can delete the words out of the screen
	for (let i = words.length - 1; i >= 0; i--) {

		if (words[i].y > height) {
			// Starting at the current position i, remove 1 element
			words.splice(i, 1);
		}
	} //end of delete loop	
	
}



function createWord() {

	let randomText = random(textPool);
	
	//create objce
	let newWord = {
		x: random(0, width),
		y: 0,
		text: randomText,
		speed: 0,
		//measure text width
		width: textWidth(randomText)
	}

	words.push(newWord);
}
