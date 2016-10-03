//event handler for player clicking a square
$(document).ready(function() {
  $('input.reset').on('click', clearBoard);
  //markX or markO depending on whose turn it is
  $('.board td').on('click', goHere);
  //check to see if x wins
  $('.board td').on('click', checkForX);
  //check to see if o wins
  $('.board td').on('click', checkForO);
  $('h1 span').on('mouseover', toe);
  $('h1 span').on('mouseleave', robot);
})
  var clickCount=0;
  var winner = false;
function goHere(e) {
  e.preventDefault();
  winner = false;
  var square = $(this);
  if (square.hasClass('player1') || square.hasClass('player2')) {
    alert("Seat's taken!");
  } else if ($('h2 span').text()==="1") {
    square.addClass('player1').data('player', 'x');
    square.text('X');
    clickCount++;
    $('h2 span').text("2");
  } else if ($('h2 span').text()==="2"){
    square.addClass('player2').data('player', 'o');
    square.text("O");
    clickCount++;
    $('h2 span').text("1");
  };
};

function checkForX() {

  for (var i = 0; i<3; i++) {
    if (($('#row1 td').eq(i).data('player')=== 'x') && ($('#row2 td').eq(i).data('player')==='x') && ($('#row3 td').eq(i).data('player')==='x')) {
      player1Wins();
    }};

  if (($('#row1 td.player1').length === 3)||($('#row2 td.player1').length === 3)||($('#row3 td.player1').length === 3)) {
    player1Wins();
  }
  else if (($('#row1 td').eq(0).data('player')=== 'x') && ($('#row2 td').eq(1).data('player')==='x') && ($('#row3 td').eq(2).data('player')==='x')) {
    player1Wins();
    }
    else if ((($('#row1 td').eq(2).data('player')=== 'x') && ($('#row2 td').eq(1).data('player')==='x') && ($('#row3 td').eq(0).data('player')==='x'))) {
      player1Wins();
    }
    if ((winner === false) && (clickCount===9) &&($('h2 span').text()==="2")) {
     alert("Cat's game!");
     clearBoard();
    }}

function checkForO() {

  for (var i = 0; i<3; i++) {
    if (($('#row1 td').eq(i).data('player')=== 'o') && ($('#row2 td').eq(i).data('player')==='o') && ($('#row3 td').eq(i).data('player')==='o')) {
      player2Wins();
    }};

  if (($('#row1 td.player2').length === 3)||($('#row2 td.player2').length === 3)||($('#row3 td.player2').length === 3)) {
    player2Wins();
  }
  else if (($('#row1 td').eq(0).data('player')=== 'o') && ($('#row2 td').eq(1).data('player')==='o') && ($('#row3 td').eq(2).data('player')==='o')) {
    player2Wins();
    }
    else if ((($('#row1 td').eq(2).data('player')=== 'o') && ($('#row2 td').eq(1).data('player')==='o') && ($('#row3 td').eq(0).data('player')==='o'))) {
      player2Wins();

    };
    if ((winner === false) && (clickCount===9)) {
     alert("Cat's game!");
     clearBoard();
    }
}

function player1Wins() {
  var xScore = +$('#p1Score').text();
  xScore++;
  $('#p1Score').html(xScore);
  $('.content').append("<h1 class='winTag'>Player 1 Wins!</h1>");
  winner = true;
}


function player2Wins() {
  var oScore = +$('#p2Score').text();
  oScore++;
  $('#p2Score').html(oScore);
  $('.content').append("<h1 class='winTag'>Player 2 Wins!</h1>");
  winner = true;
}

function clearBoard() {
  $('.board td').data('player', '');
  $('.board td').removeClass('player1 player2');
  $('.board td').text("");
  clickCount = 0;
  $('.winTag').remove();
  winner = false;
}

function toe() {
  $('.background').css('background-image', 'url("http://www.paulkonrardy.com/images/Blog/MyLeftBigToe2.jpg")');
}

function robot() {
  $('.background').css('background-image', 'url("/Users/nathanjensby/code/wdi/wdi-atx-8/projects/tic-tac-toe/css/images/IMG_2534.jpg")');
}
