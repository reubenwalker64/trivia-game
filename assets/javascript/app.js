//JavaScript for the logic and jQuery to manipulate HTML

$(document).ready(function(){
// click event for button #begin
//Button on click event shows questions and Answers. Check "" in p

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
//Apply answers to questions
  answers: {
      q1: "False",
      q1: "True",
      q1: "True",
      q1: "False",
      q1: "True",
      q1: "False",
      q1: "True",
      q1: "True",

  }
// Build timer reference https://fengyuanchen.github.io/countdown/

//Timer starts running
$('#timer').text(trivia.timer);
//Button on click events for answers record answers

//Only one answer can be selected


//All Done Button shows results

//Timer runs out and results are displayed

//Maybe add another set of questions for round two?

}