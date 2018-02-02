// the function costructor
var Question  = function(question, rightAnswer){
  this.question = question;
  this.rightAnswer  = rightAnswer;
}
// inheritance through the protptype property
Question.prototype.showOptions = function(params) {
  // body...
  for (var i = 0; i < params.length; i++) {
    console.log(i + ' - ' + params[i] ); 
  }
};

// variabls
var userAnswer, score , playing, counter;
init();
// questions
var q1 = new Question('Do you like JavaScript?', 'yes');
var q2 = new Question('lerning js is ??', 'fun');
var q3 = new Question('js is a .....', 'oop language');
// answers arrays
var options1 = ['yes', 'no'];
var options3 = ['hard to learn language', 'oop language', 'inheritance nonsupprter language'];
var options2 = ['boring','altemate hard', 'fun', 'stupid'];
// array of questions and options
var questions = [q1, q2, q3];
var answerOptions = [options1, options2, options3];

function showQuestion(){
  var random = randomNum();
  console.log(questions[random].question);
  questions[random].showOptions(answerOptions[random]);
  
  getAnswer('answer the question in console!');
  // doesn't continue till user enter a number
  while (isNaN(userAnswer)){getAnswer('Enter a number only!!');}
  if(answersArray(answerOptions[random]).includes(userAnswer)){
    //console.log(answerOptions.indexOf(questions[random].rightAnswer));
   if (userAnswer === answerOptions[random].indexOf(questions[random].rightAnswer)) {
      console.log('brelient!!');
      score += 1;
      console.log('-----------------------------------------');
    }
    console.log('Your score: ' + score);

  }else{
    console.log('Ooops!!, doesn\'t belongs to the options');
    console.log('-----------------------------------------');
  }
}

function getAnswer(message){
  userAnswer =  Math.floor(prompt(message));
  //if (true) {}
}

// random number
function randomNum(){
  return Math.floor(Math.random() * 3 );
}

// array of indexs of the answer options
function answersArray(arr){
  var anArr = [];
  for (var i = 0; i < arr.length; i++) {
    anArr.push(i);
  }
  return anArr;
}
// seting some value
function init(){
  userAnswer = 10;
  score = 0;
  playing = true;
  counter = 0;
}



// calling functions
while(playing){
  showQuestion();
  counter++;
  if (counter === 10) {
    playing = false;
  }
}


