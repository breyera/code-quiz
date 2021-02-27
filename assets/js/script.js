var startButton = document.querySelector('.start-button');
var timer = document.querySelector('.timer');
var showTime = document.querySelector('.showTime');
var welcome = document.querySelector('.welcome');
var quizContent = document.querySelector('.quiz-content');
var questionsArray = document.querySelector('.question');
var choiceA = document.querySelector('.choiceA');
var choiceB = document.querySelector('.choiceB');
var choiceC = document.querySelector('.choiceC');
var rightWrong = document.querySelector('.rightwrong');
var scoreCount = document.querySelector('.scoreCount');
var submitButton = document.getElementById('.submit');
var scoreList = document.querySelector('.score-list');
var clearScore = document.querySelector('.clearScore');
var playAgain = document.querySelector('.play-again');
var resultsBox = document.querySelector('.results');
var resultsScore = document.querySelector('.results-score');
var boxFooter = document.querySelector('.box-footer');
var initialsInput = document.querySelector('.name-content');
var scoreForm = document.querySelector('.score-results');
var scoreForm1 = document.querySelector('.score-form1');
var scoreList = document.querySelector('.score-list');
var seeScores = document.querySelector('.view');
var count = 0;
var score = 0;
var currentQuest = 0;
var initialsList = [];
var quizQuestions = [
    {
        question: ,
        choices: ['blue', 'red', 'yellow'],
        correctAnswer: 'blue' //compare text on button to text in correctAnswer
    }, 
    {
        question: ,
        choiceA: ,
        choiceB: ,
        choiceC: ,
        correctAnswer:
    },
    {
        question: ,
        choiceA: ,
        choiceB: ,
        choiceC: ,
        correctAnswer:
    },
    {
        question: ,
        choiceA: ,
        choiceB: ,
        choiceC: ,
        correctAnswer:
    },
    {
        question: ,
        choiceA: ,
        choiceB: ,
        choiceC: ,
        correctAnswer:
    },
    {
        question: ,
        choiceA: ,
        choiceB: ,
        choiceC: ,
        correctAnswer:
    },
];


//on button click, add class invisible to welcome and remove class of invisble from quiz-box
// at end of on click, call get question function 

//call first question // quizQuestion[currentQuest].question to call on new questions and use .textContent to add to page
//loop through quizQuestion[currentQuest].choices.length and add text to buttons
//compare text on button they clicked (this.text) to quizQuestion[currentQuest].correctAnswer, include score++ 
//if question is wrong, deduct 10s from timer (timer -= 10)
//currentQuest++ and then recall same question to loop through earlier display text, choices, etc. 
//create if statement to see if curretQuest === quizQuestions.length, if they are, run an end quiz function making this section invisible and results section visible

//user setInterval to start timer

//create function to have results page show and input initials
//call score and display value 
//on submit button click, add initials(name-content.value) and score (the global variable) to local storage

//when submit button is clicked, hide results and display results-score section and call initials and score from local storage
//on click of clear scores, clear local storage
//on click of play again, redirect them to index.html

//on click of high scores button, display high scores section

//create funtion to render high score page - reset the page and loop through the scores, and make play again button visible


