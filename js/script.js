$(document).ready(function(){
  $('.board td').on('click', placePiece)
  $('td').on('click', findWin)

});

var audio= new Audio('audio/welcometotheboardroom.mp3');
audio.play();

var count = 0;

function placePiece(){

    var totalclick= count
    if ($(this).html().length === 1) {
      var thatistakenaudio= new Audio('audio/ijusthatetosee.mp3');
      thatistakenaudio.play();
      alert ('that is taken')
    }

    else if (totalclick % 2===0){
      console.log("Player 1's turn");
      $('span').html(1)
      $(this).html('X')
      count++;

    } else {
      console.log("Player 2's turn");
      $('span').html(2)
      $(this).html('O')
      count++;

    }

};

function findWin(e){
  e.preventDefault()
  var p1row1win= $('#spot1').text()+$('#spot2').text()+$('#spot3').text()
  var p1row2win= $('#spot4').text()+$('#spot5').text()+$('#spot6').text()
  var p1row3win= $('#spot7').text()+$('#spot8').text()+$('#spot9').text()
  var p1col1win= $('#spot1').text()+$('#spot4').text()+$('#spot7').text()
  var p1col2win= $('#spot2').text()+$('#spot5').text()+$('#spot8').text()
  var p1col3win= $('#spot3').text()+$('#spot6').text()+$('#spot9').text()
  var p1diag1= $('#spot1').text()+$('#spot5').text()+$('#spot9').text()
  var p1diag2= $('#spot3').text()+$('#spot5').text()+$('#spot7').text()
  var allplayed = $('#spot1').text()+$('#spot2').text()+$('#spot3').text()+ $('#spot4').text()+$('#spot5').text()+$('#spot6').text()+ $('#spot7').text()+$('#spot8').text()+$('#spot9').text()

  console.log(allplayed);
  var winner= false
  if (p1row1win === 'XXX' || p1row2win === 'XXX' || p1row3win === 'XXX'|| p1col1win === 'XXX' || p1col2win === 'XXX' || p1col3win === 'XXX'|| p1diag1 === 'XXX'|| p1diag2 === 'XXX' ){
    var player1= $('#p1score').text();
    var play1audio= new Audio('audio/damngoodjob.mp3');
    play1audio.play();
    winner= true
    alert('PLAYER 1 WINS!');
    player1++;
    console.log(player1);
    $('.board td').empty();
    $('#p1score').text(player1)

  } else if (p1row1win === 'OOO' || p1row2win === 'OOO' || p1row3win === 'OOO'|| p1col1win === 'OOO' || p1col2win === 'OOO' || p1col3win === 'OOO'|| p1diag1 === 'OOO'|| p1diag2 === 'OOO' ){
    var play2audio= new Audio('audio/smartestandtoughest.mp3');
    play2audio.play();
    var player2= $('#p2score').text();
    winner= true
    alert('PLAYER 2 WINS!');
    player2++;
    $('.board td').empty();
    $('#p2score').text(player2)
  } else if (allplayed.length===9 && winner=== false){
    alert('Nobody wins!')
    $('.board td').empty();
  }


}
