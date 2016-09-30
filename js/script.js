$(document).ready(function() {

  var squaresList = $('.square');



  // SETUP event listeners on all the squares
  for (var i = 0; i < squaresList.length; i++) {
    $(squaresList[i]).on('click', squareClick)
  }

});
// global variable player will be 1 or 2
// ------flip 1,2 later after the turn is run
var player = 1;

function squareClick(event) {
  if ($(this).html() != '') {
    alert('choose a better spot');

  } else if (player === 1) {
    $(this).html('<p>X</p>')
    $(this).data('character', 'x');
    testWin();
    player = 2;
    $('h2').find('span').text('2');
  }

  else if (player === 2) {
    $(this).html('<p>O</p>');
    $(this).data('character', 'o'); // "oh" not "zero"
    testWin();
    player = 1;
    $('h2').find('span').text('1');
  }

}

// ********
// build rows and columns and diagonals
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

// all these rows/columns/diags in a container "lines"
var lines = [];
lines.push(row1);
lines.push(row2);
lines.push(row3);
lines.push(column1);
lines.push(column2);
lines.push(column3);
lines.push(diag1);
lines.push(diag2);

console.log(lines);

function testWin() {
  for (var line in lines) {
    console.log(line);
    line = lines[line];
    console.log(line);
    var test = "";
    for (var i=0; i<3 ;i++){
      test+=$(line[i]).data('character');
    }
    if (test == 'xxx') {
      xWins();
    } else if (test == "ooo") {
      oWins();
    }
  }

}

function xWins() {
  
}
function oWins() {

}
