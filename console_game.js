// the function costructor
var Question  = function(question, rightAnswer){
  this.question = question;
  this.rightAnswer  = rightAnswer;
  this.options = function(params){
    for (var i = 0; i < params.length; i++) {
     console.log(i + '- ' + params[i] ); 
    }
  };
}


var q1  = new Question('Do you like JavaScript?', 'yes');
q1.options(['yes', 'no']);
