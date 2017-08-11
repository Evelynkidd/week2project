$(document).ready(function() {
  $("#quiz").submit(function() {
    event.preventDefault();

  var questionone = parseInt($("#question1").val())
  var questiontwo = parseInt($("#question2").val())
  var questionthree = parseInt($("#question3").val())
  var questionfour = parseInt($("#question4").val())
  var questionfive = parseInt($("#question5").val())
  var nameInput = $("input.name").val();
  $(".name1").text(nameInput);
  var result = nameInput
  console.log(result)

  // var result = questionthree
  // console.log(result)

  if (questionone === 2 && questiontwo === 2 && questionthree === 2 && questionfour === 2 && questionfive === 2) {
  $("#JavaAnswer").toggle();
} else if (questionone === 1 && questiontwo === 1 && questionthree == 1 && questionfour === 1 && questionfive === 1) {
    $("#CSharpAnswer").toggle();
  } else if (questionone === 3 && questiontwo === 3 && questionthree === 3 && questionfour === 3 && questionfive === 3) {
    $("#RubyAnswer").toggle();
  } else {
    $("#NoAnswer").toggle();
    }
  });
});
