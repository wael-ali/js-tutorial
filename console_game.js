// to protect our code = make private == privacy
// by this our code is safe and can be included as aplugin in another code
// no other code would be able to override it
(function(){

// Question object
function Question(question, answers, correct){
  this.question = question;
  this.answers  = answers;
  this.correct  = correct;
}
// Question prototype
Question.prototype.displayQuestion = 
function(){
  console.log(this.question);

  for (var i = 0; i < this.answers.length; i++) {
    console.log(i + '-' + this.answers[i]);
  }
}

Question.prototype.checkAnswer = 
function(ans, callback){
  var sc;
  if (ans === this.correct){
    console.log('Correct Answer');
     sc = callback(true);
     this.displayScore(sc);
  }else{
    console.log('Wrong Answer. Try Again!');
    sc = callback(false);
    this.displayScore(sc);
  }
}

Question.prototype.displayScore =
function(score){
  console.log('Your current score is:  ' + score);
  console.log('------------------------------------');
}

// question instances
var q1 = new Question(
  "Is Berlin biger than Hamburg?",
  ["yes", "no"],
  0
  );
var q2 = new Question(
  "what is the name of france capital",
  ["london", "paris", "newyork"],
  1
  );
var q3 = new Question(
  "visiting china is ...?",
  ["boring", "dangerous", "Exiting", "bad"],
  2
  );

var questions = [q1, q2, q3];
// functions outside the object 
  // closure for upfdating the score
  function score(){
  var sc = 0;
  return function(correct){
    if (correct) {
      sc++;
    }
    return sc;
  }
}


var keepScore = score();

nextQuestion();
function nextQuestion(){
  var n = Math.floor(Math.random() * questions.length);
  questions[n].displayQuestion();
  var answer = prompt("Please select the correct answer");
  if (answer !== 'exit') { 
    questions[n].checkAnswer(parseInt(answer),keepScore);
    nextQuestion();
  }
}






// the end od the IFE protectmode
})();

