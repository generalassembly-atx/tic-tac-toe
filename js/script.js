$(document).ready(function() {

$('td').on('click', clickHandler);


});

function clickHandler(e) {
  var cell = $(this)
  if (cell.text()=== '') {
    playerSymbol(cell)

    if (winner()) {
      scoreCount();
      resetBoard();
      changePlayer();
    } else {
      if (catWon()) {
        alert('Cat won');
        resetBoard();
        changePlayer();
      }
        changePlayer();
    }
  } else {
    alert('Cell is taken')
  }
}


function winner() {
  
  console.log('winner');

  // return false;
}

function catWon() {
  console.log('catWon');
  return $('table.board td').text().length === 9
}


function resetBoard() {
  console.log('resetBoard');
  $('table.board td').text('')
}

function scoreCount() {
  var cell;
  if (currentPlayer() === '1') {
    cell = $('td#player1Score')
  } else {
    cell = $('td#player2Score')
  }
  var score = parseInt(cell.text())
  score += 1;
  cell.text(score)
}

function currentPlayer() {
  return $('span#currentPlayer').text()
}

function playerSymbol(cell) {
  if (currentPlayer() === '1') {
    cell.text('X')
  } else {
    cell.text('O')
  }
}

function changePlayer() {
  if (currentPlayer() === '1') {
    $('span#currentPlayer').text('2')
  } else {
    $('span#currentPlayer').text('1')

  }
}







// [['#square1', '#square2', '#square3'], ['#square4', '#square5', '#square6'], ['#square7', '#square8', '#square9'], ['#square1', '#square4', '#square7'], ['#square2', '#square5', '#square8'], ['#square3', '#square6', '#square9'], ['#square1', '#square5', '#square9'], ['#square3', '#square5', '#square7']]
