$(document).ready(function(){
  $('.board td').on("click", test) //adding update throws off mark function
})
var player = false;
var counter = 0;
var row1 = [$('td #1'), $('td #2'), $('td #3')]
var row2 = [$('td #4'), $('td #5'), $('td #6')]
var row3 = [$('td #7'), $('td #8'), $('td #9')]
// function to test if space is available
function test(event) {
  event.preventDefault()
  var cell = $(event.currentTarget);
    if(cell.text() === "X" || cell.text() === "O"){
      errorMessage();
      console.log("ruhroh");
    } if (cell.text() !== "X" || cell.text() !== "O"){
      move(player, $(this));
    }
}
//function to mark based off player turn
function move(inplay, cell) {
  if(inplay == false) {
    cell.text("X");
    player = true;
  }
  else if(inplay == true) {
    cell.text("O");
    player = false;
  }
  //moveCount(cell);
}
// error message to alert player space is taken
function errorMessage(){
  alert("this space is already taken.");
}
//count spaces and give win message
// function win() {
//   }
// }
// total count and return winner/call reset
// function count() {
//   for(i=0;i<3;i++){
//     var xcount = 0;
//     var ocount = 0;
//     if($('td #' + i).text() === "X"){
//       xcount++;
//     } else {
//       ocount++;
//     }
//   } console.log('this works!');
// }
// reset board and change winner score
// function reset() {
// $('td p1').text("1")
//   table = [];
//   player = false; }

// //on click increase move count
// function moveCount(event) {
//   event.preventDefault();
//   move_count++;
//   if (move_count == 9) {
//     count();
//   } else if(move_count > 9){
//   test();
//   }
//  console.log(move_count);
// }
