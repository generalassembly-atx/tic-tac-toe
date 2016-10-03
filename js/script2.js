$(document).ready(function(){
  gameStart();
  $('.boardCell').on('click', playerMove);
  $(document).on('click', '.replay', gameStart)
})
// Global variables
var currentPlayer = "X";
var totalBoard = [];
var playerXScore = "0";
var playerYScore = "0";
var streakX = 0;
var streakY = 0;
var streakCat = 0;
var canPlay;

// Initialize new game
function gameStart() {
  canPlay = true;
  $('body').find('h3').remove();
  $('body').find('.replay').remove();
  var playerNumber = $('h2 span');
  if (currentPlayer === "X"){
    playerNumber.text('Xs');
  } else {
    playerNumber.text('Os');
  }
  $('.boardCell').text('');
  $('.boardCell').css('background-color', '#efefef');
  totalBoard = ['e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e'];
  $('#playerxscore').text(playerXScore);
  $('#playeroscore').text(playerYScore);

}

// Function to make play on board
function playerMove(){
  var cell = $(this).prop("id");
  cell = parseInt(cell);
    if (canPlay){
      if (totalBoard[cell] === "e") {
        $('body').find('h3.warning').remove();
        $(this).text(currentPlayer);
        totalBoard[cell] = currentPlayer;
        checkWinner();
      } else {
        $('body').find('h3.warning').remove();
        $('body').append('<h3 class="warning">This space is not available. Please select another.</h3>');
      }
    }
}
// Switch players
function switchPlayer(){
  var playerNumber = $('h2 span');
  if (currentPlayer === "X"){
    currentPlayer = "O";

  } else {
    currentPlayer = "X";
  }
  playerNumber.text(currentPlayer + 's');
  //console.log(currentPlayer);
}
//Check to see if player won
function checkWinner(){
  for (var x = 0; x < 7; x+=3){
    if (totalBoard[x].indexOf(currentPlayer) > -1 && totalBoard[x+1] === totalBoard[x] && totalBoard[x+2] === totalBoard[x]){
      $('#' + x).css('background-color', "yellow");
      $('#' + (x+1)).css('background-color', "yellow");
      $('#' + (x+2)).css('background-color', "yellow");
      gameOver();
      return(currentPlayer);
    } else {}
  }
  for (var x = 0; x < 3; x++){
    if (totalBoard[x].indexOf(currentPlayer) > -1 && totalBoard[x+3] === totalBoard[x] && totalBoard[x+6] === totalBoard[x]){
      $('#' + x).css('background-color', "yellow");
      $('#' + (x+3)).css('background-color', "yellow");
      $('#' + (x+6)).css('background-color', "yellow");
      gameOver();
      return(currentPlayer);
    } else {}
  }
  if (totalBoard[0].indexOf(currentPlayer) > -1 && totalBoard[4] === totalBoard[0] && totalBoard[8]=== totalBoard[0]){
    $('#0').css('background-color', "yellow");
    $('#4').css('background-color', "yellow");
    $('#8').css('background-color', "yellow");
    gameOver();
    return(currentPlayer);
  } else if (totalBoard[2].indexOf(currentPlayer) > -1 && totalBoard[4] === totalBoard[2] && totalBoard[6] === totalBoard[2]){
    $('#2').css('background-color', "yellow");
    $('#4').css('background-color', "yellow");
    $('#6').css('background-color', "yellow");
    gameOver();
    return(currentPlayer);
  } else {}
  if (totalBoard.indexOf("e") === -1){
    currentPlayer = "cat";
    gameOver();
    }
  else {
    switchPlayer();
  }
}
//Game Over function
function gameOver(){
  var winningMessage = "";
  canPlay = false;
  if (currentPlayer === "X"){
    playerXScore++;
    streakX++;
    streakY = 0;
    streakCat = 0;
    if (streakX > 1){
      winningMessage = "Player 1 took the match! Player 1 has won " + streakX + " games in a row!";
    } else {
      winningMessage = "Player 1 took the match!";
    }
    switchPlayer();
  } else if (currentPlayer === "O"){
      playerYScore++;
      streakX = 0;
      streakY++;
      streakCat = 0;
      if (streakY > 1){
        winningMessage = "Player 2 took the match! Player 2 has won " + streakY + " games in a row!";
      } else {
        winningMessage = "Player 2 took the match!";
      }
      switchPlayer();
  } else {
      streakX = 0;
      streakY = 0;
      streakCat++;
      if (streakCat > 1){
        winningMessage = "Meow! The cat has won " + streakCat + " games in a row!";
      } else {
        winningMessage = "Meow!";
      }
      currentPlayer = "X";
  }
  var h3 = $('<h3 class="winner"></h3>');
  var a = $('<a class="replay" href="#">Play Again</a>');
  h3.text(winningMessage);
  $('body').append(h3);
  $('body').append(a);
}
