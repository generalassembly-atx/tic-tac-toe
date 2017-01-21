$(document).ready(function() {
  var turns = 0, maxTurns = 9;
  var p1Score = 0, p2Score = 0;
  var player1 = true;
  var gameOver = false;

  // performs game's mechanic on user input
  $('.board').on('click', 'td', function() {
    // checks to see if someone won and prevents further entry
    if (gameOver === true) { return; }

    // checks to see if no value exists before allowing input
    if ($(this).text() === "") {
      if (player1) {
        $(this).html("<div class='xColor'>X</div>");
      } else {
        $(this).html("<div class='oColor'>O</div>");
      }

      // starts checking for win condition when possible
      if (turns >= 4) { isWinner(); }
      switchTurn();
      turns++; // increments turn used to check for a tie game
    }

    //checks for tie game
    if (turns >= maxTurns && gameOver !== true ) {
      playButton();
      $('#msgDisplay').show().html("<div class='fadeIn'>Tie Game</div>");
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
    var playerWin = $('#currentPlayer').text();
    var indexes = [0,1,3];

    var cell = [ $('#0'), $('#1'), $('#2'),
                 $('#3'), $('#4'), $('#5'),
                 $('#6'), $('#7'), $('#8') ];

    /* this lists all the possible winning combinations. It uses the transitive property: 'if a=b and b=c, then a=c'
    which in effect yields the winning condition of matching 3 in a row */
    var winCombos = [ [0,1,1,2], [3,4,4,5], [6,7,7,8],
                      [0,3,3,6], [1,4,4,7], [2,5,5,8],
                      [0,4,4,8], [2,4,4,6] ];

    // iterate the cell items through the winning combinations comparing them for a match
    winCombos.forEach(function(item) {
      // the first conditional value evaluates to a truthy-falsy value and is used to overcome the issue of empty cells ("") being equal.
      if( cell[item[0]].text() && (cell[item[0]].text() === cell[item[1]].text() && cell[item[2]].text() === cell[item[3]].text()) ) {

        // increment the score and display win message
        if (playerWin === 'X') {
          $('#p1Score').text(++p1Score)
          $('#msgDisplay').show().html('<div class="fadeIn">Player <span id=\'winner\' class=\'xColor\'>X</span> WINS!</div>')
        } else {
          $('#p2Score').text(++p2Score);
          $('#msgDisplay').show().html('<div class="fadeIn">Player <span id=\'winner\' class=\'oColor\'>O</span> WINS!</div>')
        }

        // turns winning values red
        for (var i=0; i<indexes.length; i++) {
          cell[item[indexes[i]]].children().addClass('red')
        }

        $('#turnStatus').hide();
        playButton();
        gameOver = true;
      }
    }); // end of forEach
  }

  // creates button to allow replay
  function playButton () { $('body').append('<button>Play Again?</button>') }

  // switches boolean values of players
  function switchTurn() {
    player1 = !player1;
    ($('#currentPlayer').text() === 'X') ? $('#currentPlayer').text('O').removeClass('xColor').addClass('oColor') :
    $('#currentPlayer').text('X').removeClass('oColor').addClass('xColor');
  }

  // resets board
  function resetBoard() {
    turns = 0;
    gameOver = false;
    $('#turnStatus').show();
    $('#msgDisplay').hide();
    $('button').remove();
    $('.board td').text("");

    // switches which player starts first
    if ($('#winner').text() === 'X') {
      $('#currentPlayer').text('O').removeClass('xColor').addClass('oColor');
      player1 = false;
    } else if ($('#winner').text() === 'O') {
      $('#currentPlayer').text('X').removeClass('oColor').addClass('xColor');
      player1 = true;
    }
  }
});
