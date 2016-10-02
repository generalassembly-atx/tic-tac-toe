
$(document).ready(function() {

  // Global Variables
  var player = 1;
  var playerOneScore = 0;
  var playerTwoScore = 0;
  var turnsTaken = 0;
  var squaresList = $('.square');

  // Event Listeners
  $(squaresList).on('click', squareClick)
  $('button.reset').on('click', reset);


    // ********
    // build rows,columns, diagonals
    // into a data structure
    // ********

  var row1 = $('#row1').find('td');
  var row2 = $('#row2').find('td');
  var row3 = $('#row3').find('td');

  var column1 = [];
  column1.push(row1[0]);
  column1.push(row2[0]);
  column1.push(row3[0]);
  var column2 = [];
  column2.push(row1[1]);
  column2.push(row2[1]);
  column2.push(row3[1]);
  var column3 = [];
  column3.push(row1[2]);
  column3.push(row2[2]);
  column3.push(row3[2]);

  var diag1 = [];
  diag1.push(row1[0]);
  diag1.push(row2[1]);
  diag1.push(row3[2]);
  var diag2 = [];
  diag2.push(row1[2]);
  diag2.push(row2[1]);
  diag2.push(row3[0]);

          // all these rows/columns/diags into a container "lines"
  var lines = [];
  lines.push(row1);
  lines.push(row2);
  lines.push(row3);
  lines.push(column1);
  lines.push(column2);
  lines.push(column3);
  lines.push(diag1);
  lines.push(diag2);

// ****
// The data structure is important because it contains the winning combinations
// For example, It contains a list called row1. It contains a list called row2. And so on...
// These lists are containers, holding the individual cells themselves.
// The individual cells contain the data of their state - X, O, or none.
// These lists are  convenient because we can loop through the elements inside the lists and test for a win each time.
// (1) look into row1, look at each cell, look at the value of each cell. is this a winning combo?
// (2) look into row2, look at each cell, look at the value of each cell. is this a winning combo?
// (3) look into row 3,
// (4) look into column 1
// (..) and so on....
// ****



  // Function Definitions
  function squareClick(event) {

    // A cell that already contains a value has been clicked
    // ** illegal move **
    if ($(this).html() != '') {
      alert('choose a better spot');

    //if player is 1, place an X and test for a Win
    } else if (player === 1) {
      $(this).html('<p>X</p>').hide().fadeIn(600);
      $(this).data('character', 'x');
      testWin();
      // sets next player
      player = 2;
      $('h2').find('span').text('2');
    }


    // if player is 2, place a O and test for a Win
    else if (player === 2) {
      $(this).html('<p>O</p>').hide().fadeIn(600);;
      $(this).data('character', 'o'); // "oh" not "zero"
      testWin();
      // sets next player
      player = 1;
      $('h2').find('span').text('1');
    }

  };

  // **********
  // tests for a winner
  // this function is run every time a click is placed
  // *************************************************

  function testWin() {
    // keeping a tally on how many turns have been taken (when == 9, game over)
    turnsTaken += 1;
    // looking into the data structure
    for (var i = 0; i < lines.length; i++) {
      var line = lines[i];
      var test = "";
      // Look into each line that we retrieve from lines.
      for (var j=0; j<3 ;j++){
        // Get it's data-characters (none, x, o)
        var character = $(line[j]).data('character')
        // Append character to test string
        test+=character;
      }
      // content of test string gives the answer. is there a winner? is there a loser?
      if (test == 'xxx') {
        xWins();
        return;
      } else if (test == "ooo") {
        oWins();
        return;
      }
    }
    // if all the spots have been clicked and there is still no 'xxx' or 'ooo', then there is a tie.
    if (turnsTaken===9) {
      catWins();
    }
  };

  function xWins() {
    hideBoard();
    // $('.win-log').append('<h1 class="winner">Player 1 wins!</h1>');
    playerOneScore += 1;
    $('#playerOneScore').text(playerOneScore);
    scorePop('p1');
  }
  function oWins() {
    hideBoard();
    // $('.win-log').append('<h1 class="winner">Player 2 wins!</h1>');
    playerTwoScore += 1;
    $('#playerTwoScore').text(playerTwoScore);
    scorePop('p2');
  }
  function catWins() {
    hideBoard();
    $('.win-log').append('<h1 class="winner">Cat wins!</h1>');
  }
  function hideBoard() {
    console.log('hiding board');
    board = $('.board');
    board.hide();
  }
  function scorePop(p) {
    if (p==="p1") {
      t = $('#playerOneScore');
    } else if (p==="p2") {
      t = $("#playerTwoScore");
    }
    t.animate({'font-size': '86px'}, 400);
    t.animate({'font-size': '24px'},200);
  }
  function reset() {
    console.log('resetting!');
    $('.win-log').empty();
    $('.board').show();
    // for every cell in the board, wipe its data and its html content
    for (var i = 0; i < squaresList.length; i++) {
      $(squaresList[i]).html('');
      $(squaresList[i]).data('character', 'none');
      console.log($(squaresList[i]).data())
    }
    turnsTaken = 0;
  }
}); // DOCUMENT READY
