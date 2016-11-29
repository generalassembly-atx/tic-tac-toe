$(document).ready(function() {

  var turns = 0, maxTurns = 9;
  var p1Score = 0, p2Score = 0;
  var player1 = true, player2 = false;
  var gameOver = false;
  var playerWin;

  $('.board').on('click', 'td', function() {
    turns++;
    //checks to see if someone won yet and prevents further entry
    if (gameOver === true) { return; }

    //checks to see if no value exists yet
    if ($(this).text() === "") {
      if (player1) {
        $(this).text('X');
        $('#currentPlayer').text('2')
        switchTurn();

      } else if (player2) {
        $(this).text('O');
        $('#currentPlayer').text('1')
        switchTurn();
      }
      //checks to see if winning conditions have been met
      isWinner();
    }
    //checks for tie game
    if (turns >= maxTurns) {
      playButton();
      $('#currentPlayer').text("Cat's Game!")
      gameOver = true;
    }
  });

  //resets the board on click of button
  $(document.body).on('click', 'button', function(){
    resetBoard();
  })

  function isWinner() {
    //extracts string of the current/winning player
    playerWin = $('#currentPlayer').text();

    var cell = [ $('#0').text(), $('#1').text(), $('#2').text(),
                 $('#3').text(), $('#4').text(), $('#5').text(),
                 $('#6').text(), $('#7').text(), $('#8').text() ];

    var winCombos = [ [0,1,1,2], [3,4,4,5], [6,7,7,8],
                      [0,3,3,6], [1,4,4,7], [2,5,5,8],
                      [0,4,4,8], [2,4,4,6] ];

    //iterate through multidimensional array
    winCombos.forEach(function(item) {
      // the first conditional evaluates to a truthy-falsy value. It is used to overcome the issue of empty cells ("") being equal
      if( cell[item[0]] && (cell[item[0]] === cell[item[1]] && cell[item[2]] === cell[item[3]]) ) {

        //checks to see where to increment the score
        (playerWin === '2') ? $('#p1Score').text(++p1Score) : $('#p2Score').text(++p2Score)
        $('#currentPlayer').text("YOU WIN!");

        playButton();

        //flagged so that we can no longer can enter XOs
        gameOver = true;
      }
    }); //end of forEach
  }

  //creates button
  function playButton () {
    $('body').append('<button>Play Again?</button>')
  }

  //switches boolean values of players
  function switchTurn(){
    player1 = !player1;
    player2 = !player2;
  }

  //resets board
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
