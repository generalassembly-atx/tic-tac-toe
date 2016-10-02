$(document).ready(function() {
  $('.board').on('mousedown touchstart', 'td', playerClicked);
});
// Player Tracker:
player = 0;
// On click add x or o class based on player
// And change Current Player indicator
function playerClicked(e) {
  e.preventDefault();
  $('.winner').slideUp();
  var span = $('h2').find('span');
  if ($(this).hasClass('x')) {
    // alert('Cell is already occupied');
  } else if ($(this).hasClass('o')) {
    // alert('Cell is already occupied');
  } else if (player === 0) {
    span.removeClass('text-danger').text('2');
    $(this).addClass('x');
    isWinner();
    player = 1;
  } else if (player === 1) {
    span.addClass('text-danger').text('1');
    $(this).addClass('o');
    isWinner();
    player = 0;
  }
}

function oWin() {
  var p2 = $('#p2score');
  p2.html(parseInt(p2.html()) + 1);
  setTimeout(resetBoard, 1000);
  $('.winner').removeClass('text-danger').addClass('text-primary').text('Player 2 Wins!');
  $('.winner').slideDown();
}
function xWin() {
  var p1 = $('#p1score');
  p1.html(parseInt(p1.html()) + 1);
  setTimeout(resetBoard, 1000);
  $('.winner').addClass('text-danger').text('Player 1 Wins!');
  $('.winner').slideDown();
}
function resetBoard() {
  $('.board').find('td').removeClass('x o');
}

function isWinner() {
  if ($('#row1 .x').length === 3 || $('#row2 .x').length === 3 || $('#row3 .x').length === 3) {
    xWin();
  } else if ($('#row1 .o').length === 3 || $('#row2 .o').length === 3 || $('#row3 .o').length === 3) {
    oWin();
  } else if ($('.col1.x').length === 3 || $('.col2.x').length === 3 || $('.col3.x').length === 3) {
    xWin();
  } else if ($('.col1.o').length === 3 || $('.col2.o').length === 3 || $('.col3.o').length === 3) {
    oWin();
  } else if ($('.d1.o').length === 3 || $('.d2.o').length === 3) {
    oWin();
  } else if ($('.d1.x').length === 3 || $('.d2.x').length === 3) {
    xWin();
  } else if ($(".board td.o, .board td.x").length == $(".board td").length) {
    $('.winner').removeClass('text-danger text-primary').text('Cat Game').slideDown();
    setTimeout(resetBoard, 1000);
  }
}
$(document).on('keydown', function(e) {
  if (e.keyCode == 88) {
    xWin();
  } else if (e.keyCode == 79) {
    oWin();
  }
});
