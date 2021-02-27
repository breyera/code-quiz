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
        question: 'Why do JavaScript and Java have similar names',
        choices: ["JavaScript is a stripped-down version of Java", "JavaScript's syntax is loosely based on Java's", "They both originated on the island of Java"],
        correctAnswer: "JavaScript's syntax is loosely based on Java's" //compare text on button to text in correctAnswer
    }, 
    {
        question: 'When a user views a page containing a JavaScript program, which machine actually executes the script?',
        choices: ["The User's machine running a Web browser", "The Web server", "A central machine deep within Netscape's corporate offices"],
        correctAnswer: "The User's machine running a Web browser"
    },
    {
        question: " _____ JavaScript statements embedded in an HTML page can respond to user events such as mouse-clicks, form input, and page navigation.",
        choices: ['Client-side', 'Server-side', 'Local'],
        correctAnswer: 'Client-side'
    },
    {
        question: 'Using _______ statement is how you test for a specific condition.',
        choices: ['For', 'If', 'Switch'],
        correctAnswer: 'If'
    },
    {
        question: 'What is mean by "this" keyword in javascript?',
        choices: ['It refers current object', 'It referes previous object', 'It is variable which contains value'],
        correctAnswer: 'It refers current object'
    },
    {
        question: 'Choose the correct JavaScript syntax to change the content of the following HTML code.',
        choices: ['document.getElement(“letsfindcourse").innerHTML = "I am a letsfindcourse";', 'document.getElementById(“letsfindcourse").innerHTML = "I am a letsfindcourse";', 'document.getElementById(“letsfindcourse").innerHTML = I am a letsfindcourse;'],
        correctAnswer: 'document.getElementById(“letsfindcourse").innerHTML = "I am a letsfindcourse";'
    },
    {
        question: 'What are the three important manipulations done in a for loop on a loop variable in javascript?',
        choices: ['the initialization, the Incrementation, and update', 'the initialization, the test, and the update', 'the initialization, the test, and Incrementation'],
        correctAnswer: 'the initialization, the test, and the update'
    }
];

//add event listener to START QUIZ so timer and questions run
startButton.addEventListener('click', runQuestions);

 //hide welcome section and remove invisible class from quiz-content
 function runQuestions() {
    startTimer();
    welcome.classList.add('invisible');
    getQuestions();
    quizContent.classList.remove('invisible');
}
//set timer and count down
function startTimer() {
    count = 60;
    timer = setInterval(() => {
        if (count < 1) {
            renderScores();
        }
        count--;
        showTime.textContent = count;
    }, 1000);
    getQuestions()
}
//pull questions 
function getQuestions() {
    var questions = quizQuestions[currentQuest];
    questionsArray.innerHTML = "<p>" + questions.question + "</p>";
    choiceA.innerHTML = questions.choices[0];
    choiceB.innerHTML = questions.choices[1];
    choiceC.innerHTML = questions.choices[2];
}
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


