
// 1. Add identifier in HTML elements to refer to in JS
// 2. Add event handler(s)
// 3. Notify that someone won
// 4. Check what valules in each box (.vars, .text, etc)
// 5. Switch current player on click
// 6. Check for a winner on click
// 7. Place marker inside the box
// 8. Reset the game
// 9. Set a tie if it happens
// 10. Check if box already has a value

$ (function(){
var box = '.box';
var player = '.player'; 
var symbol;

function switchPlayer(){
  if($(player).text() === '1'){
     $(player).text('2');
  } else {
      $(player).text('1');
  }

  if($(player).text() === '1'){
      $(this).text('O');
      symbol = 'O';
    } else {
      $(this).text('X');
      symbol = 'X';
  }
  };
  if (isWinner()){
    alert('is a winner');
};

function findWin(first,second,third){
  if ($(first).text() === symbol && $(second).text() === symbol && $(third).text() === symbol){
    return true;
  } else {
    return false;
  }
}

function isWinner(){
  var winCombos = [
    ['#1','#2','#3'],
    ['#4','#5','#6'],
    ['#7','#8','#9'],
    ['#3','#5','#7'],
    ['#1','#5','#9'],
    ['#1','#4','#7'],
    ['#2','#5','#8'],
    ['#3','#6','#9'],
  ];
  var winner = false;

  winCombos.forEach(function(combo,i){
    if(findWin(combo[0], combo[1], combo[2])){
      winner = true;
    }
    return winner;
  });
}
$(box).on('click', switchPlayer);

// $(alert).on('click', resetGame)

});

  // $(player).text(2);

// $('.box1').on
// $('.box2').on
// .....

// var winner = function(){
//   if($('#1, #2, #3').text() === '){
//     alert('X wins');
