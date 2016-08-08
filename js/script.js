$(document).ready(function () {
  var currentPlayer = 'x';

  $('.squares').on('click', function() {

    if ($(this).text() === 'x' || $(this).text() === 'o') {
      alert('This square is already taken! Choose another.')
    } else {
        if (currentPlayer === 'x') {
          $(this).text('x')
          currentPlayer = 'o';
        } else {
          $(this).text('o')
          currentPlayer = 'x';
        }
    }

    if (($('#one').text() === 'x') && ($('#four').text() === 'x') &&    ($('#seven').text() === 'x')) {
      alert("Player One is the winner!");
      addOne();
      moveMaker();
      clearBoard();
    }
    else if (($('#two').text() === 'x') && ($('#five').text() === 'x') && ($('#eight').text() === 'x')) {
      alert("Player One is the winner!");
      addOne();
      moveMaker();
      clearBoard();
    }
     else if (($('#three').text() === 'x') && ($('#six').text() === 'x') && ($('#nine').text() === 'x')) {
      alert("Player One is the winner!");
      addOne();
      moveMaker();
      clearBoard();
    }
    else if (($('#one').text() === 'x') && ($('#two').text() === 'x') && ($('#three').text() === 'x')) {
      alert("Player One is the winner!");
      addOne();
      moveMaker();
      clearBoard();
    }
    else if (($('#four').text() === 'x') && ($('#five').text() === 'x') && ($('#six').text() === 'x')) {
      alert("Player One is the winner!");
      addOne();
      moveMaker();
      clearBoard();
    }
    else if (($('#seven').text() === 'x') && ($('#eight').text() === 'x') && ($('#nine').text() === 'x')) {
      alert("Player One is the winner!");
      addOne();
      moveMaker();
      clearBoard();
    }
    else if (($('#one').text() === 'x') && ($('#five').text() === 'x') && ($('#nine').text() === 'x')) {
      alert("Player One is the winner!");
      addOne();
      moveMaker();
      clearBoard();
    }
    else if (($('#three').text() === 'x') && ($('#five').text() === 'x') && ($('#seven').text() === 'x')) {
      alert("Player One is the winner!");
      addOne();
      moveMaker();
      clearBoard();
    }
    else if (($('#one').text() === '') && ($('#four').text() === 'o') && ($('#seven').text() === 'o')) {
      alert("Player Two is the winner!");
      addTwo();
      moveMaker();
      clearBoard();
    }
    else if (($('#two').text() === 'o') && ($('#five').text() === 'o') && ($('#eight').text() === 'o')) {
      alert("Player Two is the winner!");
      addTwo();
      moveMaker();
      clearBoard();
    }
    else if (($('#three').text() === 'o') && ($('#six').text() === 'o') && ($('#nine').text() === 'x')) {
      alert("Player Two is the winner!");
      addTwo();
      moveMaker();
      clearBoard();
    }
    else if (($('#one').text() === 'o') && ($('#two').text() === 'o') && ($('#three').text() === 'o')) {
      alert("Player Two is the winner!");
      addTwo();
      moveMaker();
      clearBoard();
    }
    else if (($('#four').text() === 'o') && ($('#five').text() === 'o') && ($('#six').text() === 'o')) {
      alert("Player Two is the winner!");
      addTwo();
      moveMaker();
      clearBoard();
    }
    else if (($('#seven').text() === 'o') && ($('#eight').text() === 'o') && ($('#nine').text() === 'o')) {
      alert("Player Two is the winner!");
      addTwo();
      moveMaker();
      clearBoard();
    }
    else if (($('#one').text() === 'o') && ($('#five').text() === 'o') && ($('#nine').text() === 'o')) {
      alert("Player Two is the winner!");
      addTwo();
      moveMaker();
      clearBoard();
    }
    else if (($('#three').text() === 'o') && ($('#five').text() === 'o') && ($('#seven').text() === 'o')) {
      alert("Player Two is the winner!");
      addTwo();
      moveMaker();
      clearBoard();
    }
    else {
      catsGame();
    }

  });

});
function addOne() {
  var currentOneScore = parseInt($('.playerOne').text());
  var b = 1;
  oneScore = (currentOneScore) + b;
  $('.playerOne').text(oneScore);
}

function addTwo() {
  var currentTwoScore = parseInt($('.playerTwo').text());
  var b = 1;
  twoScore = (currentTwoScore) + b;
  $('.playerTwo').text(twoScore);
}

function clearBoard() {
  $('.squares').text('');
}

function moveMaker() {
  if ($('#currentPlayer').text() === '1') {
    $('#currentPlayer').text('2')
  } else {
    $('#currentPlayer').text('1')
  }
}

function catsGame() {
    if  (($('#one').text() === ('')) ||
        ($('#two').text() === ('')) ||
        ($('#three').text() === ('')) ||
        ($('#four').text() === ('')) ||
        ($('#five').text() === ('')) ||
        ($('#six').text() === ('')) ||
        ($('#seven').text() === ('')) ||
        ($('#eight').text() === ('')) ||
        ($('#nine').text() === (''))) {
      console.log('not');
    }
    else {
      alert("It's a cat's game!");
    }
}
