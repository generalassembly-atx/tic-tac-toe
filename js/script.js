$(document).ready(function() {

  var squaresList = $('.square');



  // SETUP event listeners on all the squares
  for (var i = 0; i < squaresList.length; i++) {
    $(squaresList[i]).on('click', squareClick)
  }

});
// global variable player will be 1 or 2
// ------flip 1,2 later after the turn is run
var player = 1;

function squareClick(event) {
  if ($(this).html() != '') {
    alert('choose a better spot');
  } else if (player === 1) {
    $(this).html('<p>X</p>')
    player = 2;
  } else if (player === 2) {
    $(this).html('<p>O</p>');
    player = 1;
  }

}
