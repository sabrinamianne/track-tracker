$(document).ready(function() {
  $("form#track").submit(function(event) {

    var name_user = $("input#namequestion").val().toUpperCase();
    var age = parseInt($("input#agequestion").val());
    var answer1 = $("select#question1").val();
    var answer2 = $("select#question2").val();
    var answer3 = $("select#question3").val();
    var answer4 = $("select#question4").val();
    var answer5 = $("select#question5").val();
    var number_result = 0 ;



    if (age <=40 ) {
      number_result += 20
    }

    else if (age >= 40 ) {
      number_result += 10
    }

    else {
      alert ("Please, enter your answers.")
    }

    if (answer1 === 'no') {
      number_result += 10
    }

    else if (answer1 === 'yes') {
      number_result += 300
    }

    else if (answer1 === 'whynot') {
      number_result += 20
    }

    if (answer2 === 'ans1') {
      number_result += 20
    }

    else if (answer2 === 'ans2') {
      number_result += 10
    }

    if (answer3 === 'ux') {
      number_result += 50
    }

    else if (answer3 === 'data') {
      number_result += 100
    }

    if (answer4 === 'webD') {
      number_result += 30
    }

    else if (answer4 === 'softwareD') {
      number_result += 80
    }

    if (answer5 === 'mob') {
      number_result -= 40
    }

    else if (answer5 === 'desktop') {
      number_result += 30
    }

    if (number_result <= 110) {
      $("#user_name").empty().append(name_user);
      $("#track_result").empty().append("CSS/DESIGN : Your score is in the amount of "+ number_result + " , that means you prefer to focus on design and see yourself more as Web Developer.");
      $("#result").show();
    }

    if ((number_result > 110) && (number_result < 250)) {
      $("#user_name").empty().append(name_user);
      $("#track_result").empty().append("RUBY/RAILS : Your score is in the amount of "+ number_result + " , that means you prefer to focus on UX (User Experience) for mobile and see yourself more as Software Developer.");
      $("#result").show();
    }

    if (number_result >= 250) {
      $("#user_name").empty().append(name_user);
      $("#track_result").empty().append("C#/.NET : Your score is in the amount of "+ number_result + " , that means you prefer to focus on Data (Back-end) and see yourself more as Software Developer at Microsoft :)");
      $("#result").show();
    }

    event.preventDefault();
  });
});
