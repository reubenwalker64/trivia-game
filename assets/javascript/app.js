//JavaScript for the logic and jQuery to manipulate HTML


// click event for button #begin

//Button on click event shows questions and Answers. 

/* questions 1st technique Not Working
function appendText() {
    var q1 = $("<p class="question1"></p>").text("IPA stands for Indepenent Pale Ale.");   // Create with jQuery
    var q2 = $("<p class="question2"></p>").text("Roasting the barley makes stouts and porters dark.");
    var q3 = $("<p class="question3"></p>").text("Hefewizen is a wheat beer.");
    var q4 = $("<p class="question4"></p>").text("Pilsners are a type of lager.");
    var q5 = $("<p class="question5"></p>").text("Yeast turns the sugars of the grain into alcohol.");
    var q6 = $("<p class="question6"></p>").text("Yeast acts a preservative.");
    var q7 = $("<p class="question7"></p>").text("Hops add flavor to beer.");
    var q8 = $("<p class="question8"></p>").text("Hops add aroma to beer.");
    $("body").append(q1, q2, q3, q4, q5, q6, q7, q8);      // Append the new elements 
  }
//Append to questions (change vars?)
  function appendText() {
    var q1 = $("#question1").text("True" + "False");   // Create with jQuery
    var q2 = $("#question2").text("True" + "False");
    var q3 = $("#question3").text("True" + "False");
    var q4 = $("#question4>").text("True" + "False");
    var q5 = $("#question5").text("True" + "False");
    var q6 = $("#question6").text("True" + "False");
    var q7 = $("#question7").text("True" + "False");
    var q8 = $("#question8").text("True" + "False");
    $("body").append(q1, q2, q3, q4, q5, q6, q7, q8);      // Append the new elements 
  } 
  */

 //is this in right place?
 var myQuestions = [
    {
        question: "IPA stands for Indepenent Pale Ale.",
        answers: {
            a: 'True',
            b: 'False'
        },
        correctAnswer: 'False'
    },
    {
        question: "Roasting the barley makes stouts and porters dark.?",
        answers: {
            a: 'True',
            b: 'False'
        },
        correctAnswer: 'True'
    },
    {
        question: "Hefewizen is a wheat beer.",
        answers: {
            a: 'True',
            b: 'False'
        },
        correctAnswer: 'True'
    },
    {
        question: "Pilsners are a type of lager.",
        answers: {
            a: 'True',
            b: 'False'
        },
        correctAnswer: 'False'
    },
    {
        question: "Yeast turns the sugars of the grain into alcohol.",
        answers: {
            a: 'True',
            b: 'False'
        },
        correctAnswer: 'True'
    },
    {
        question: "Yeast acts a preservative.",
        answers: {
            a: 'True',
            b: 'False'
        },
        correctAnswer: 'False'
    },
    {
        question: "Hops add flavor to beer.",
        answers: {
            a: 'True',
            b: 'False'
        },
        correctAnswer: 'True'
    },
    {
        question: "Hops add aroma to beer.",
        answers: {
            a: 'True',
            b: 'False'
        },
        correctAnswer: 'True'
    }
]; 

//Generate the qame in HTML
var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton); 


 function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

	function showQuestions(questions, quizContainer){
           
        // we'll need a place to store the output and the answer choices
	var output = [];
	var answers;

	// for each question...
	for(var i=0; i<questions.length; i++){
		
		// first reset the list of answers
		answers = [];

		// for each available answer to this question...
		for(letter in questions[i].answers){

			// ...add an html radio button
			answers.push(
				'<label>'
					+ '<input type="radio" name="question'+i+'" value="'+letter+'">'
					+ letter + ': '
					+ questions[i].answers[letter]
				+ '</label>'
			);
		}

		// add this question and its answers to the output
		output.push(
			'<div class="question">' + questions[i].question + '</div>'
			+ '<div class="answers">' + answers.join('') + '</div>'
		);
	}

	// finally combine our output list into one string of html and put it on the page
	quizContainer.innerHTML = output.join('');
    }
    
    
	function showResults(questions, quizContainer, resultsContainer){
		// gather answer containers from our quiz
	var answerContainers = quizContainer.querySelectorAll('.answers');
	
	// keep track of user's answers
	var userAnswer = '';
	var numCorrect = 0;
	
	// for each question...
	for(var i=0; i<questions.length; i++){

		// find selected answer
		userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
		
		// if answer is correct
		if(userAnswer===questions[i].correctAnswer){
			// add to the number of correct answers
			numCorrect++;
			
			// color the answers green
			answerContainers[i].style.color = 'lightgreen';
		}
		// if answer is wrong or blank
		else{
			// color the answers red
			answerContainers[i].style.color = 'red';
		}
	}

	// show number of correct answers out of total
	resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
}

// show the questions. Is this in right place?
showQuestions(questions, quizContainer);


	//when user clicks submit, show results. Is this in right place?
	submitButton.onclick = function(){
		showResults(questions, quizContainer, resultsContainer);
    }
} //function generate quiz bracket    
 /*questions 2nd technique
  questions: {
    question1: "IPA stands for Indepenent Pale Ale.",
    question2: "Roasting the barley makes stouts and porters dark.",
    question3: "Hefewizen is a wheat beer.",
    question4: "Pilsners are a type of lager.",
    question5: "Yeast turns the sugars of the grain into alcohol.",
    question6: "Yeast acts a preservative.",
    question7: "Hops add flavor to beer.",
    question8: "Hops add aroma to beer.",
  }
//Answer choices
choices: {
    question1: ["True", "False"],
    question2: ["True", "False"],
    question3: ["True", "False"],
    question4: ["True", "False"],
    question5: ["True", "False"],
    question6: ["True", "False"],
    question7: ["True", "False"],
    question8: ["True", "False"],

  }

//Apply answers to questions
  answers: {
    question1: "False",
    question2: "True",
    question3: "True",
    question4: "False",
    question5: "True",
    question6: "False",
    question7: "True",
    question8: "True",

  }
 */

// Build timer reference https://fengyuanchen.github.io/countdown/

/*Timer starts running
$('#timer').text(trivia.timer);
*/
//Button on click events for answers record answers

//Only one answer can be selected


//All Done Button shows results

//Timer runs out and results are displayed

//Maybe add another set of questions for round two?

