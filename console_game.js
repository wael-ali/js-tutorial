(function(){
  

function Question(question, answers, correct){
  this.question = question;
  this.answers  = answers;
  this.correct  = correct;
}

Question.prototype.displayQuestion = 
function(){
  console.log(this.Question);

  for (var i = 0; i < this.answers.length; i++) {
    console.log(i + '-' + this.answers[i]);
  }
}

Question.prototype.checkAnswer = 
function(ans){
  if (ans === this.correct){
    console.log('Correct Answer')
  }else{
    console.log('Wrong Answer. Try Again!');
  }
}


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
var n = Math.floor(Math.random() * questions.length);
questions[n].displayQuestion();
var answer = parseInt(prompt("Please select the correct answer"));
questions[n].checkAnswer(answer);
})();

