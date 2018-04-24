var correct = 0;
var incorrect = 0;
var unAnswered = 0;
var count = 30;
var intervalId = setInterval(Timer, 1000);
var an1;
var an2;
var an3;
var an4;

$("#Quiz").append("<h2> What is the name of the Simpson's next door neighbor? </h2>");
$("#Quiz").append("<label class= radio-inline><input value= 'answer1' name='q1' type='radio' id='ned_flanders'>Ned Flanders</label><br><br>");
$("#Quiz").append("<label class= radio-inline><input value= 'wrong' name='q1' type='radio' id='nelson'>Nelson Muntz</label><br><br>");
$("#Quiz").append("<label class= radio-inline><input value= 'wrong' name='q1' type='radio' id='millhouse'>Milhouse Van Houten</label><br><br>");
$("#Quiz").append("<label class= radio-inline><input value= 'wrong' name='q1' type='radio' id='ralph'>Ralph Wiggum</label><br><br>");

$("#Quiz").append("<h2> What did Homer buy Marge for her 34th birthday? </h2>");
$("#Quiz").append("<label class= radio-inline><input value= 'wrong' name='q2' type='radio' id='flowers'>Flowers</label><br><br>");
$("#Quiz").append("<label class= radio-inline><input value= 'wrong' name='q2' type='radio' id='donuts'>Donuts</label><br><br>");
$("#Quiz").append("<label class= radio-inline><input value= 'answer2' name='q2' type='radio' id='bowling'>Bowling Ball</label><br><br>");
$("#Quiz").append("<label class= radio-inline><input value= 'wrong' name='q2' type='radio' id='cake'>Cake</label><br><br>");

$("#Quiz").append("<h2> What did homer smuggle on board the space shuttle? </h2>");
$("#Quiz").append("<label class= radio-inline><input value= 'wrong' name='q3' type='radio' id='donutsQ3'>Donuts</label><br><br>");
$("#Quiz").append("<label class= radio-inline><input value= 'answer3' name='q3' type='radio' id='chips'>Potato Chips</label><br><br>");
$("#Quiz").append("<label class= radio-inline><input value= 'wrong' name='q3' type='radio' id='pizza'>Pizza</label><br><br>");
$("#Quiz").append("<label class= radio-inline><input value= 'wrong' name='q3' type='radio' id='duff'>Duff Beer</label><br><br>");

$("#Quiz").append("<h2> What game can't Lisa play because she is too sad? </h2>");
$("#Quiz").append("<label class= radio-inline><input value= 'wrong' name='q4' type='radio' id='basketball'>Basket Ball</label><br><br>");
$("#Quiz").append("<label class= radio-inline><input value= 'wrong' name='q4' type='radio' id='baseball'>Baseball</label><br><br>");
$("#Quiz").append("<label class= radio-inline><input value= 'wrong' name='q4' type='radio' id='football'>Football</label><br><br>");
$("#Quiz").append("<label class= radio-inline><input value= 'answer4' name='q4'type='radio' id='dodgeball'>Dodgeball</label><br><br>");
    
// Timer Functions
function Timer() {
    count--;
    if (count === 0) {
    TimerStop();
    $("#QuizBox").hide();
    $("#resultPage").show();
    ScoreCheck(); 
    }
    $("#timer").html("<h2> Time Remaining: " + count + "</h2>");
}

function TimerStop() {
    clearInterval(intervalId);
}
//End Timer Functions


// Check Questions and Answers function
function ScoreCheck() {
    an1 = $('input:radio[name=q1]:checked').val();
    an2 = $('input:radio[name=q2]:checked').val();
    an3 = $('input:radio[name=q3]:checked').val();
    an4 = $('input:radio[name=q4]:checked').val();

    console.log("an1: " + an1);
    console.log("an2: " + an2);
    console.log("an3: " + an3);
    console.log("an4: " + an4);

    if (an1 == 'answer1') {
        correct++;
    } else  if (an1 == undefined) {
        unAnswered++;
    } else {
        incorrect++;
    }
    
    if (an2 == 'answer2') {
        correct++;
    } else  if (an2 == undefined) {
        unAnswered++;
    } else {
        incorrect++;
    }
    
    if (an3 == 'answer3') {
        correct++;
    } else  if (an3 == undefined) {
        unAnswered++;
    } else {
        incorrect++;
    }
    
    if (an4 == 'answer4') {
        correct++;
    } else  if (an4 == undefined) {
        unAnswered++;
    } else {
        incorrect++;
    }

    DisplayResults();
}

function DisplayResults () {
    $("#resultTitle").append("Here Are Your Results!");
    $("#correct").append("Correct Answers: " + correct);
    $("#incorrect").append("Incorrect Answers: " + incorrect);
    $("#unAnswered").append("Questions Left Blank: " + unAnswered);
}



$( document ).ready(function() {
    
    //In Game Start Button
    $("#startBtn").click(function(){
    $("#Title").html("<h1>Trivia Game</h2>");
    $("#submitBtn").html("<button> Submit </button");
    $("#QuizBox").show();
    $("#submitBtn").show();
    $("#startBtn").hide();
    $("#Quiz").append("<h2> What is the name of the Simpson's next door neighbor? </h2>");
    $("#Quiz").append("<label class= radio-inline><input value= 'answer1' name='q1' type='radio' id='ned_flanders'>Ned Flanders</label><br><br>");
    $("#Quiz").append("<label class= radio-inline><input value= 'wrong' name='q1' type='radio' id='nelson'>Nelson Muntz</label><br><br>");
    $("#Quiz").append("<label class= radio-inline><input value= 'wrong' name='q1' type='radio' id='millhouse'>Milhouse Van Houten</label><br><br>");
    $("#Quiz").append("<label class= radio-inline><input value= 'wrong' name='q1' type='radio' id='ralph'>Ralph Wiggum</label><br><br>");

    $("#Quiz").append("<h2> What did Homer buy Marge for her 34th birthday? </h2>");
    $("#Quiz").append("<label class= radio-inline><input value= 'wrong' name='q2' type='radio' id='flowers'>Flowers</label><br><br>");
    $("#Quiz").append("<label class= radio-inline><input value= 'wrong' name='q2' type='radio' id='donuts'>Donuts</label><br><br>");
    $("#Quiz").append("<label class= radio-inline><input value= 'answer2' name='q2' type='radio' id='bowling'>Bowling Ball</label><br><br>");
    $("#Quiz").append("<label class= radio-inline><input value= 'wrong' name='q2' type='radio' id='cake'>Cake</label><br><br>");

    $("#Quiz").append("<h2> What did homer smuggle on board the space shuttle? </h2>");
    $("#Quiz").append("<label class= radio-inline><input value= 'wrong' name='q3' type='radio' id='donutsQ3'>Donuts</label><br><br>");
    $("#Quiz").append("<label class= radio-inline><input value= 'answer3' name='q3' type='radio' id='chips'>Potato Chips</label><br><br>");
    $("#Quiz").append("<label class= radio-inline><input value= 'wrong' name='q3' type='radio' id='pizza'>Pizza</label><br><br>");
    $("#Quiz").append("<label class= radio-inline><input value= 'wrong' name='q3' type='radio' id='duff'>Duff Beer</label><br><br>");

    $("#Quiz").append("<h2> What game can't Lisa play because she is too sad? </h2>");
    $("#Quiz").append("<label class= radio-inline><input value= 'wrong' name='q4' type='radio' id='basketball'>Basket Ball</label><br><br>");
    $("#Quiz").append("<label class= radio-inline><input value= 'wrong' name='q4' type='radio' id='baseball'>Baseball</label><br><br>");
    $("#Quiz").append("<label class= radio-inline><input value= 'wrong' name='q4' type='radio' id='football'>Football</label><br><br>");
    $("#Quiz").append("<label class= radio-inline><input value= 'answer4' name='q4'type='radio' id='dodgeball'>Dodgeball</label><br><br>");
    Timer();
    });

    // In Game Submit Button
    $("#submitBtn").click(function() {
        TimerStop();
        $("#QuizBox").hide();
        $("#resultPage").show();
        ScoreCheck();
    });

    $("radio").click(function () {
        for (var i = 0; i < Questions.options[i]; i++) {
        var x = $('input[' + i + ']:checked').val();
        console.log(x);
        }
    });

});
