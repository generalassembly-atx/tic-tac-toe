
$(document).ready(function() {

  // Global Variables
  var player = 1;
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





  // Function Definitions
  function squareClick(event) {
    if ($(this).html() != '') {
      alert('choose a better spot');

    } else if (player === 1) {
      $(this).html('<p>X</p>').hide().fadeIn(600);
      $(this).data('character', 'x');
      testWin();
      player = 2;
      $('h2').find('span').text('2');
    }

    else if (player === 2) {
      $(this).html('<p>O</p>').hide().fadeIn(600);;
      $(this).data('character', 'o'); // "oh" not "zero"
      testWin();
      player = 1;
      $('h2').find('span').text('1');
    }

  };

  function testWin() {
    turnsTaken += 1;

    for (var lineIndex in lines) {



      var line = lines[lineIndex];




      var test = "";
      for (var i=0; i<3 ;i++){
        test+=$(line[i]).data('character');
      }
      if (test == 'xxx') {
        xWins(line);
      } else if (test == "ooo") {
        oWins(line);
      } 
    }
    if (turnsTaken===9) {
      catWins();
    }




  };

  function xWins() {
    $('.board').fadeOut(500);
    $('body').append('<h1 class="winner">Player 1 wins!</h1>');

  }
  function oWins() {
  $('.board').fadeOut(1000);
  $('body').append('<h1 class="winner">Player 2 wins!</h1>');

  }

  function catWins() {
    $('.board').fadeOut(500);
    $('body').append('<h1 class="winner">Cat wins!</h1>');
  }

  function reset() {
    console.log('resetting!');
    // $('.board').empty();
    // $('.board').initialize();

    // for every cell in the board, wipe its data and its html content

  }

  // function initialize(); {
  //
  // }


}); // DOCUMENT READY
