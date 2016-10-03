$(document).ready( function () {
  $('.board').on('click', changePlayerCount);
  $('.board td').on('mouseup', toggleX);
  $('.board td').on('mouseup', toggleO);
  $('td').on('mousedown', noLayover);
  $('td').on('click', countX);
  // $('td').on('click', countO);
  $('.board').on('click', clearBoardX)
  // $('.board').on('click', clearBoardO)
  $('td').on('click', winX);
  $('td').on('click', winO);
  // $('.board').on('click', winCounter)
});
var Xs = 0;
$('#winner').text('');
var player1Score = parseInt($('.p1Score').text());
var player2Score = parseInt($('.p2Score').text());
// var row1 = [$('#1'), $('#2'), $('#3') ]
// console.log($(row1).text());
// console.log($(row1).children().text());
// var Os = 0;
// function winCounter(e) {
//   e.preventDefault();
//   if ( {
//
//   }
// }
function winX(e) {
  e.preventDefault();
  $('#winner').text('');
  if ($('#1').text() + $('#2').text() + $('#3').text() === 'XXX' ||
  $('#4').text() + $('#5').text() + $('#6').text() === 'XXX' ||
  $('#7').text() + $('#8').text() + $('#9').text() === 'XXX' ||
  $('#1').text() + $('#5').text() + $('#9').text() === 'XXX' ||
  $('#3').text() + $('#5').text() + $('#7').text() === 'XXX' ||
  $('#1').text() + $('#4').text() + $('#7').text() === 'XXX' || $('#2').text() + $('#5').text() + $('#8').text() === 'XXX' || $('#3').text() + $('#6').text() + $('#9').text() === 'XXX') {
    player1Score++;
    $('.p1Score').text(player1Score);
    $('#winner').text('Player 1 Wins!');
    $('.board td').empty();
    // return Os = 0;
    $('td').removeClass('X');
    $('td').removeClass('O');
    return Xs = 0;
  }
}
function winO(e) {
  e.preventDefault();
  if ($('#1').text() + $('#2').text() + $('#3').text() === 'OOO' ||
  $('#4').text() + $('#5').text() + $('#6').text() === 'OOO' ||
  $('#7').text() + $('#8').text() + $('#9').text() === 'OOO' ||
  $('#1').text() + $('#5').text() + $('#9').text() === 'OOO' ||
  $('#3').text() + $('#5').text() + $('#7').text() === 'OOO' || $('#1').text() + $('#4').text() + $('#7').text() === 'OOO' || $('#2').text() + $('#5').text() + $('#8').text() === 'OOO' || $('#3').text() + $('#6').text() + $('#9').text() === 'OOO') {
    player2Score++;
    $('.p2Score').text(player2Score);
    $('#winner').text('Player 2 Wins!');
    $('.board td').empty();
    // return Os = 0;
    $('td').removeClass('X');
    $('td').removeClass('O');
    return Xs = 0;
  }
}
// var player1Score = $('.p1Score').val();
// var player2Score = $('.p2Score').val();

// function clearBoardO(e) {
//   e.preventDefault();
//   $('td').removeClass('X');
//   $('td').removeClass('O');
//   if (Os === 5) {
//     $('.board td').empty();
//     return Xs = 0;
//     return Os = 0;
//   }
// }
function clearBoardX() {
  if (Xs === 9) {
    $('.board td').empty();
    // return Os = 0;
    $('td').removeClass('X');
    $('td').removeClass('O');
    $('#winner').text('Cat Game!');
    return Xs = 0;
  }

  // $('td').removeClass('O');

}

function countX(e) {
  e.preventDefault();
  if ($(this).hasClass('X') || $(this).hasClass('O')) {
    Xs++;
  }
  // console.log(Xs);
}

// function countO(e) {
//   e.preventDefault();
//   if ($(this).hasClass('O')) {
//      Os++;
//   }
//   console.log(Os);
// }

function toggleX(e) {
  e.preventDefault();
  if ($('#player1turn').text() === '1' ) {
    $(this).addClass('X');
    $(this).text('X');
  } //else if ($(this).text() !== '') {
   //alert('this box is already full')
 //}
}
function toggleO(e) {
  e.preventDefault();
  if ($('#player1turn').text() === '2' ){
  $(this).addClass('O');
  $(this).text('O');
} //else if ($(this).text() !== '') {
  //alert('this box is already full')
//}
}



function changePlayerCount() {
    if ($('#player1turn').text() === '1') {
        return $('#player1turn').text('2')
    }  else {
        $('#player1turn').text('1')
    }
    return $('#player1turn').text();
  }
//var counter = $(this).closest('h2 span').text();
//   $('span').toggleClass('player1turn')
//   if ($(counter).hasClass('player1turn')) {
//     return $(counter).text('1')
//   } else {
//     return $(counter).text('2');
//   }
// }

  function noLayover() {
   if ($(this).hasClass('X') || $(this).hasClass('O')) {
     alert('Someone has already played this square!')
   }
  }



// $(document).ready( function () {
//   $('h2').on('mouseup', 'span', changePlayerCount);
//   $('.board').on('click', 'td', toggleX);
//   $('.board').on('click', 'td', toggleO);
// });
//
//   function toggleX(e) {
//     e.preventDefault();
//     var xOrO = $('h2 span').text();
//       if (xOrO === '1') {
//         $(this).addClass('X')
//         return $(this).text('x');
//       } else {
//         $(this).addClass('O');
//         return $(this).text('o');
//       }
//   }
// function changePlayerCount() {
//   var counter = $(this).text();
//   $(this).toggleClass('player1turn')
//   if ($(this).hasClass('player1turn')) {
//     return $(this).text('1')
//   } else {
//     return $(this).text('2');
//   }
// }
