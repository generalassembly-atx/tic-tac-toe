$(document).ready(function() {
  var turns = 0, maxTurns = 9;
  var p1Score = 0, p2Score = 0;
  var player1 = true, player2 = false;
  var gameOver = false;
  var playerWin;

  // performs game's mechanic on user input
  $('.board').on('click', 'td', function() {
    // checks to see if someone won and prevents further entry
    if (gameOver === true) { return; }

    // checks to see if no value exists before allowing input
    if ($(this).text() === "") {
      if (player1) {
        $(this).text('X');
      } else if (player2) {
        $(this).text('O');
      }

      // starts checking for win condition when possible
      if (turns >= 4) {
        isWinner();
      }
      switchTurn();
      turns++; // increments turn used to check for a tie game
    }

    //checks for tie game
    if (turns >= maxTurns && gameOver !== true ) {
      playButton();
      $('#msgDisplay').show().text('Tie Game');
      $('#turnStatus').hide();
      gameOver = true;
    }
  });

  // resets the board on click of button
  $(document.body).on('click', 'button', function(){
    resetBoard();
  })

  // checks for winner
  function isWinner() {
    playerWin = $('#currentPlayer').text();

    var cell = [ $('#0').text(), $('#1').text(), $('#2').text(),
                 $('#3').text(), $('#4').text(), $('#5').text(),
                 $('#6').text(), $('#7').text(), $('#8').text() ];

    /* this lists all the possible winning combinations. It uses the transitive property: 'if a=b and b=c, then a=c'
    which in effect yields the winning condition of matching 3 in a row */
    var winCombos = [ [0,1,1,2], [3,4,4,5], [6,7,7,8],
                      [0,3,3,6], [1,4,4,7], [2,5,5,8],
                      [0,4,4,8], [2,4,4,6] ];

    // iterate the cell items through the winning combinations comparing them for a match
    winCombos.forEach(function(item) {
      // the first conditional value evaluates to a truthy-falsy value and is used to overcome the issue of empty cells ("") being equal.
      if( cell[item[0]] && (cell[item[0]] === cell[item[1]] && cell[item[2]] === cell[item[3]]) ) {

        // increment the score & display win message
        if (playerWin === 'X') {
          $('#p1Score').text(++p1Score)
          $('#msgDisplay').show().html("Player X WINS!")
        } else {
          $('#p2Score').text(++p2Score);
          $('#msgDisplay').show().html("Player O WINS!")
        }

        $('#turnStatus').hide();
        playButton();
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
    player1 = !player1;
    player2 = !player2;
    ($('#currentPlayer').text() === 'X') ? $('#currentPlayer').text('O') : $('#currentPlayer').text('X');
  }

  // resets board
  function resetBoard() {
    turns = 0;
    gameOver = false;
    player1 = true;
    player2 = false;
    $('#turnStatus').show();
    $('#currentPlayer').text('X');
    $('#msgDisplay').hide();
    $('button').remove();
    $('.board td').text("");
  }
});
