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
function nextQuestion(){
  var n = Math.floor(Math.random() * questions.length);
  questions[n].displayQuestion();
  var answer = prompt("Please select the correct answer");
  if (answer !== 'exit') { 
    questions[n].checkAnswer(parseInt(answer));
    nextQuestion();
  }
}

nextQuestion();





// the end od the IFE protectmode
})();

