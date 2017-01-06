$(document).ready(function() {

  var turns = 0, maxTurns = 9;
  var p1Score = 0, p2Score = 0;
  var player1 = true, player2 = false;
  var gameOver = false;
  var playerWin;

  // resets the board on click of button
  $(document.body).on('click', 'button', function(){
    resetBoard();
  })

  // performs game's mechanic on user input
  $('.board').on('click', 'td', function() {
    // checks to see if someone won yet and prevents further entry
    if (gameOver === true) { return; }

    // checks to see if no value exists before allowing input
    if ($(this).text() === "") {
      if (player1) {
        $(this).text('X');
      } else if (player2) {
        $(this).text('O');
      }


      /* So you switch the player*/

      switchTurn(); // switches player turn
      isWinner(); // checks to see if winning conditions have been met

      turns++; // increments turn used to check for a cat's game
    }

    //checks for tie game
    if (turns >= maxTurns) {
      playButton();
      $('#currentPlayer').text("Cat's Game!")
      gameOver = true;
    }
  });

  function isWinner() {

    console.log('when isWinner is called, the current player is: ' + $('#currentPlayer').text())

    //extracts string of the current/winning player
    playerWin = $('#currentPlayer').text();

    var cell = [ $('#0').text(), $('#1').text(), $('#2').text(),
                 $('#3').text(), $('#4').text(), $('#5').text(),
                 $('#6').text(), $('#7').text(), $('#8').text() ];

    /* this lists all the possible winning combinations. It uses the transitive property in that 'if a=b and b=c, then a=c'
    which in effect yields the winning condition of matching 3 in a row */
    var winCombos = [ [0,1,1,2], [3,4,4,5], [6,7,7,8],
                      [0,3,3,6], [1,4,4,7], [2,5,5,8],
                      [0,4,4,8], [2,4,4,6] ];

    /* the first conditional value evaluates to a truthy-falsy value. It is used to overcome the issue of empty cells ("") being equal.
    The second conditional statement is the transitive property & checks the current cell values to the pre-defined winning combinations */
    winCombos.forEach(function(item) {
      if( cell[item[0]] && (cell[item[0]] === cell[item[1]] && cell[item[2]] === cell[item[3]]) ) {

        // checks to see where to increment the score
        (playerWin === '1') ? $('#p2Score').text(++p2Score) : $('#p1Score').text(++p1Score);

        // displays win message
        (playerWin === '1') ? $('#currentPlayer').text("Player 2 WINS!") : $('#currentPlayer').text("Player 1 WINS!")
      
        playButton();

        // flagged so that we can no longer can enter Xs & Os
        gameOver = true;
      }

    }); // end of forEach
  }

  // creates button
  function playButton () {
    $('body').append('<button>Play Again?</button>')
  }

  // switches boolean values of players
  function switchTurn(){

    var a = $('#currentPlayer').text()

    console.log("the current player was: " + a);

    player1 = !player1;
    player2 = !player2;

    ($('#currentPlayer').text() === '1') ? $('#currentPlayer').text('2') : $('#currentPlayer').text('1');

    var b = $('#currentPlayer').text();
    console.log("the current player is NOW: " + b);

  }

  // resets board
  function resetBoard() {
    turns = 0;
    gameOver = false;
    player1 = true;
    player2 = false;
    $('#currentPlayer').text('1');
    $('button').remove();
    $('.board td').text("");
  }

});
