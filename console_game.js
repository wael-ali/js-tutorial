// the function costructor
var Question  = function(question, rightAnswer){
  this.question = question;
  this.rightAnswer  = rightAnswer;
}

Question.prototype.options = function(params) {
  // body...
  for (var i = 0; i < params.length; i++) {
    console.log(i + ' - ' + params[i] ); 
  }
};

// questions
var q1  = new Question('Do you like JavaScript?', 'yes');
var q2 = new Question('lerning js is ??', 'fun');
var q3 = new Question('js is a .....', 'oop language');
// answer arrays
var options1 =['yes', 'no'];
var options2 = ['hard to learn language', 'oop language', 'inheritance nonsupprter language'];
var options3 = ['boring','altemate hard', 'fun', 'stupid'];
// array of questions and options
var questions = [q1, q2, q3];
var answerOptions = [options1, options2, options3];
// 
function showQuestion(){
  var random = randomNum();
  console.log(questions[random].question);
  questions[random].options(answerOptions[random]);
  console.log('-----------------------------------------');
}


// random number
function randomNum(){
  return Math.floor(Math.random() * 3 );
}


// calling functions
console.log(randomNum());
showQuestion();
