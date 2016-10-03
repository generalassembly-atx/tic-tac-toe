$(document).ready(function() {
  $('.square').on('click', theBigOne)
})

// Change the span tag to player 1 = "x" and player two equals "o"
// if the currentPlayer is on 2 click to change back to player one.  If the players is on 1 click to change back to player two.


function theBigOne() {
  var that = $(this)
  var player = $('#currentPlayer').text();
  if ($(that).text() !== ""){
    alert("Already taken");
    return false;
  }
  changePlayer(that, player)
  score()

}

function changePlayer(element, currentPlayer) {
  if (currentPlayer == 1) {
    $(element).html('X');
    $(element).addClass("x");
    checkBoard()
    $('#currentPlayer').text('2');
    currentPlayer = 2;

  } else {
     $(element).html('O').css("color", "red");
     $(element).addClass("o");
     checkBoard()
     $('#currentPlayer').text('1');
     currentPlayer = 1;
  }
};

// function checkBoard() {
//   if(checkRows() || checkCrissCross() || checkColumns()){
//     alert('WINNER');
//     score();
//     reset()
//   } else {
//     alert('Try Again');
//   }
// };

function score() {
  var currentPlayer = $('#currentPlayer').text();
  var pointPlayerOne = parseInt($('#player1score').text())
  var pointPlayerTwo = parseInt($('#player2score').text())
    if (currentPlayer === "1") {
      pointPlayerOne++
      $('#player1score').text(pointPlayerOne)
    } else {
      pointPlayerTwo++
      $('#player2score').text(pointPlayerTwo)
    }
};

function reset() {

}

function checkBoard() {
  var row1hasWinX = ($('#r1c1').hasClass("x") && $('#r1c2').hasClass("x") && $('#r1c3').hasClass("x"));

  var row2hasWinX = ($('#r2c1').hasClass("x") && $('#r2c2').hasClass("x") && $('#r2c3').hasClass("x"));

  var row3hasWinX = ($('#r3c1').hasClass("x") && $('#r3c2').hasClass("x") && $('#r3c3').hasClass("x"))

  var row1hasWinO = ($('#r1c1').hasClass("o") && $('#r1c2').hasClass("o") && $('#r1c3').hasClass("o"));

  var row2hasWinO = ($('#r2c1').hasClass("o") && $('#r2c2').hasClass("o") && $('#r2c3').hasClass("o"));

  var row3hasWinO = ($('#r3c1').hasClass("o") && $('#r3c2').hasClass("o") && $('#r3c3').hasClass("o"));

  // COLUMNS WINNER

  var column1hasWinX = ($('#r1c1').hasClass("x") && $('#r1c1').hasClass("x") && $('#r1c1').hasClass("x"));

  var column2hasWinX = ($('#r2c2').hasClass("x") && $('#r2c2').hasClass("x") && $('#r2c2').hasClass("x"));

  var column3hasWinX = ($('#r3c3').hasClass("x") && $('#r3c3').hasClass("x") && $('#r3c3').hasClass("x"));

  var column1hasWinO = ($('#r1c1').hasClass("o") && $('#r1c1').hasClass("o") && $('#r1c1').hasClass("o"));

  var column2hasWinO = ($('#r2c2').hasClass("o") && $('#r2c2').hasClass("o") && $('#r2c2').hasClass("o"));

  var column2hasWinO = ($('#r3c3').hasClass("o") && $('#r3c3').hasClass("o") && $('#r3c3').hasClass("o"));

  // CrissCrossWinner

  var crissCCLeftX = ($('#r1c1').hasClass("x") && $('#r2c2').hasClass("x") && $('#r3c3').hasClass("x"));

  var crissCCLeftO = ($('#r1c1').hasClass("o") && $('#r2c2').hasClass("o") && $('#r3c3').hasClass("o"));

  var crissCCRightX = ($('#r1c3').hasClass("x") && $('#r2c2').hasClass("x") && $('#r3c1').hasClass("x"));

  var crissCCRightO = ($('#r1c3').hasClass("o") && $('#r2c2').hasClass("o") && $('#r3c1').hasClass("o"));

  if (row1hasWinX || row2hasWinX || row3hasWinX || row1hasWinO || row2hasWinO || row3hasWinO || column1hasWinX || column2hasWinX || column3hasWinX || column1hasWinO || column2hasWinO || column2hasWinO || crissCCLeftX || crissCCLeftO || crissCCRightX || crissCCRightO) {
      alert('winner')
  }
};













// var playerOne = "O";
// var playerTwo = "X";
// var check = $('td').text()



// function checkRows() {
//   if ($('#r1c1 td').text() === $('#r1c2 td').text() === $('#r1c3 .x').text()) {
//     alert('WINNER')
//   }
// }

// function inputXO() {
//   // If the player puts in X or O
//   if (td.board > ) {
//     examineBoard()
//   } else {
//     // If the player puts in nothing
//     inputXOIdiot()
//   }
// }
//
// If the payer puts in something rather than X or O, send out an alert
// function inputXOIdiot() {
//   alert("Input X or O idiot");
// }
 // Checks for the input of .square


// function functionName() {
//
// }
//
// // Checks to see if there are 3 "X" or 3 "O"
// function examineBoard() {
//   if (checkRows()) {
//     // INSERT: if one of the rows has 3 matching alert Winner!  ELSE: move to columns
//   } else if (checkColumns()) {
//
//   }{
//     // INSERT: if one of the columns has 3 matching alert Winner!  ELSE: move to Criss Cross
//   } else if (checkCrissCross()) {
//
//   }{
//     // INSERT: if one of the criss cross has 3 matching alert Winner!  ELSE: Game failed and try again.
//   } else {
//     alert("Both players too clever. Try again.")
//   }
// }
// Checks to see if rows have 3 matching

// // Checks to see if columns have 3 machcing
// function checkColumns() {
//
// }
// // checks to see if 3 matching criss cross
// function checkCrissCross() {
//
// }


// function changecurrentPlayerHTML(e) {
//   e.preventDefault();
//   if (player == 1) {
//     $('#currentPlayer').text('2')
//   }else{
//     $('#currentPlayer').text('1')
//   }
// };
//
// function changeXandO(e) {
//   e.preventDefault();
//   if (player == 1) {
//   $(this).html('X');
// } else {
//   $(this).html('O').css("color", "red");
// }
// };
//
// function addClass(e) {
//   e.preventDefault();
//   if (player == 1) {
//   $(this).addClass("o");
// } else {
//   $(this).addClass("x");
// }
// };
