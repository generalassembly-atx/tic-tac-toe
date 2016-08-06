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
    var winSearch = [[1,4,7],[2,5,8],[3,6,9],[1,2,3],[4,5,6],[7,8,9],[1,5,9],[3,5,7]];
    var match = winSearch.indexOf(a);
    if ((match === 0) ||(match === 1) ||(match === 2) ||(match === 3) ||(match === 4) ||(match === 5) ||(match === 6) ||(match === 7) ||(match === 8)) {
      return a
    }
  });

});

function moveMaker() {
  if ($('#currentPlayer').text() === '1') {
    $('#currentPlayer').text('2')
  } else {
    $('#currentPlayer').text('1')
  }
}
