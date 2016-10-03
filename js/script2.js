$(document).ready(function(){
  gameStart();
  $('.boardCell').on('click', playerMove);
  $(document).on('click', '.replay', replayGame)
})

var currentPlayer = "X";
var totalBoard = [];
var playerXScore = "0";
var playerYScore = "0";
var canPlay;

// Initialize new game
function gameStart() {
  canPlay = true;
  var playerNumber = $('h2 span');
  //console.log(currentPlayer);
  if (currentPlayer === "X"){
    playerNumber.text('Xs');
  } else {
    playerNumber.text('Os');
  }
  $('.boardCell').text('');
  totalBoard = ['e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e'];
  var playerXScoreDisplay = $('#playerxscore').text(playerXScore);
  var playerOScoreDisplay = $('#playeroscore').text(playerYScore);

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
        gameOver();
        return(currentPlayer);
    } else {}
  }
  for (var x = 0; x < 3; x++){
    if (totalBoard[x].indexOf(currentPlayer) > -1 && totalBoard[x+3] === totalBoard[x] && totalBoard[x+6] === totalBoard[x]){
      gameOver();
      return(currentPlayer);
    } else {}
  }
  if (totalBoard[0].indexOf(currentPlayer) > -1 && totalBoard[4] === totalBoard[0] && totalBoard[8]=== totalBoard[0]){
    gameOver();
    return(currentPlayer);
  } else if (totalBoard[2].indexOf(currentPlayer) > -1 && totalBoard[4] === totalBoard[2] && totalBoard[6] === totalBoard[2]){
    gameOver();
    return(currentPlayer);
  } else {}
  if (totalBoard.indexOf("e") === -1){
    currentPlayer = "cat";
    gameOver();
    }
  else {
    //console.log(currentPlayer);
    switchPlayer();
  }
}
//Game Over function
function gameOver(){
  var winningMessage = "";
  canPlay = false;
  if (currentPlayer === "X"){
    playerXScore++;
    winningMessage = "Player 1 took the match!";
    switchPlayer();
  } else if (currentPlayer === "O"){
    playerYScore++;
    winningMessage = "Player 2 took the match!";
    switchPlayer();
  } else {
    winningMessage = "Meow!";
    currentPlayer = "X";
  }
  var h3 = $('<h3 class="winner"></h3>');
  var a = $('<a class="replay" href="#">Play Again</a>');
  h3.text(winningMessage);
  $('body').append(h3);
  $('body').append(a);
}

//Function for when a game replay is called
function replayGame(event){
  event.preventDefault();
  $('body').find('h3').remove();
  $('body').find('.replay').remove();
  gameStart();
}
