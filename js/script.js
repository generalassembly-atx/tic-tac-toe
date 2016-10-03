$(document).ready(function () {
    // Variables to be used in later functions
    var o = "o";
    var x = "x";
    var turn = 0;

    // This function allows the user to see the symbols which are placed on the board, and generates each symbols turn.
    $('.board td').on('click', function (event) {
      var letter;
      var cell = $(this)
      if (turn % 2 === 0) {
        letter = 'x'
      } else {
        letter = 'o'
      }
      cell.text(letter)
      cell.addClass(letter)

      // If statements to alert the user which player has won
      if (checkWinner(letter)) {
        if (letter === x) {
        alert('X wins')
      } else if (letter === o) {
        alert('O wins')
      }

    //   else if $('.board td').hasClass(letter) {
    //    alert('Already filled');
    //  }
        // reset board
        $('.board td').text('');
        $('.board td').removeClass('o');
        $('.board td').removeClass('x');
        }
      else {
        console.log('no winner');
      }
      turn+=1;
    });


});

// Function which activates the winning combinations on the board
function checkWinner(letter) {
  if (rowHasLetter(letter, "#1", "#2", "#3")) {
    return true
  } else if (rowHasLetter(letter, "#4", "#5", "#6")) {
    return true
  } else if (rowHasLetter(letter, "#7", "#8", "#9")) {
    return true
  } else if (rowHasLetter(letter, "#1", "#4", "#7")) {
    return true
  } else if (rowHasLetter(letter, "#2", "#5", "#8")) {
    return true
  } else if (rowHasLetter(letter, "#3", "#6", "#9")) {
    return true
  } else if (rowHasLetter(letter, "#1", "#5", "#9")) {
    return true
  } else if (rowHasLetter(letter, "#7", "#8", "#9")) {
    return true
  } else if (rowHasLetter(letter, "#3", "#5", "#7")) {
    return true
  }

  return false
};

function rowHasLetter(letter, cell1, cell2, cell3) {
  return $(cell1).hasClass(letter) && $(cell2).hasClass(letter) &&
  $(cell3).hasClass(letter)
}


  //   $('.board td').on('click', function () {
  //     if
  //       ($("#1").hasClass('o') && $("#2").hasClass('o') &&
  //       $("#3").hasClass('o') || $("#4").hasClass('o') &&
  //       $("#5").hasClass('o') && $("#6").hasClass('o') ||
  //       $("#7").hasClass('o') && $("#8").hasClass('o') &&
  //       $("#9").hasClass('o') || $("#1").hasClass('o') &&
  //       $("#4").hasClass('o') && $("#7").hasClass('o') ||
  //       $("#2").hasClass('o') && $("#5").hasClass('o') &&
  //       $("#8").hasClass('o') || $("#3").hasClass('o') &&
  //       $("#6").hasClass('o') && $("#9").hasClass('o') ||
  //       $("#1").hasClass('o') && $("#5").hasClass('o') &&
  //       $("#9").hasClass('o') || $("#3").hasClass('o') &&
  //       $("#5").hasClass('o') && $("#7").hasClass('o'))
  //    {
  //     alert('winner: 0');
  //       $('.board td').text('+');
  //       // $('.board td').removeClass('disable');
  //       $('.board td').removeClass('o');
  //       $('.board td').removeClass('x');
  //   }
  //     else if($("#1").hasClass('x') && $("#2").hasClass('x') &&
  //       $("#3").hasClass('x') || $("#4").hasClass('x') &&
  //       $("#5").hasClass('x') && $("#6").hasClass('x') ||
  //       $("#7").hasClass('x') && $("#8").hasClass('x') &&
  //       $("#9").hasClass('x') || $("#1").hasClass('x') &&
  //       $("#4").hasClass('x') && $("#7").hasClass('x') ||
  //       $("#2").hasClass('x') && $("#5").hasClass('x') &&
  //       $("#8").hasClass('x') || $("#3").hasClass('x') &&
  //       $("#6").hasClass('x') && $("#9").hasClass('x') ||
  //       $("#1").hasClass('x') && $("#5").hasClass('x') &&
  //       $("#9").hasClass('x') || $("#3").hasClass('x') &&
  //       $("#5").hasClass('x') && $("#7").hasClass('x'))
  //     {
  //       alert('winner: x');
  //       $('.board td').text('+');
  //       // $('.board td').removeClass('disable');
  //       $('.board td').removeClass('o');
  //       $('.board td').removeClass('x');
  //     }
  //     else if(turn === 9) {
  //       alert('Draw');
  //       $('.board td').text('+');
  //       // $('.board td').removeClass('disable');
  //       $('.board td').removeClass('o');
  //       $('.board td').removeClass('x');
  //       turn = 0;
  //     }
  //     else if ($(this).hasClass(x, o)) {
  //       alert('Already filled');
  //     }
  //     else if(turn % 2 === 0) {
  //       turn++;
  //       $(this).text(o);
  //         $(this).addClass(o);
  //         ($("#1").hasClass('o') && $("#2").hasClass('o') &&
  //         $("#3").hasClass('o') || $("#4").hasClass('o') &&
  //         $("#5").hasClass('o') && $("#6").hasClass('o') ||
  //         $("#7").hasClass('o') && $("#8").hasClass('o') &&
  //         $("#9").hasClass('o') || $("#1").hasClass('o') &&
  //         $("#4").hasClass('o') && $("#7").hasClass('o') ||
  //         $("#2").hasClass('o') && $("#5").hasClass('o') &&
  //         $("#8").hasClass('o') || $("#3").hasClass('o') &&
  //         $("#6").hasClass('o') && $("#9").hasClass('o') ||
  //         $("#1").hasClass('o') && $("#5").hasClass('o') &&
  //         $("#9").hasClass('o') || $("#3").hasClass('o') &&
  //         $("#5").hasClass('o') && $("#7").hasClass('o'))
  //       {
  //         alert('O has won');
  //         turn = 0;
  //     }
  //
  // }
  //
  //     else {
  //       turn++;
  //       $(this).text(x);
  //       // $(this).addClass('disable x');
  //       if
  //       ($("#1").hasClass('x') && $("#2").hasClass('x') &&
  //       $("#3").hasClass('x') || $("#4").hasClass('x') &&
  //       $("#5").hasClass('x') && $("#6").hasClass('x') ||
  //       $("#7").hasClass('x') && $("#8").hasClass('x') &&
  //       $("#9").hasClass('x') || $("#1").hasClass('x') &&
  //       $("#4").hasClass('x') && $("#7").hasClass('x') ||
  //       $("#2").hasClass('x') && $("#5").hasClass('x') &&
  //       $("#8").hasClass('x') || $("#3").hasClass('x') &&
  //       $("#6").hasClass('x') && $("#9").hasClass('x') ||
  //       $("#1").hasClass('x') && $("#5").hasClass('x') &&
  //       $("#9").hasClass('x') || $("#3").hasClass('x') &&
  //       $("#5").hasClass('x') && $("#7").hasClass('x'))
  //
  //       {
  //         alert('X has won');
  //         turn = 0;
  //       }
  //     }





    //     $('reset').click(function() {
    //     $('.board td').text('+');
    //     $('.board td').removeClass('disable');
    //     $('.board td').removeClass('o');
    //     $('.board td').removeClass('x');
    //     turn = 0;
    // })
