
$(document).ready(function() {

  // Global Variables
  var player = 1;
  var playerOneScore = 0;
  var playerTwoScore = 0;
  var turnsTaken = 0;
  var squaresList = $('.square');

// setup event listeners on all the squares
  for (var i = 0; i < squaresList.length; i++) {
    $(squaresList[i]).on('click', squareClick)
  }
// setup test event listeners for winning functions
  $('h1').on('click', xWins);

// setup event handler for reset button (will this work since the button isn't appended until later?)
  $('.reset').on('click', reset);


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
// For example, It contains a list called row1. It contains another list called column3. column2. diag1.
// These lists are containers, holding the individual cells
// This is convenient because we can loop through the elements of these lists and test for a win each time.
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

    // places an X and tests for a Win
    } else if (player === 1) {
      $(this).html('<p>X</p>').hide().fadeIn(600);
      $(this).data('character', 'x');
      testWin();
      // sets next player
      player = 2;
      $('h2').find('span').text('2');
    }


    // places an O and tests for a Win
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
    //

    // looking into the data structure
    //
    // ** this FOR-IN LOOP looks strange but it works.
    // ** lines is a container that holds all the possible 3-element lines on the board
    // ** for example, row 1 is a line. column 1 is a line. diagonal 2 is a line.
    // **
    for (var lineIndex in lines) {
      var line = lines[lineIndex];

      var test = "";
      // Look into each line that we retrieve from lines.
      // Get it's data-character (none, x, o)
      // Append it to test string
      for (var i=0; i<3 ;i++){
        test+=$(line[i]).data('character');
      }

      // content of test string gives the answer. is there a winner? is there a loser?
      if (test == 'xxx') {
        xWins(line);
      } else if (test == "ooo") {
        oWins(line);
      }
    }

    // if all the spots have been clicked and there is still no 'xxx' or 'ooo', then there is a tie.
    if (turnsTaken===9) {
      catWins();
    }




  };

  function xWins() {
    hideBoard();
    $('.win-log').append('<h1 class="winner">Player 1 wins!</h1>');
    playerOneScore += 1;
    $('#playerOneScore').text(playerOneScore);

  }
  function oWins() {
  hideBoard();
  $('.win-log').append('<h1 class="winner">Player 2 wins!</h1>');
  playerTwoScore += 1;
  $('#playerTwoScore').text(playerTwoScore);

  }

  function catWins() {
    // $('.board').fadeOut(500);
    $('body').append('<h1 class="winner">Cat wins!</h1>');
  }
  function hideBoard() {
    console.log('hiding board');
    board = $('.board');
    board.hide();
    // board.css ('position', 'relative');
  //   board.animate({'opacity': '0',
  //                        'right': '300px',
  //
  // }, 900);

  }

  function reset() {
    console.log('resetting!');
    $('.win-log').empty();
    $('.board').show();
    // for every cell in the board, wipe its data and its html content
    for (var i = 0; i < squaresList.length; i++) {
      $(squaresList[i]).html('');
      $(squaresList[i]).data('character', 'none');
    }

  }

  // function initialize(); {
  //
  // }


}); // DOCUMENT READY
