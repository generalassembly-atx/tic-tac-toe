$(document).ready(function() {
  $('.board td').on('click', makeAMove);
  $('button').on('click', restart)
  $('h1').on('click', cheat);
});

function makeAMove(e) {
  e.preventDefault();
  var cell = $(e.currentTarget);

//Check for marked square
  if(cell.text() !== "") {
    showFullMessage();
    window.setTimeout(removeFullMessage,1500);
    return false;
  }

//Place 'x' or 'o' depending on which player is current
  checkPlayer(cell);
}

function showFullMessage() {
  $('#cellFull').css('display','block');
}

function removeFullMessage() {
  $('#cellFull').css('display','none');
}

function showWinMessage() {
  $('#winner').css('display','block');
}

function showDrawMessage() {
  $('#draw').css('display','block');
}

function checkPlayer(element) {
  var currentPlayer = $('#current span').text();

  if (currentPlayer === '1') {
    element.text('X');
    window.setTimeout(checkForMatch,1000);
    $('#current span').text('2');
  } else {
    element.text('O');
    window.setTimeout(checkForMatch,1000);
    $('#current span').text('1');
  }

}

function checkForMatch() {
  var row1 = $('.row1').text();
  var row2 = $('.row2').text();
  var row3 = $('.row3').text();
  var rDiagonal = $('.rDiagonal').text();
  var lDiagonal = $('.lDiagonal').text();
  var col1 = $('.col1').text();
  var col2 = $('.col2').text();
  var col3 = $('.col3').text();

  var playerOneScore = parseInt($('#playerOneScore').text());
  var playerTwoScore = parseInt($('#playerTwoScore').text());

  var playerOneWins = row1 === "XXX" || row2 === "XXX" || row3 === "XXX" || rDiagonal === "XXX" || rDiagonal === "XXX" || col1 === "XXX" || col2 === "XXX" || col3 === "XXX";
  var playerTwoWins = row1 === "OOO" || row2 === "OOO" || row3 === "OOO" || rDiagonal === "OOO" || lDiagonal === "OOO" || col1 === "OOO" || col2 === "OOO" || col3 === "OOO";

  if (playerOneWins) {
    showWinMessage();
    playerOneScore ++;
    $('#playerOneScore').text(playerOneScore);
    window.setTimeout(resetBoard,1500);
  } else if (playerTwoWins) {
    showWinMessage();
    playerTwoScore ++;
    $('#playerTwoScore').text(playerTwoScore);
    window.setTimeout(resetBoard,1500);
  } else if ((row1 + row2 + row3).length === 9) {
    showDrawMessage();
    window.setTimeout(resetBoard,1500);
  }
}

function resetBoard() {
  $('.board').find('td').text('');
  $('#winner').css('display','none');
  $('#draw').css('display','none');
}

function restart() {
  resetBoard();
  $('#playerOneScore').text('0');
  $('#playerTwoScore').text('0');
  $('#current span').text('1');
}

function cheat(e) {
  var cellsArray = $('.board td');
  var xOrO;

  if($('#current span').text() === '1') {
      xOrO = 'X';
  } else {
      xOrO = 'O';
  }

  for (var i=0; i<cellsArray.length; i++) {
    $(cellsArray[i]).text(xOrO);
  }

  window.setTimeout(checkForMatch,1000);

}
