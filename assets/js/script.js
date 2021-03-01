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
var submitButton = document.querySelector('#submit');
var scoreList = document.querySelector('.score-list');
var clearScore = document.querySelector('.clearScore');
var playAgain = document.querySelector('.play-again');
var resultsBox = document.querySelector('.results');
var highScores = document.querySelector('.high-scores');
var boxFooter = document.querySelector('.box-footer');
var initialsInput = document.querySelector('.name-content');
var scoreForm = document.querySelector('.score-results');
var scoreForm1 = document.querySelector('.score-form1');
var scoreList = document.querySelector('.score-list');
var seeScores = document.querySelector('.view');
var count = 0;
var score = 0;
var shouldSubmit = true;
var currentQuest = 0;
var initialsList = [];
var quizQuestions = [
    {
        question: 'Why do JavaScript and Java have similar names',
        choiceA: "JavaScript is a stripped-down version of Java",
        choiceB: "JavaScript's syntax is loosely based on Java's", 
        choiceC: "They both originated on the island of Java",
        correctAnswer: "JavaScript's syntax is loosely based on Java's"
    }, 
    {
        question: 'When a user views a page containing a JavaScript program, which machine actually executes the script?',
        choiceA: "The User's machine running a Web browser",
        choiceB: "The Web server",
        choiceC: "A central machine deep within Netscape's corporate offices",
        correctAnswer: "The User's machine running a Web browser"
    },
    {
        question: " _____ JavaScript statements embedded in an HTML page can respond to user events such as mouse-clicks, form input, and page navigation.",
        choiceA: 'Client-side',
        choiceB: 'Server-side',
        choiceC: 'Local',
        correctAnswer: 'Client-side'
    },
    {
        question: 'Using _______ statement is how you test for a specific condition.',
        choiceA: 'For',
        choiceB: 'If',
        choiceC: 'Switch',
        correctAnswer: 'If'
    },
    {
        question: 'What is mean by "this" keyword in javascript?',
        choiceA: 'It refers current object',
        choiceB: 'It referes previous object',
        choiceC: 'It is variable which contains value',
        correctAnswer: 'It refers current object'
    },
    {
        question: 'Choose the correct JavaScript syntax to change the content of the following HTML code.',
        choiceA: 'document.getElement(“letsfindcourse").innerHTML = "I am a letsfindcourse";',
        choiceB: 'document.getElementById(“letsfindcourse").innerHTML = "I am a letsfindcourse";',
        choiceC: 'document.getElementById(“letsfindcourse").innerHTML = I am a letsfindcourse;',
        correctAnswer: 'document.getElementById(“letsfindcourse").innerHTML = "I am a letsfindcourse";'
    },
    {
        question: 'What are the three important manipulations done in a for loop on a loop variable in javascript?',
        choiceA: 'the initialization, the Incrementation, and update',
        choiceB: 'the initialization, the test, and the update',
        choiceC: 'the initialization, the test, and Incrementation',
        correctAnswer: 'the initialization, the test, and the update'
    }
];

//add event listener to START QUIZ so timer and questions run
startButton.addEventListener('click', runQuestions);
startButton.addEventListener('click', () => {
    document.querySelector('#onclick').classList.add('myClass');
  });
//set timer and count down
function startTimer() {
    count = 60;
    timer = setInterval(() => {
        if (count < 1) {
            createScore();
        }
        count--;
        showTime.textContent = count;
    }, 1000);
    getQuestions();
}

 //hide welcome section and remove invisible class from quiz-content
 function runQuestions() {
    startTimer();
    welcome.classList.add('invisible');
    getQuestions();
    quizContent.classList.remove('invisible');
    shouldSubmit = true;
}

//call first question to be displayed when time starts
function getQuestions() {
    var questions = quizQuestions[currentQuest];
    questionsArray.innerHTML = "<p>" + questions.question + "</p>";
    choiceA.innerHTML = questions.choiceA;
    choiceB.innerHTML = questions.choiceB;
    choiceC.innerHTML = questions.choiceC;
}
//add event listeners to multiple choice buttons
choiceA.addEventListener('click', checkButton);
choiceB.addEventListener('click', checkButton);
choiceC.addEventListener('click', checkButton);

//check answer chosen against text to confirm right or wrong to then add or subtract points 
var nextQuestion = quizQuestions.length - 1; 
function checkButton(answer) {
    if (answer.target.textContent === quizQuestions[currentQuest].correctAnswer) {
        score = score += 1;
        rightWrong.textContent = 'Correct! The answer is: ' + quizQuestions[currentQuest].correctAnswer;
    } else {
        count = count - 10;
        rightWrong.textContent = 'Wrong! The correct answer is: ' + quizQuestions[currentQuest].correctAnswer;
    }
    
    if (currentQuest < nextQuestion && count > 0) {
        currentQuest++;
        getQuestions();
    } else if (currentQuest === nextQuestion || count === 0) {
        createScore();
    }
}

init();

//create function to show score and allow user to add initials to log
function createScore() {
    clearInterval(timer);
    quizContent.textContent = '';
    showTime.classList.add('invisible');
    boxFooter.classList.add('invisible');
    resultsBox.classList.remove('invisible');
    highScores.style.display = 'block';
    scoreCount.textContent = score;
    scoreList.innerHTML = '';

    for (var i = 0; i < initialsList.length; i++) {
        var iList = initialsList[i];

        var li = document.createElement('li');
        li.textContent = iList;
        scoreList.appendChild(li);
    }
}

//store initials in local storage, pull when needed, and add initials to list
function init() {
    var storeInitials = JSON.parse(localStorage.getItem('initialsList'));
    if (storeInitials !== null) {
        initialsList = storeInitials;
    }
}
function storeInitials() {
    localStorage.setItem('initialsList', JSON.stringify(initialsList));
}
submitButton.addEventListener('click', function(event) {
    event.preventDefault();
    if (shouldSubmit) {
        var initialsText = initialsInput.value.trim();
        console.log(initialsText);

        if (initialsText === '') {
            return;
        }

        initialsList.push(initialsText + ": " + score);
        initialsList.value = "";
        //disable button so cannot be clicked twice
        shouldSubmit = false;

        storeInitials();
        createScore();
    }
});

// clear initials on clear scores button click
function clearInitials() {
    window.localStorage.clear();
    initialsList = '';
}
clearScore.addEventListener('click', function(event) {
    event.preventDefault;
    clearInitials();
    createScore();
});

//view highscore button when clicked displays high scores page
seeScores.addEventListener('click', showHighscores);
function showHighscores() {
    welcome.classList.add('invisible');
    quizContent.classList.add('invisible');
    resultsBox.style.display = "block";
    scoreForm.classList.add('invisible');
    clearInterval(timer);

    var seeHighscores = JSON.parse(localStorage.getItem('initialsList'));
    scoreList.innerHTML = '';
    for (var i = 0; i < seeHighscores.length; i++) {
        var list = seeHighscores[i];
        var highscoreLi = document.createElement('li');
        highscoreLi.textContent = list;
        scoreList.appendChild(highscoreLi);
    }
}
