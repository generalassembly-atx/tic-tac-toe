//HW: reset
// set score
//reset board 

$(function(){
  var playerOne = 'X', playerTwo = 'O';
  var currentPlayer = playerOne;
  var turns = 0; maxTurns = 9;
  //detect when a square has been clicked
  $('.box').on('click', function(){
    //set text of square

      $(this).text(currentPlayer);

      //increment turns counter
      turns++;
      //check if user is a winner
      if ( isWinner('#1', '#2', '#3') ||
        isWinner('#4', '#5', '#6') ||
        isWinner('#7', '#8', '#9') ||
        isWinner('#1', '#4', '#7') ||
        isWinner('#2', '#5', '#8') ||
        isWinner('#3', '#6', '#9') ||
        isWinner('#1', '#5', '#9') ||
        isWinner('#1', '#5', '#7') ){
          alert('We have a winner!');
        } else {
          //check if we've reached the max # of tries (tie game)
          if (turns >= maxTurns){
            alert('We have a tie game!');
          }
          //switch to otherplayer
          switchPlayer();
        }

      //remove event handler so they can't click that square again
      $(this).off('click');
      return currentPlayer;
  });

  function isWinner(id1, id2, id3){
    return ($(id1).text()) &&
    $(id1).text() === $(id2).text() &&
    $(id2).text()=== $(id3).text();
  }

  function switchPlayer(){
    if (currentPlayer === playerOne){
      currentPlayer = playerTwo;
      $('.playerTurn').text('2');
    } else {
      currentPlayer = playerOne;
      $('.playerTurn').text('1');
    }
  }
});
