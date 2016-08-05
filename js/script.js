$(document).ready(function () {
  $('.squares').on('click', function () {
    var marker = ('x' || 'o')
    if ($('.squares').text() === marker) {
      alert('This square is already taken! Choose another.')
    } else {
        if ($(this) === $('.playerOne') {
          $('.squares').text('x')
        } else {
        } $('.squares').text('o')
    }
  })

});

//need to call it still
function moveMaker() {
  if ($('#currentPlayer').text() === '1') {
    $('#currentPlayer').text('2')
  } else {
    $('#currentPlayer').text('1')
  }
}
