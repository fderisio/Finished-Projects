// Ask player name
var user = prompt("Hi! Please enter your name to play");
while (user === 0) {
    user = prompt("Please enter your name!!");
}

// initialize variables
var userScore = 0;
var computerScore = 0;

// print player name
document.getElementById("userName").innerHTML = user + ":";

$('.playAgainButton').hide();

$('input[type="radio"]').click(function() {

  // player choice   
  var userSelector = $("input[type='radio'][name='element']:checked").val();
   
  // computer choice
  var computerSelector = Math.floor(Math.random() * 3);
  if (computerSelector == 1) {
    computerSelector = "piedra";
    $('#computerText').text('The computer has chosen:');
    $('.eleccionPC').text('Rock');
  } else if (computerSelector == 2) {
    computerSelector = "papel";
    $('#computerText').text('The computer has chosen:');
    $('.eleccionPC').text('Paper');
  } else {
    computerSelector = "tijera";
    $('#computerText').text('The computer has chosen:');
    $('.eleccionPC').text('Scissors');
  }
    
  // game logic
  var comparar = function (eleccion1, eleccion2) {
    if (eleccion1 == eleccion2) {
      $('.resultado').text('It´s a tie!');
      $('.resultado').css("color","grey");
    } else if (eleccion1 == "piedra" && eleccion2 == "tijera") {
      $('.resultado').text('The computer wins');
      $('.resultado').css("color","#BF4848");
      computerScore = computerScore + 1;
    } else if (eleccion1 == "papel" && eleccion2 == "piedra") {
      $('.resultado').text('The computer wins');
      $('.resultado').css("color","#BF4848");
      computerScore = computerScore + 1;
    } else if (eleccion1 == "tijera" && eleccion2 == "papel") {
      $('.resultado').text('The computer wins');
      $('.resultado').css("color","#BF4848");
      computerScore = computerScore + 1;
    } else if (eleccion1 == "piedra" && eleccion2 == "papel") {
      $('.resultado').text('Great! You win!');
      $('.resultado').css("color","green");
      userScore = userScore + 1;
    } else if (eleccion1 == "papel" && eleccion2 == "tijera") {
      $('.resultado').text('Great! You win!');
      $('.resultado').css("color","green");
      userScore = userScore + 1;
    } else {
      $('.resultado').text('Great! You win!');
      $('.resultado').css("color","green");
      userScore = userScore + 1;
    }
      
    // print result
    document.getElementById("userScore").innerHTML = userScore
    document.getElementById("computerScore").innerHTML = computerScore
  };

  // call game logic
  comparar (computerSelector,userSelector); 
          
  // Play Again button appears
  $('.playAgainButton').show();
      
  // hide radio buttons
  $("input[type='radio']").hide();
        
});

$('.playAgainButton').click(function() {
  $( ".items" ).prop( "checked", false);
  $('#computerText').text('The computer is thinking again...');
  $('.eleccionPC').text('');
  $('.resultado').text('');
  $('.playAgainButton').hide();
  $("input[type='radio']").show();
});

