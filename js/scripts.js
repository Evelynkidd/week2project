$(document).ready(function() {
  $("#quiz").submit(function() {
    event.preventDefault();

  var questionOne = parseInt($("#question1").val())
  var questionTwo = parseInt($("#question2").val())
  var questionThree = parseInt($("#question3").val())
  var questionFour = parseInt($("#question4").val())
  var questionFive = parseInt($("#question5").val())
  var nameInput = $("input.name").val();
  $(".name1").text(nameInput);

  if (questionThree === 2) {
  $("#JavaAnswer").fadeToggle();
} else if (questionOne == 1 && questionTwo === 1) {
    $("#CSharpAnswer").fadeToggle();
  } else if (questionOne === 3 && questionTwo === 3 && questionThree === 3 && questionFive === 3 || questionFive === 2) {
    $("#RubyAnswer").fadeToggle();
  } else {
    $("#NoAnswer").fadeToggle();
    }
  });
});
