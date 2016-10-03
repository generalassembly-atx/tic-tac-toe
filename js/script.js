$(document).ready(function() {
$('.square').on("click", squareClick);
$('button').on("click", reset);

});
//Global Variables
var player = 1;
var count = 0;
var playerScore1 = 0;
var playerScore2 = 0;
//Methods



function squareClick() {
  count += 1;
  if (player === 1) {
    $(this).text('X')
    player = 2;
    getWinner();
    $('h2').find('span').text(2);
  } else if (player === 2) {
    $(this).text('O')
    player = 1;
    getWinner();
    $('h2').find('span').text(1);
    }

};

//Check Top Row
function getWinner() {

  console.log($('#1').text());
  console.log($('#2').text());
  console.log($('#3').text());


  console.log();


""

""
// Top Row
  if (($('#1').text() == $('#2').text()) && ($('#2').text() == $('#3').text())){
      if ($('#1').text() == "X") {
        playerScore1 += 1;
        $('#player1Score').text(playerScore1);
        alert('X WINS');
      } else if ($('#1').text() == 'O') {
        playerScore2 += 1;
        $('#player2Score').text(playerScore2);
        alert('O WINS');
      }
  }

// Middle Row
  if (($('#4').text() == $('#5').text()) && ($('#5').text() == $('#6').text())){
      if ($('#4').text() == "X") {
        playerScore1 += 1;
        $('#player1Score').text(playerScore1);
        alert('X WINS');
      } else if ($('#4').text() == 'O') {
        playerScore2 += 1;
        $('#player2Score').text(playerScore2);
        alert('O WINS');
      }
  }

// Bottom Row
  if (($('#7').text() == $('#8').text()) && ($('#8').text() == $('#9').text())){
      if ($('#7').text() == "X") {
        playerScore1 += 1;
        $('#player1Score').text(playerScore1);
        alert('X WINS');
      } else if ($('#7').text() == 'O') {
        playerScore2 += 1;
        $('#player2Score').text(playerScore2);
        alert('O WINS');
      }
  }

// Diag Top Left to Bottom Right
  if (($('#1').text() == $('#5').text()) && ($('#5').text() == $('#9').text())){
      if ($('#1').text() == "X") {
        playerScore1 += 1;
        $('#player1Score').text(playerScore1);
        alert('X WINS');
      } else if ($('#1').text() == 'O') {
        playerScore2 += 1;
        $('#player2Score').text(playerScore2);
        alert('O WINS');
      }
  }

// Diag Top Right to Bottom Left
  if (($('#3').text() == $('#5').text()) && ($('#5').text() == $('#7').text())){
      if ($('#3').text() == "X") {
        playerScore1 += 1;
        $('#player1Score').text(playerScore1);
        alert('X WINS');
      } else if ($('#3').text() == 'O') {
        playerScore2 += 1;
        $('#player2Score').text(playerScore2);
        alert('O WINS');
      }
  }

// Column One
  if (($('#1').text() == $('#4').text()) && ($('#4').text() == $('#7').text())){
      if ($('#1').text() == "X") {
        playerScore1 += 1;
        $('#player1Score').text(playerScore1);
        alert('X WINS');
      } else if ($('#1').text() == 'O') {
        playerScore2 += 1;
        $('#player2Score').text(playerScore2);
        alert('O WINS');
      }
  }

// Column Two
  if (($('#2').text() == $('#5').text()) && ($('#5').text() == $('#8').text())){
      if ($('#2').text() == "X") {
        playerScore1 += 1;
        $('#player1Score').text(playerScore1);
        alert('X WINS');
      } else if ($('#2').text() == 'O') {
        playerScore2 += 1;
        $('#player2Score').text(playerScore2);
        alert('O WINS');
      }
  }

// Column three
  if (($('#3').text() == $('#6').text()) && ($('#6').text() == $('#9').text())){
      if ($('#3').text() == "X") {
        playerScore1 += 1;
        $('#player1Score').text(playerScore1);
        alert('X WINS');
      } else if ($('#3').text() == 'O') {
        playerScore2 += 1;

        $('#player2Score').text(playerScore2);
        alert('O WINS');
      }
  }

// Is Board Full?

if (count === 9) {
  alert ('CAT WINS!!!')
}

};

// Reset Board!

function reset() {
  $('.square').text('');
  count = 0;
  player = 1;
  $('span').text(1);
  }



  // if (($('#1').text() == $('#2').text()) && ($('#2').text() == $('#3').text())){
  //     alert('X WINS');
  //
  // }


  //
  // if (($('#4').text() == $('#5').text()) && ($('#5').text() == $('#6').text())){
  //     alert('X WINS');


        // $('#newGame').removeClass('invisible');











// function getWinner() {
//   var col1 = $('#1' && '#4' && '#7');
//   var col2 = $('#2' && '#5' && '#8');
//   var col3 = $('#3' && '#6' && '#9');
//   var diagLeft = $('#1' && '#5' && '#9');
//   var diagRight = $('#3' && '#5' && '#7');
//   if ($('#1 .x').length === 3 || ('#1 .x').length === 3 || ('#1 .x').length === 3) {
//     alert('X WINS');
  // } else if (col1.hasClass('x') || (col2.hasClass('x') || (col3.hasClass('x')) {
  // alert('X WINS!');





//Check Middle Row


//Check Bottom Row


//Check Diagnol Left


//Check Diagnol Right
