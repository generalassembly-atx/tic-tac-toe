$(document).ready(function () {
  var currentPlayer = 'x';

  $('.squares').on('click', function () {

    if ($(this).text() === 'x' || $(this).text() === 'o') {
      alert('This square is already taken! Choose another.')
    } else {
        if (currentPlayer === 'x') {
          $(this).text('x')
          currentPlayer = 'o';
        } else {
          $(this).text('o')
          currentPlayer = 'x';
        }
    }
    // if () {
    //   alert("Congratulations, you've won!")
    // } else {
    //   console.log('no winner')
    // }
  });

});

function moveMaker() {
  if ($('#currentPlayer').text() === '1') {
    $('#currentPlayer').text('2')
  } else {
    $('#currentPlayer').text('1')
  }
}
