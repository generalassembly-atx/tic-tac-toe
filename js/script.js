$(document).ready(function() {

  var currentScore1 = 0;
  var currentScore2 = 0;
  var gameOver = false;
  var currentPlayer = 'X';
  var count = 0;
  $('td').on('click', function() {
    if (currentPlayer === 'X') {
      if ($(this).text() === "") {
        $(this).text('X');
        $('span').text("2");
        checkForWin();
        scoreGame();
        checkForTie();
        resetBoard();
        currentPlayer = 'O';
      } else {
        alert('This square is already taken');
        return false;
      }
      //
    } else {
      //player 2's turn (O)
      if ($(this).text() === "") {
        $(this).text('O');
        $('span').text('1');
        checkForWin();
        scoreGame();
        checkForTie();
        resetBoard();
        currentPlayer = 'X';
      } else {
        alert('This square is already taken');
        return false;
      }
    };
    count++;
  });


  function checkForWin() {
    var row1 = [$('#1').text(), $('#2').text(), $('#3').text()];
    var row2 = [$('#4').text(), $('#5').text(), $('#6').text()];
    var row3 = [$('#7').text(), $('#8').text(), $('#9').text()];

    var col1 = [$('#1').text(), $('#4').text(), $('#7').text()];
    var col2 = [$('#2').text(), $('#5').text(), $('#8').text()];
    var col3 = [$('#3').text(), $('#6').text(), $('#9').text()];

    var diag1 = [$('#1').text(), $('#5').text(), $('#9').text()];
    var diag2 = [$('#3').text(), $('#5').text(), $('#7').text()];



    if (row1[0] === row1[1] && row1[1] === row1[2] && row1[0] !== "") {
      alert(currentPlayer + " Won!");
      gameOver = true;

    } else if (row2[0] === row2[1] && row2[1] === row2[2] && row2[0] !== "") {
      alert(currentPlayer + " Won!");
      gameOver = true;

    } else if (row3[0] === row3[1] && row3[1] === row3[2] && row3[0] !== "") {
      alert(currentPlayer + " Won!");
      gameOver = true;

    }

    if (col1[0] == col1[1] && col1[1] === col1[2] && col1[0] !== "") {
      alert(currentPlayer + " Won!");
      gameOver = true;

    } else if (col2[0] == col2[1] && col2[1] === col2[2] && col2[0] !== "") {
      alert(currentPlayer + " Won!");
      gameOver = true;

    } else if (col3[0] == col3[1] && col3[1] === col3[2] && col3[0] !== "") {
      alert(currentPlayer + " Won!");
      gameOver = true;

    }

    if (diag1[0] === diag1[1] && diag1[1] === diag1[2] && diag1[0] !== "") {
      alert(currentPlayer + " Won!");
      gameOver = true;

    } else if (diag2[0] === diag2[1] && diag2[1] === diag2[2] && diag2[0] !== "") {
      alert(currentPlayer + " Won!");
      gameOver = true;

    }

  }

  function checkForTie() {
    if ($('.board td').text().length === 9) {
      alert("Draw");
      gameOver = true;
    }
  }




  function resetBoard() {
    if (gameOver === true) {
      $('.board td').text("");
      gameOver = false;
    } else {
      return false;
    }
  }

  function scoreGame() {
    if (gameOver === true && (currentPlayer === 'X')) {
      currentScore1 = (currentScore1 + 1);
      $('#score1').text(currentScore1);
    } else if (gameOver === true && (currentPlayer === 'O')) {
      currentScore2 = (currentScore2 + 1);
      $('#score2').text(currentScore2);
    }
  }

});
