$(document).ready(function() {


var possibleAnswers = ["Yes", "No", "Certainly", "The Gods say Yeah", "No Doubt", "Count on it", "Maybe", "My tea leaves say Yes", "My tea leaves say No", "Are you back again?", "Leave me alone", "Does a Bear go poop in the woods?", "Go ask your dog", "Heck no", "Yeah right!", "Are you kidding?", "I cant believe you asked that", "Go away I have a headache", "You have better odds with the lottery", "Does your mom know you asked that question?"];
 
var question = function() {
	var randomNumber = Math.random();
 	var randomNumberArray = randomNumber * possibleAnswers.length;
 	var randomIndex = Math.floor(randomNumberArray);
 	var answerText = possibleAnswers[randomIndex];


	var quest = prompt("ASK A YES/NO QUESTION!");
	$("#m8ball").effect("shake");   
	$("#m8ball").attr("src", "answerside.png"); 
	$("#answer").fadeOut(500);
	setTimeout(function() {
		$("#answer").fadeIn(1000);
		$("#answer").text(answerText);
	}, 500);
};

$("#questionButton").click(question);

});