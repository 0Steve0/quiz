function Quiz(questions){
  this.score = 0;
  this.questions = questions;
  this.questionIndex = 0;
}

Quiz.prototype.getQuestionByIndex = function(){
  return this.questions[this.questionIndex];
}

Quiz.prototype.isEnded = function(){
  return this.questions.length==(this.questionIndex+1);
}

Quiz.prototype.guess = function(answer){
  if(this.getQuestionByIndex().correctAnswer(answer)){
    this.score++;
  }
  this.questionIndex++;
}
