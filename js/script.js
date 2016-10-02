
$(document).ready(function () {
  console.log('TIC TAC TOE');
  $('.board').on('click', changeUser)
  $('td').on('click', markSpace)
  $('tr').on('click', winAlert)
});


var count1 = 0;
var count2 = 0;
var countCat = 0;

function winAlert(e) {
  e.preventDefault()

  var topRowWin = $('#topRow .1,.2,.3').text() === 'XXX' || $('#topRow .1,.2,.3').text() === 'OOO';
  var middleRowWin = $('#middleRow .4,.5,.6').text() === 'XXX' || $('#middleRow .4,.5,.6').text() === 'OOO';
  var bottomRowWin = $('#bottomRow .7,.8,.9').text() === 'XXX' || $('#bottomRow .7,.8,.9').text() === 'OOO';

  var leftColumnWin = $('#column .1,.4,.7').text() === 'XXX' || $('#column .1,.4,.7').text() === 'OOO';
  var middleColumnWin = $('#column .2,.5,.8').text() === 'XXX' || $('#column .2,.5,.8').text() === 'OOO';
  var rightColumnWin = $('#column .3,.6,.9').text() === 'XXX' || $('#column .3,.6,.9').text() === 'OOO';

  var diagnolLeftWin = $('#column .1,.5,.9').text() === 'XXX' || $('#column .1,.5,.9').text() === 'OOO';
  var diagnolRightWin = $('#column .3,.5,.7').text() === 'XXX' || $('#column .3,.5,.7').text() === 'OOO';


  if (topRowWin || middleRowWin || bottomRowWin ||
      leftColumnWin || rightColumnWin || middleColumnWin ||
      diagnolRightWin || diagnolLeftWin) {
    alert('You Won' + ' ' + $('h2').text() + '!');
      function emptyBoard() {
        $('td.marked').empty().removeClass("marked")
          if ($('#currentPlayer').html() === '1') {
              count1++;
              $("#playerOneScore").html(" " + count1);
            }
          else if ($('#currentPlayer').text() === '2') {
              count2++;
              $("#playerTwoScore").html(" " + count2);
          }
      }
    return emptyBoard();


  } else if ($('#column .marked').length === 9) {
    function emptyBoard() {
      $('td.marked').empty().removeClass("marked")
      alert('the cat won fucker');
        countCat++;
        $("#playerCatScore").html(" " + countCat);
    }
    return emptyBoard();
  }
}


function changeUser(e) {
  e.preventDefault()

  if ($('#currentPlayer').text() === '1') {
    return $('#currentPlayer').text('2');
  } else if ($('#currentPlayer').text() === '2') {
    return $('#currentPlayer').text('1');
  }
}

function markSpace(e) {
  e.preventDefault()

  if ($('#currentPlayer').html() === '1'){
    $(this).addClass("marked").text('X');

  } else if ($('#currentPlayer').html() === '2') {
    $(this).addClass("marked").text('O');
  }
}
