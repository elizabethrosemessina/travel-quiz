/*jslint browser: true*/

// PROJECT NOTES:
/*
   Country Options:
      Italy
	  Ireland
	  Switzerland
	  Croatia
	  Poland
*/

$(document).ready(function () {
	
	$("#button").click(function () {
		
		var question1 = document.quiz.activity.value;
		var question2 = document.quiz.nightlife.value;
		var question3 = document.quiz.food.value;
		var question4 = document.quiz.sites.value;
		var italy = 0, ireland = 0, switzerland = 0, croatia = 0, poland = 0, greatest = 0;
		var result = "Italy";  // name of country w/ greatest value
		
		console.log("hello!");
		
		//
		// QUESTION 1
		if (question1 === "beach") {
			console.log("beach");
			italy+=4;
			croatia+=4;
			poland+=1;
		}
		else if (question1 === "mountains") {
			console.log("mountains");
			switzerland+=5;
			italy+=3;
			ireland+=2;
			poland+=2;
		}
		else if (question1 === "castle") {
			console.log("castle");
			ireland+=4;
		}
		else {  // = island hopping
			console.log("islands");
			croatia+=6;
			italy+=1;
		}
		
		
		//
		// QUESTION 2
		if (question2 === "pub") {
			console.log("pub");
			ireland+=4;
		}
		else {
			console.log("clubbing");
			italy+=4;
			croatia+=4;
			poland+=3;
		}
		
		
		//
		// QUESTION 3
		if (question3 === "cheese") {
			console.log("cheese");
			switzerland+=5;
			poland+=2;
			italy+=2;
			croatia+=1;
		}
		else if (question3 === "chicken") {
			console.log("chicken");
			ireland+=4;
		}
		else if (question3 === "pierogi") { // = pierogi
			console.log("pierogi");
			poland+=4;
			croatia+=2;
		}
		else {
			console.log("italian");
			italy+=4;
			croatia+=3;
			poland+=1;
		}
		
		
		//
		// QUESTION 4
		if (question4 === "architecture") {
			console.log("architecture");
			italy+=4;
			poland+=3;
			switzerland+=3;
			croatia+=2;
		}
		else if (question4 === "cliffs") {
			console.log("cliffs");
			ireland+=4;
			italy+=3;
			croatia+2;
			switzerland+=1;
		}
		else if (question4 === "ruins") {
			console.log("ruins");
			italy+=4;
			croatia+=2;
			ireland+=1;
		}
		else { // = mountains
			console.log("mountains");
			switzerland+=4;
			italy+=4;
			poland+=3;
			ireland+=2;
		}
		
		
		// UPDATE on country VALUES
		console.log("italy:         "  + italy
			      + "\nswitzerland: "  + switzerland
			      + "\nireland:     "  + ireland
				  + "\ncroatia:     "  + croatia
				  + "\npoland:      "  + poland);
		
		//setting greatest to the highest country #
		greatest = Math.max(italy, switzerland, ireland, croatia, poland);
		console.log("greatest is " + greatest);
		
		if (greatest === poland)
			result = "Poland";
		else if (greatest === switzerland)
			result = "Switzerland";
		else if (greatest === ireland)
			result = "Ireland";
		else if (greatest === croatia)
			result = "Croatia";
		else
			result = "Italy";
		
		$('#result').text(result);
		
		$('.results').css({
			'display': 'block'
		})
		
	})
	
})