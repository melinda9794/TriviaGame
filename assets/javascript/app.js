// ========= Tagline Questions =========
var tagOne = {
	question: 'The good news is your dates are here. The bad news is... they&#8217re dead.',
	choice1: "Prom Night",
	choice2: "The House on Sorority Row",
	choice3: "Night of the Creeps",
	choice4: "My Bloody Valentine",
	answer: "Night of the Creeps",
	info: "<img src='assets/images/creeps.jpg'>"	
};

var tagTwo = {
	question: 'Sometimes dead is better.',
	choice1: "Re-Animator",
	choice2: "Pet Sematary",
	choice3: "Day of the Dead",
	choice4: "Dead Alive",
	answer: "Pet Sematary",
	info: "<img src='assets/images/pet.jpg'>"
}

var tagThree = {
	question: 'If this movie doesn&#8217t make your skin crawl... it&#8217s on too tight!',
	choice1: "The Last House on the Left",
	choice2: "Maniac",
	choice3: "Black Christmas",
	choice4: "House on Haunted Hill",
	answer: "Black Christmas",
	info: "<img src='assets/images/blackchristmas.jpg'>"

};

var tagFour = {
	question: 'The night HE came home.',
	choice1: "Halloween",
	choice2: "Friday the 13th",
	choice3: "The Haunting",
	choice4: "House by the Cemetery",
	answer: "Halloween",
	info: "<img src='assets/images/halloween.jpg'>"
};

// ========= Quote Questions ============
var quoteOne = {
	question: '"Listen to them. Children of the night. What music they make!"',
	choice1: "American Werewolf in London",
	choice2: "Plan 9 From Outer Space",
	choice3: "Dracula",
	choice4: "The Brood",
	answer: "Dracula",
	info: "<img src='assets/images/gifs/bela.gif'>"
};

var quoteTwo = {
	question: '"Do you like scary movies?"',
	choice1: "I Know What You Did Last Summer",
	choice2: "Scream",
	choice3: "Fright Night",
	choice4: "Friday the 13th",
	answer: "Scream",
	info: "<img src='assets/images/gifs/scream.gif'>"
};

var quoteThree = {
	question: '"Here&#8217s Johnny!"',
	choice1: "Johnny Dies at the End",
	choice2: "Vertigo",
	choice3: "Trick 'r' Treat",
	choice4: "The Shining",
	answer: "The Shining",
	info: "<img src='assets/images/gifs/jack.gif'>"
};

var quoteFour = {
	question: '"We belong dead!"',
	choice1: "Bride of Frankenstein",
	choice2: "Ed Wood",
	choice3: "The Wicker Man",
	choice4: "Night of the Living Dead",
	answer: "Bride of Frankenstein",
	info: "<img src='assets/images/gifs/frank.gif'>"
};

var quoteFive = {
	question: '"I&#8217m your number one fan."',
	choice1: "Hellraiser",
	choice2: "The Howling",
	choice3: "The Faculty",
	choice4: "Misery",
	answer: "Misery",
	info: "<img src='assets/images/gifs/misery.gif'>"
};


// ========= Trivia Questions ===========
var horOne = {
	question: 'Which classic horror movie did Johnny Depp appear in?',
	choice1: "The Wicker Man",
	choice2: "Friday the 13th",
	choice3: "A Nightmare on Elm Street",
	choice4: "Halloween",
	answer: "A Nightmare on Elm Street",
	info: "<img src='assets/images/gifs/depp.gif'>"
};

var horTwo = {
	question: "Which fictional hotel did the film 'The Shining' take place in?",
	choice1: "The Overlook Hotel",
	choice2: "The Hotel Cortez",
	choice3: "Oatlands Park Hotel",
	choice4: "The Grand Budapest Hotel",
	answer: "The Overlook Hotel",
	info: "<img src='assets/images/gifs/torrence.gif'"
};

var horThree = {
	question: "Which is the only horror movie to win an Oscar for best picture?",
	choice1: "Jaws",
	choice2: "The Omen",
	choice3: "Silence of the Lambs",
	choice4: "Rosemary's Baby",
	answer: "Silence of the Lambs",
	info: "<img src='assets/images/gifs/wink.gif'"
};

var horFour = {
	question: "What is the name of the vampire from the film Nosferatu?",
	choice1: "Count Grishnackh",
	choice2: "Count Schreck",
	choice3: "Count Herzog",
	choice4: "Count Orlok",
	answer: "Count Orlok",
	info: "<img src='assets/images/gifs/orlok.gif'>"
};

var horFive = {
	question: "Which actor has the most on-screen appearances as Dracula?",
	choice1: "Bela Lugosi",
	choice2: "Klaus Kinski",
	choice3: "Christopher Lee",
	choice4: "Max Schreck",
	answer: "Christopher Lee",
	info: "<img src='assets/images/gifs/draculalee.gif'>"
};



// Creating arrays that will hold the questions for each category.
var taglineQuestions = [tagOne, tagTwo, tagThree, tagFour];
var quoteQuestions = [quoteOne, quoteTwo, quoteThree, quoteFour, quoteFive];
var triviaQuestions = [horOne, horTwo, horThree, horFour, horFive];

// The empty array that will be populated when the user selects a category.
var questions = [];

// Setting initial variable values. 
var num = 0;
var time = 30;
var numbercorrect = 0;
var numberwrong = 0;
var numtimeout = 0;



// ========= Functions ==========

// Sets the time back to 30s, sets an interval for the timer, displays the next question.
function nextquestion() {
	time = 30;
	counter = setInterval(increment, 1000);
	$(".timer").html("<h2>Time Remaining: " + time + "</h2>");
	$(".question").html(questions[num].question);
	$(".ans1").html(questions[num].choice1);
	$(".ans2").html(questions[num].choice2);
	$(".ans3").html(questions[num].choice3);
	$(".ans4").html(questions[num].choice4);
	$(".info").empty();
};

// Counts down & displays the remaining time. Stops if time = 0 and starts an animation when time remaining < 10sec.
function increment() {
	time--
	$(".timer").html("<h2>Time Remaining: " + time + "</h2>")
	if (time == 0) {
		timeout();
		stop();
		$(".choice").empty();
	} else if (time < 10) {
		$(".timer").addClass("red");
		setTimeout(function(){$(".timer").removeClass("red")}, 500)
	};
};

// Stops the timer. If there are more questions go on to the next, if not end the game. 
function stop() {
	clearInterval(counter);
	num++;
	if (num == questions.length) {
		setTimeout(endgame, 5000);
	} else {
		setTimeout(nextquestion, 5000);
	};
};

// Lets the user know they got the question right and displays an image.
function correctanswer() {
	$(".question").html("<p>Correct!</p>");
	$(".info").html("<p>"+questions[num].info+"</p>");
}

// Counts a wrong answer, tells the user they are wrong, and displays an image. 
function wronganswer() {
	numberwrong++;
	$(".question").html("<p>Wrong! <br> The correct answer was: "+questions[num].answer+"</p>");
	$(".info").html("<p>"+questions[num].info+"</p>");
};

// Counts a failure to answer the question, tells the user they are out of time, and displays an image. 
function timeout() {
	numtimeout++;
	$(".question").html("<p>Time's up! <br> The correct answer was: "+questions[num].answer+"</p>");
	$(".info").html("<p>"+questions[num].info+"</p>");
}

// Tells the user how many questions they got right/wrong/unanswered. Resets variables and shows buttons so the user can play again. 
function endgame() {
	$(".question").html("<h2>You got " + numbercorrect + " answers correct!</h2>"
		+ "<h2>You got " + numberwrong + " wrong!</h2>" + "<h2>You didn't answer " + numtimeout + " questions!</h2>");
	$(".choice").empty();
	$(".timer").empty();
	$(".info").empty();
	num = 0;
	numbercorrect = 0;
	numberwrong = 0;
	numtimeout=0;
	$("button").show();
};


// Category select buttons.
$(".taglineButton").click(function() {
	questions = taglineQuestions;
	nextquestion();
	$("button").hide();
	$(".intro").hide();
});

$(".themeButton").click(function() {
	questions = quoteQuestions;
	nextquestion();
	$("button").hide();
	$(".intro").hide();
});

$(".triviaButton").click(function() {
	questions = triviaQuestions;
	nextquestion();
	$("button").hide();
	$(".intro").hide();
});

// Clicking on a choice.
$(".choice").click(function() {

	if ($(this).text() == questions[num].answer) {
		numbercorrect++;
		correctanswer();
		stop();
	} else {
		wronganswer();
		stop();
	};

	$(".choice").empty();
});