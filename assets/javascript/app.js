function submitAnswers() {
    var total = 5;
    var score = 0;

    // Get User Input
    var q1 = document.forms["quizForm"]["q1"].value;
    var q2 = document.forms["quizForm"]["q2"].value;
    var q3 = document.forms["quizForm"]["q3"].value;
    var q4 = document.forms["quizForm"]["q4"].value;
    var q5 = document.forms["quizForm"]["q5"].value;

    // Validation
    for (i = 1; i <= total; i++) {
        if (eval('q' + i) == null || eval('q' + i) == '') {
            alert("You haven't completed the quiz");
            return false;
        }
    }

    // Set Correct Answers
    var answers = ["d", "c", "a", "a", "c"];

    // Check Answers
    for (i = 1; i <= total; i++) {
        // console.log(eval(q + i))
        if (eval('q' + i) == answers[i - 1]) {
            score++;


        }
    }

    // Display Results
    var results = document.getElementById('results');
    results.innerHTML = '<h3>You scored <span>' + score + '</span> out of <span>' + total + '</span></h3>';
    alert('You scored ' + score + ' out of ' + total);

    return false;
}
//Time Out Function
var myVar;

function myFunction() {
    myVar = setTimeout(function() { alert("Time's Up!") }, 30000);
}

function myStopFunction() {
    clearTimeout(myVar);



}
myFunction()

//myStopFunction()