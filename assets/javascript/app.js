    //  Set our number counter to 60.
    var number = 60;

    //  Variable that will hold our interval ID when we execute
    //  the "run" function
    var intervalId;
  
    //  The run function sets an interval
    //  that runs the decrement function once a second.
    //  Clearing the intervalId prior to setting our new intervalId will not allow multiple instances.
    function run() {
      clearInterval(intervalId);
      intervalId = setInterval(decrement, 1000);
    }

    //  The decrement function.
    function decrement() {

      //  Decrease number by one.
      number--;

      //  Show the number in the #show-number tag.
      $("#show-number").html("<h3>" + number + "</h3>");


      //  Once number hits zero...
      if (number === 0) {

        //  ...run the stop function.
        stop();

        //  Alert the user that time is up.
       alert("Time Up! If you haven't already, select the all done button to see your score.");
      }
    }

    //  The stop function
    function stop() {

      //  Clears our intervalId
      //  We just pass the name of the interval
      //  to the clearInterval function.
      clearInterval(intervalId);
    }

    //  Execute the run function.
    run();

//Questions and Answers  
 var myQuestions = [
    {
        question: "IPA stands for Indepenent Pale Ale.",
        answers: {
            a: 'True',
            b: 'False'
        },
        correctAnswer: 'b'
    },
    {
        question: "Roasting the barley makes stouts and porters dark.",
        answers: {
            a: 'True',
            b: 'False'
        },
        correctAnswer: 'a'
    },
    {
        question: "Hefewizen is a wheat beer.",
        answers: {
            a: 'True',
            b: 'False'
        },
        correctAnswer: 'a'
    },
    {
        question: "Pilsners are a type of lager.",
        answers: {
            a: 'True',
            b: 'False'
        },
        correctAnswer: 'b'
    },
    {
        question: "Yeast turns the sugars of the grain into alcohol.",
        answers: {
            a: 'True',
            b: 'False'
        },
        correctAnswer: 'a'
    },
    {
        question: "Yeast acts a preservative.",
        answers: {
            a: 'True',
            b: 'False'
        },
        correctAnswer: 'b'
    },
    {
        question: "Barley, wheat, corn, and rice can be used to brew beer.",
        answers: {
            a: 'True',
            b: 'False'
        },
        correctAnswer: 'a'
    },
    {
        question: "Cider is a type of beer.",
        answers: {
            a: 'True',
            b: 'False'
        },
        correctAnswer: 'b'
    },
    {
        question: "Hops add flavor to beer.",
        answers: {
            a: 'True',
            b: 'False'
        },
        correctAnswer: 'a'
    },
    {
        question: "Hops add aroma to beer.",
        answers: {
            a: 'True',
            b: 'False'
        },
        correctAnswer: 'a'
    }
]; 

//Generate the qame in HTML
var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton); 


 function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

	function showQuestions(questions, quizContainer){
           
        // Place to store the output and the answer choices
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
					+ '\xa0' + letter + ': ' 
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
			answerContainers[i].style.color = '#0780F9';
		}
		// if answer is wrong or blank
		else{
			// color the answers red
			answerContainers[i].style.color = '#F9E607';
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
} 

