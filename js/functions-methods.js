var myClass = "You all are great!";
var text = 'The sum is';
function addIt(numA, numB){
	var total = numA + numB;
	console.log(text + total);
}
function multiply(){
	var total = 2 + 2;
	console.log(total);
}
multiply(); 
// addIt(8,8);
// addIt(10,10); 

var amanda = {
	eyes: 2,
	bigLips: true,
	hairColor: 'dark brown',
	slogan: function(what) {
		console.log(what + ' is awesome');
	}
}
amanda.slogan('Javascript');
amanda.hairColor = 'pastel pink';
console.log(amanda.hairColor);
console.log(myClass);
