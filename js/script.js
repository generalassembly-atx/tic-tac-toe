$(document).ready(function(){
   // DOM has loaded

    var playerOne = 'X';
    var playerTwo = 'O';
    var currentPlayer = playerOne;
    var turns = 0, maxTurns = 9;
    var playerScore = 0;

    $('.box').on('click', function() {
      // Set the current player's marker
      $(this).text(currentPlayer);

      // Increment the number of turns
      turns++;

      // Check if the user is a winner...
      if (isWinner('#1','#2', '#3') || // row 1
        isWinner('#4','#5', '#6') || // row 2
        isWinner('#7','#8', '#9') || // row 3
        isWinner('#1','#4', '#7') || // col 1
        isWinner('#2','#5', '#8') || // col 2
        isWinner('#3','#6', '#9') || // col 3
        isWinner('#1','#5', '#9') || // diag 1
        isWinner('#3','#5', '#7')) { // diag 2
          alert("Tic-Tac-Toe Winner!");
        } else {
          // If the max number of turns were reached but no winner...
          if (turns >= maxTurns) {
            alert("Tie! It's a cat's game - mew!");
            return;
          }

          // If game is in play, but no winner yet...
          switchPlayer();
        }

        // Remove click event so each box can only be clicked once
        $(this).off('click');
    });

    // Winner function
    function isWinner(id1, id2, id3) {
      return $(id1).text() && $(id1).text() === $(id2).text() && $(id2).text() === $(id3).text();
    }

    /*    if ($(id1).text() === playerOne && $(id1).text() === $(id2).text() && $(id2).text() === $(id3).text()); {
        playerScore++;
        $('#player-1-score').text(playerScore);
        };
      } */

    // Switch player function that is referenced above
    function switchPlayer () {
      if (currentPlayer === playerOne) {
        currentPlayer = playerTwo;
        $('#playerNumber').text(2);
      } else {
        currentPlayer = playerOne;
        $('#playerNumber').text(1);
      }
    }

    // Reload page
    $('#reset-btn').on('click', function(){
      window.location.reload(true);
      // $('#board')location.reload(true);
    });

}); //document ready end
