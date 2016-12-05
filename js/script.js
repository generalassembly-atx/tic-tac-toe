$(document).ready(function () {

  var player = ('.player');
  var player = true;
  var turns = 0, maxTurns = 9;
  var playerOneScore = ('#player-1-score');
  var playerTwoScore = ('#player-2-score');



  $('.box').on('click', function(e) {

    if (player === true){
      $(this).text("X").off("click")
      player = false;
      $(player).text(2);

  }
    else{
      $(this).text("O").off("click")
      player = true;
      $(player).text(1);
    };

    turns ++;
    if (isWinner('#1','#2', "#3")|| //row 1
      isWinner('#4','#5', "#6")|| //row2
      isWinner('#7','#8', "#9")|| //row 3
      isWinner('#1','#4', "#7")|| //column 1
      isWinner('#2','#5', "#8")|| //column 2
      isWinner('#3','#6', "#9")|| //column3
      isWinner('#1','#5', "#9")|| //diag
      isWinner('#3','#5', "#7")) { // revdiag
        alert("You are a winner!");
        gameScore();
        $(".box").empty();
    }
    else {
        // Did we reach the maximum number of tries
        if (turns >= maxTurns) {
          alert("We have a Cat's Game!");
          $(".box").empty();
          return;
        }
  }

  });

    function isWinner(id1, id2, id3) {
    return  $(id1).text() && $(id1).text() === $(id2).text() && $(id2).text() === $(id3).text();
    }

    function gameScore() {
      for (var playerScore = 0; playerScore < playerOneScore.length; i++) {

          if("XXX"){
        playerOneScore++;
      }
        else{
          playerTwoScore++;
        }
        return console.log(true);
    }
  }
})
