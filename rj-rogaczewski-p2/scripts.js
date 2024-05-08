// Initializing variables
let score = 0;
let currentQ = 0;
let questions = ["What is the name of the Major League Baseball team located in Los Angeles?",
"What NBA team does Stephen Curry play for?",
"When did the Milwaukee Bucks last win the NBA Finals?"];
let length = questions.length;

// Styling the Game by calling the classes
function sportsTrivia() {
    let getQ = document.getElementById("questions")
    getQ.innerHTML = questions[0];
    document.getElementById("answerQ").style = "block";
    document.getElementById("userInput").style = "block";
    document.getElementById("gameScore").style = "block";
    document.getElementById("confirmAnswer").style = "block";
}

// Start of the game
function gameStart() {
    let gameQ = document.getElementById("questions");
    let userAns = document.getElementById("userInput");

    // Using If and Else If statements to determine what question and if they got it right
    if (gameQ.innerHTML === "What is the name of the Major League Baseball team located in Los Angeles?" && userAns.value  === "Dodgers") {
        alert("You got it Correct!!!");
        currentQ++;
        gameQ.innerHTML = questions[currentQ];
        userAns.value = null;
        score++;
        document.getElementById("gameScore").innerHTML = "Game Score: " + score;
    }
    else if (gameQ.innerHTML === "What NBA team does Stephen Curry play for?" && userAns.value === "Warriors") {
        alert("Yessir!!");
        currentQ++;
        gameQ.innerHTML = questions[currentQ];
        userAns.value = null;
        score++;
        document.getElementById("gameScore").innerHTML = "Game Score: " + score;
    }
    else if (gameQ.innerHTML === "When did the Milwaukee Bucks last win the NBA Finals?" && userAns.value === "2021") {
        alert("Great Job!");
        userAns.value = null;
        document.getElementById("answerQ").style.display = "none"
        document.getElementById("userInput").style.display = "none"
        document.getElementById("confirmAnswer").style.display = "none"
        score++;
        gameQ.innerHTML = "Game Over. How'd you do???";
        document.getElementById("gameScore").innerHTML = "Game Score: " + score;
    }
    // Else statement used for when the user is wrong
    else {
        alert("Oh no, you don't know your sports... Darn!");
        userAns.value = null;
        document.getElementById("gameScore").innerHTML = "Game Score: " + score;
        if (currentQ < length-1) {
            currentQ++;
            gameQ.innerHTML = questions[currentQ];
        }
        else {
        document.getElementById("answerQ").style.display = "none"
        document.getElementById("userInput").style.display = "none"
        document.getElementById("confirmAnswer").style.display = "none"
        gameQ.innerHTML = "Game Over. How'd you do???";
        document.getElementById("startNewGame").innerHTML = "If you would like to play again, refresh this page."
        document.getElementById("gameScore").innerHTML = "Game Score: " + score;
        }
    }
}
