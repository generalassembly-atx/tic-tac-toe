$(document).ready(function(){
  $('.board td').on('click', placePiece)
//  $('.board').on('click', turnOrder)
});

function placePiece(e) {
  var insertLetter= 0
  var currentLetter= "X"


  $(this).text(currentLetter)
//}
};

// function turnOrder(e) {
//   var player= 0
//   player= player+1
//   console.log(player)
// }


var count = 0;

$(".board td").click(function() {
    count++;
    $("#counter").html("My current count is: "+count);
    var totalclick= count
    if (totalclick % 2===0){
      console.log("Player 1's turn");
      $('span').html(1)

    } else {
      console.log("Player 2's turn");
      $('span').html(2)
    }

});



// function isEven(n) {
//    return n % 2 == 0;
// }
//
// function isOdd(n) {
//    return Math.abs(n % 2) == 1;
// }
