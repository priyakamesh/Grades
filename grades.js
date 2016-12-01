var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];


// How many of each grade?

var A = 0;
var B = 0;
var C = 0;
var D = 0;
var F = 0;
var maxNum = 0;
var minNum = 60;

function fGrade () {
	if ((scores[i]<=60)&&(scores[i]>=50)) {
	F = F+1;

	}
}
function dGrade () {
	if ((scores[i]<=70)&&(scores[i]>=61)) {
	D = D+1;
	}
}
function cGrade () {

	if ((scores[i]<=80)&&(scores[i]>=71)) {
		C = C +1;
	}
}

function bGrade () {
	if ((scores[i]<=90)&&(scores[i]>=81)) {
	B = B +1;
	}
}
function aGrade() {

if ((scores[i]<=100)&&(scores[i]>=91)) {
	A = A +1;

}

}

for (var i = 0; i < scores.length; i++) {
	fGrade();
	dGrade();
	cGrade ();
	bGrade ();
	aGrade ();

}
console.log( F + " F grades");
console.log( D + " D grades");
console.log( C + " C grades");
console.log( B + " B grades");
console.log(A + " A grades");


//What is the highest grade?
function maxGrade () {

	for (var i = 0; i <scores.length; i++) 
	{

		if (maxNum < scores[i]) {
			maxNum = scores[i];
		} else {
			maxNum ;
		}
    }
    return maxNum;
 }
 maxGrade ();
function highGrade () {
	if (maxNum >=91) {
    	console.log( "Highest Grade is A");
    }
}

highGrade();


//what is the lowest grade
function minGrade () {
	for (var i = 0;i<scores.length; i++) {

		if(minNum < scores[i]) {
			minNum;
		} else {
			minNum = scores[i];
		}
	}
	return minNum;
}
minGrade ();
function lowGrade () {
	if(minNum <=60) {
		console.log("Lowest Grade is F");
	}
}
lowGrade ();











