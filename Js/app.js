function populate(){
  if(quiz.isEnded()){
    showScores();
  }
  else{
    //show questions
    var element = document.getElementById("question");
    element.innerHTML =quiz.getQuestionByIndex().text;
    //show choices
    var choices = quiz.getQuestionByIndex().choices;
    for(var i=0; i<choices.length;i++){
      var element = document.getElementById("choice"+i);
      element.innerHTML=choices[i];
      test("btn"+i,choices[i]);
    }
    //show cuurent progress
    var element=document.getElementById("progress");
    element.innerHTML="Question "+(quiz.questionIndex+1)+" of "+quiz.questions.length;
   }
}

function test(id,guess){
  var button =document.getElementById(id);
  button.onclick=function(){
    quiz.guess(guess);
    populate();
  }
}
function showScores(){
  var gameOverHtml ="<h1>Result</h1>";
      gameOverHtml +="<h2 id='score'>Your Score: "+quiz.score+ "</h1>";
  var element = document.getElementById("quiz");
  element.innerHTML=gameOverHtml;
}
var questions=[
  new Question("Which one is not an object oriented programing language?",["Java","C#","C++","C"],"C"),
  new Question("Which language is used for styling web pages?",["HTML","JQuery","Css","Xml"],"Css"),
  new Question("Which are __ main components of object oriented programing?",["1","6","2","4"],"4"),
  new Question("Which language is used for web apps?",["PHP","Python","Javascript","All"],"All"),
  new Question("What is MVS?",["Language","Library#","Framework","All"],"Framework")
];

var quiz = new Quiz(questions);

populate();
