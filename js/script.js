//This declares the variable myName and assigns it the string value of my name
var myName = 'Amanda Gonzalez';
// This declares myAge var and sets it to a number
var myAge = 24;
// This declares the var myHobbies and assigns it to an array or strings
var myHobbies = ['Video games', 'spending time with my family, friends, boyfriend, dog', 'sleeping', 'drawing'];
//This declares the var myDog as an object and assigns it various properties
var myDog = {
	name: 'Chevy',
	age: 7,
	likes: ['going outside', 'belly rubs', 'scratches', 'chicken', 'my family', 'other dogs']
};
//Object properties are accessed via dot notation
console.log(myDog.name);
console.log(myDog.age);
// Items within an array can accessed via [], arrays start counting from 0
console.log(myDog.likes[0], myDog.likes[1]);
console.log(myName);
console.log(myAge);
console.log(myHobbies);
