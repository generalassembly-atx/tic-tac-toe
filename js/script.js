
var player1;
var player2;
var count1 = 0;
var count2 = 0;
var x = "X";
var o = "O";
var player1 = true;
var winner = false;
var currentPlayer = "X";
var turns = 0;



var switchPlayer = function(){
  if(currentPlayer === "X"){
    currentPlayer = "O";
    $('#currentPlayer').text("2");
  }else{
    currentPlayer = "X";
    $('currentPlayer').text("1");
  }
}


var checkBox = function(boxValue){
  if(boxValue !== ""){
    boxFull = true;
  }else{
    boxFull = false;
  }
}




var checkWinner = function(){
  var y = currentPlayer;

  var turd = (($('#1').text() === y) && ($('#2').text() === y) && ($('#3').text() === y))
  || (($('#4').text() === y) && ($('#5').text() === y) && ($('#6').text() === y))
  || (($('#7').text() === y) && ($('#8').text() === y) && ($('#9').text() === y))
  || (($('#1').text() === y) && ($('#4').text() === y) && ($('#7').text() === y))
  || (($('#2').text() === y) && ($('#5').text() === y) && ($('#8').text() === y))
  || (($('#3').text() === y) && ($('#6').text() === y) && ($('#9').text() === y))
  || (($('#1').text() === y) && ($('#5').text() === y) && ($('#9').text() === y))
  || (($('#7').text() === y) && ($('#5').text() === y) && ($('#3').text() === y))

  return turd;
}

//We could turn the turd above into a function:

// function isWinner(id1, id2, id3) {
//   return (($(id1).text() === y) && ($(id2).text() === y) && ($(id3).text() === y))


//and pass the values in like so:

// isWinner('#1', '#2', '#3')

var reset = function(){
  $('.square').text("");
  turns = 0;
}





$('.square').on('click', function(){
  checkBox($(this).text());
  if(boxFull){
      alert("Box already full!");
      switchPlayer();
  }else{
      $(this).text(currentPlayer);
      turns++;
  }



  if(checkWinner()){
    $('h3').text(currentPlayer + " Wins!");
    if(currentPlayer === "X"){
      count1++;
      $('#p1score').text(count1);
      reset();
    }else{
      count2++;
      $('#p2score').text(count2);
      reset();
    }
  }else{
    if(turns >= 9){
      $('h3').text("Tie game!");
      reset();
    }else{
      switchPlayer();
    }


  }

});





// on each click-check for:
// 1. which player is this?
//
// 2. onclick, is the box full?
//   -if yes--do not fill
//   -if no -- fill it
//
// 3.is there a winner?
//   -if yes--alert winner, update score & reset board
//   -if no--
//     if tie--alert and reset
//     else -- switch player
