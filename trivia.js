$(document).ready(function() {
    function openingPage() {
        openScreen = "<p class='text-center main-button-container'><a class='btn btn-warning btn-md btn-block start-button' href='#' role='button'>Start Quiz</a></p>";
        $("#mainArea").append(openScreen);
    }
    openingPage();
    $("#mainArea").on("click", ".start-button", function(event){
        event.preventDefault();  
        
        $('.jumbotron').hide();
            
        generateQuestions();
    
        timerWrapper();
    });  
    $("body").on("click", ".answer", function(event){
        selectedAnswer = $(this).text();
        
        selectedAnswer === correctAnswers[questionCounter] ? (
           
            clearInterval(theClock),
            generateWin()) :
            
            (
            clearInterval(theClock),
            generateLoss()
        )
    }); 
    
    $("body").on("click", ".reset-button", function(event){
        
        resetGame();
    }); 
    
    });  
    
    function timeoutLoss() {
        unansweredTally++;
        gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>You ran out of time!  The correct answer was: " + correctAnswers[questionCounter] + "</p>" + "<img class='center-block img-wrong' src='assets/imgs/yy.gif'>";
        $("#mainArea").html(gameHTML);
        setTimeout(wait, 3000);  
    }
    
    function generateWin() {
        correctTally++;
        gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>Correct! The answer is: " + correctAnswers[questionCounter] + "</p>" + imageArray[questionCounter];
        $("#mainArea").html(gameHTML);
       
        setTimeout(wait, 3000);  
    }
    
    function generateLoss() {
        incorrectTally++;
        gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>Wrong! The correct answer is: "+ correctAnswers[questionCounter] + "</p>" + "<img class='center-block img-wrong' src='assets/imgs/nope.gif'>";
        $("#mainArea").html(gameHTML);
        setTimeout(wait, 3000); 
    }
    function generateQuestions() {
        gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>15</span></p><p class='text-center'>" + questionArray[questionCounter] + "</p><p class='first-answer answer'>A. " + answerArray[questionCounter][0] + "</p><p class='answer'>B. "+answerArray[questionCounter][1]+"</p><p class='answer'>C. "+answerArray[questionCounter][2]+"</p><p class='answer'>D. "+answerArray[questionCounter][3]+"</p>";
        $("#mainArea").html(gameHTML);
    }; 
    
    function wait() {
        
    questionCounter < 7 ? 
        (questionCounter++,
        generateQuestions(),
        counter = 15,
        timerWrapper() ):
        
       (finalScreen())
    }; 
    
    function timerWrapper() {
        theClock = setInterval(thirtySeconds, 1000);
        function thirtySeconds() {
            if (counter === 0) {
                clearInterval(theClock);
                timeoutLoss();
            }
            if (counter > 0) {
                counter--;
            }
            $(".timer").html(counter);
        }
    }
    
    function finalScreen() {
        gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>All done, here's how you did!" + "</p>" + "<p class='summary-correct'>Correct Answers: " + correctTally + "</p>" + "<p>Wrong Answers: " + incorrectTally + "</p>" + "<p>Unanswered: " + unansweredTally + "</p>" + "<p class='text-center reset-button-container'><a class='btn btn-warning btn-md btn-block reset-button' href='#' role='button'>Reset The Quiz!</a></p>";
        $("#mainArea").html(gameHTML);
    }
    
    function resetGame() {
        questionCounter = 0;
        correctTally = 0;
        incorrectTally = 0;
        unansweredTally = 0;
        counter = 15;
        generateQuestions();
        timerWrapper();
    }
    
    var openScreen;
    var gameHTML;
    var counter = 15;
    var questionArray = 
    [ "0-Whom did Kakashi get his eye from?", 
    " 1-Who held Naruto hostage when he was born?", 
    "2-Naruto is a container of which Tailed-Beast?", 
    "3- Who does not have a Kekkei Genkai?", 
    "4-Which Hokage sealed the nine-tailed fox inside Naruto?", 
    "'5-What village does Naruto belong to?", 
    "6-Who was the first ninja to be attacked by Naruto's Rasengan-Shuriken?", 
    "7-Who among these people became jonin first?" ];

    var answerArray = [
        ["konan", "kisame", "Obito ", "Deidara "], 
        ["Sakura","Madara ","Danzo","Kakashi"], 
        ["4-Tailed Beast ", "9-Tailed Beast ", "5-Tailed Beast ", "6-Tailed Beast "], 
        ["Neji", "ten-ten", "Naruto ", "Sakura"], 
        ["2-Hokage", "4-Hokage", "1-Hokage", "3-Hokage"], 
        ["sunagakure","konohagakure","Amegakure","Yukigakure"], 
        ["Pein", "kakuzu", "Sasuke", "Orochimaru"], 
        ["itachi","kakahi","naruto","sasuke"], ];

    var imageArray = new Array(); 
    imageArray[0] = "<img class='center-block' src='assets/imgs/1.gif'>";
    imageArray[1] = "<img class='center-block' src='assets/imgs/2.gif'>"; 
    imageArray[2] = "<img class='center-block' src='assets/imgs/4.gif'>"; 
    imageArray[3] = "<img class='center-block' src='assets/imgs/rk.gif'>";  
    imageArray[4] = "<img class='center-block' src='assets/imgs/44.gif'>"; 
    imageArray[5] = "<img class='center-block' src='assets/imgs/ll.gif'>"; 
    imageArray[6] = "<img class='center-block' src='assets/imgs/6.gif'>"; 
    imageArray[7] = "<img class='center-block' src='assets/imgs/btg.gif'>"; 

    var correctAnswers = 
    [ "C. Obito ", 
    "B. Madara ", 
    "B. 9-Tailed Beast", 
    "C. Naruto ", 
    "B. 4-Hokage", 
    "B. konohagakure", 
    "A. Pein", 
    "D. sasuke"];

    var questionCounter = 0;
    var selecterAnswer;
    var theClock;
    var correctTally = 0;
    var incorrectTally = 0;
    var unansweredTally = 0;

