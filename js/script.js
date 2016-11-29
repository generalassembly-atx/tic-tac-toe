// $(function(){


//
//
//   var playerOne = 'X', playerTwo = 'O';
//   var currentPlayer = playerOne;
//
// $('#1').on('click', function(){
//   //set the current players marker
//   $('#1').text(currentPlayer);
//
// if (currentPlayer === playerOne){
//   currentPlayer = playerTwo;
// } else {
//   currentPlayer = playerOne;
// }
//
// });
//
// function isWinning(
//   if (#1=#2 && #2=#3)
// )
//
// $(this).off('click', alert("blah blah"))
// function switchPlayer();

$(function() {

  // DOM has loaded
  var playerOne = 'X', playerTwo = 'O';
  var currentPlayer = playerOne;
  var turns = 0, maxTurns = 9;

  $('.box').on('click', function() {
    // Set the current player's marker
    $(this).text(currentPlayer);

    // Increment the number of turns taken
    turns++;

    // Check if the user is a winner
    if (isWinner('#1', '#2', '#3') || // row 1
      isWinner('#4', '#5', '#6') || // row 2
      isWinner('#7', '#8', '#9') || // row 3
      isWinner('#1', '#4', '#7') || // col 1
      isWinner('#2', '#5', '#8') || // col 2
      isWinner('#3', '#6', '#9') || // col 3
      isWinner('#1', '#5', '#9') || // diagonal 1
      isWinner('#3', '#5', '#7')) { // diagonal 2
      alert('We have a winner!!!');
    } else {
      // Did we reach the maximum number of tries
      if (turns >= maxTurns) {
        alert("We have a Cat's Game!");
        return;
      }

      // Switch to the other player
      switchPlayer();
    }

    // Removes the event handler so they can't click it again
    $(this).off('click');
  });

  function isWinner(square1, square2, square3) {
    return $(square1).text() && $(square1).text() === $(square2).text() && $(square2).text() === $(square3).text();
  }

  function switchPlayer() {
    if (currentPlayer === playerOne) {
      currentPlayer = playerTwo;
    } else {
      currentPlayer = playerOne;
    }
  }
  function changeScore(){
    //if playerOne wins(isWinner=true==='X') add 1 to #player-1-score
    //if playerTwo wins(isWinner=true==="O") add 1 to #player-2-score

  }
$(player-1-score).add(++)
});









// 9 event handler for the squares

// var playerOnesTurn = true;
// var playerTwosTurn = false;
//
// var unmarkedBox = ;
// var markedBox = ;
//
// $('.box').on('click', function(e){
//   if(playerOnesTurn){
//     $(this).text('X');
//   } else {
//     $(this).text('O');
//   }
//     switchPlayer();
// })
// $('h2').on('click', switchPlayer(){
//
// })
// function switchPlayer (x){
//   if(playerOnesTurn){
//     playerOnesTurn = false;
//     playerTwosTurn = true;
//   }
//
//   if(playerTwosTurn){
//     playerOnesTurn = true;
//     playerTwosTurn = false;
//   }
// }
//
// function gameWinner (){}
//
//
// // function fullSquare (){
// //   if .box = 'X' === false (.text){'0'}
// //
// // }
//
// // var x[]
// // var o[]
// //
// // var emptyCell []
// // var markedCell []
//
// //player 1(x) vs player 2(x=!)
//
// // function resetGame
// //wipe the board, all empty cells
