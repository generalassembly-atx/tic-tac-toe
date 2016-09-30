$(document).ready(function(){
  gameStart();
  $('.boardCell').on('click', playerMove);
  $(document).on('click', '.replay', replayGame)
})
var currentPlayer = "";
var totalBoard = [];
var playerXBoard = [];
var playerOBoard = [];
var playerXScore = "0";
var playerYScore = "0";
var canPlay;
var winner;

// Initialize new game
function gameStart() {
  canPlay = true;
  currentPlayer = "x";
  winner = "";
  $('.boardCell').text('');
  totalBoard = ['e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e'];
  playerXBoard = ['e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e'];
  playerOBoard = ['e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e'];
  var playerXScoreDisplay = $('#playerxscore').text(playerXScore);
  var playerOScoreDisplay = $('#playeroscore').text(playerYScore);

}

// Function to make play on board
function playerMove(){
  var cell = $(this).prop("id");
  cell = parseInt(cell)-1;
    if (canPlay){
      if (totalBoard[cell] === "e") {
        if (currentPlayer === "x"){
          $(this).text(currentPlayer);
          totalBoard[cell] = currentPlayer;
          playerXBoard[cell] = currentPlayer;
          //console.log(playerXBoard);
          checkWinner();

        } else {
          $(this).text(currentPlayer);
          totalBoard[cell] = currentPlayer;
          playerOBoard[cell] = currentPlayer;
          //console.log(playerOBoard);
          checkWinner();

        }

      } else {
        alert("That space is not open")
      }
    }
}
// Switch players
function switchPlayer(){
  var playerNumber = $('h2 span');
  if (currentPlayer === "x"){
    currentPlayer = "o";
    playerNumber.text('2');
  } else {
    currentPlayer = "x";
    playerNumber.text('1');
  }
  //console.log(currentPlayer);
}
//Check to see if player won
function checkWinner(){
  if (currentPlayer === "x"){
    currentBoard = playerXBoard;
  } else {
    currentBoard = playerOBoard;
  }
  for (var x = 0; x < 7; x+=3){
    if (currentBoard[x].indexOf("e") === -1 && currentBoard[x+1].indexOf("e") === -1 && currentBoard[x+2].indexOf("e") === -1 ){
        gameOver();
        return(currentPlayer);
    }
  }
  for (var x = 0; x < 3; x++){
    if (currentBoard[x].indexOf("e") === -1 && currentBoard[x+3].indexOf("e") === -1 && currentBoard[x+6].indexOf("e") === -1 ){
      gameOver();
      return(currentPlayer);
    }
  }
  if (currentBoard[0].indexOf("e") === -1 && currentBoard[4].indexOf("e") === -1 && currentBoard[8].indexOf("e") === -1 ){
    gameOver();
    return(currentPlayer);
  } else if (currentBoard[2].indexOf("e") === -1 && currentBoard[4].indexOf("e") === -1 && currentBoard[6].indexOf("e") === -1 ){
    gameOver();
    return(currentPlayer);
  }
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
  if (currentPlayer === "x"){
    playerXScore++;
    winningMessage = "Player 1 took the match!";
  } else if (currentPlayer === "o"){
    playerYScore++;
    winningMessage = "Player 2 took the match!";
  } else {
    winningMessage = "Meow!";
  }
  canPlay = false;
  var h3 = $('<h3 class="winner"></h3>');
  var a = $('<a class="replay" href="#">Play Again</a>');
  h3.text(winningMessage);
  $('body').append(h3);
  $('body').append(a);
}
function replayGame(event){
  event.preventDefault();
  $('body').find('h3').remove();
  $('body').find('.replay').remove();
  gameStart();
}
