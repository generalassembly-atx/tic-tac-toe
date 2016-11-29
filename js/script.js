
$(function() {

  // DOM has loaded
  var playerOne = 'X', playerTwo = 'O';
  var currentPlayer = playerOne;
  var turns = 0, maxTurns = 9;
  var score1 = 0;
  var score2 = 0;

  function clearScreen(){
    $('.box').text('');
  }

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
          clearScreen();
        if(currentPlayer==playerOne){
          score1++;
          $('#player-1-score').text(score1);
        }else{
          score2++;
          $('#player-2-score').text(score2);
        };
        turns = 0;
        return;
    } else {
      // Did we reach the maximum number of tries
      if (turns >= maxTurns) {
        alert("We have a Cat's Game!");
        turns = 0;
        clearScreen();
        return;
      }

      // Switch to the other player
      switchPlayer();
    }

    // Removes the event handler so they can't click it again
    var value = $(this).text();
    if(value == ''){
      $(this).off('click');
    }
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


});
