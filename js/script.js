$(document).ready(function () {
  $('.board td').click(function(e){
    e.stopPropagation();
    clickedSquare(e.target);
    });
  });

  ////////////PLAYERS////////////////////////////////////////////////
  var players=[{
    name:'player 1',
  },{ name:'player 2'
  }];
  var currentPlayer=0;
  var playerTurn=0;


////////////////////////////////CLICKS///////////////////////////////////
  function clickedSquare(target) {
    playerTurn++;
    var cell = $(target);
    var value = playerTurn% 2=== 0?'X':'O';
    cell.text(value);
    cell.attr('class',value+" square");
    $('#currentPlayer').text(playerTurn% 2=== 0?'2':'1');
    getWinner();
  }
// MAKING THE ROWS AND COLUMNS//////////////////////////////////////////
var cellNames=[]
var a=$('#a');
var b=$('#b');
var c=$('#c');
var d=$('#d');
var e=$('#e');
var f=$('#f');
var g=$('#g');
var h=$('#h');
var i=$('#i');

var winners = [
  [a,b,c],
  [d,e,f],
  [g,h,i],
  [a,d,g],
  [b,e,h],
  [c,f,i],
  [a,e,i],
  [c,e,g]
];

///////////////////////////WINNER//////////////////////////////////////
function getWinner(){
  var win = winners.filter(function(cells){
    var filterValue = cells[0].text();
    if(filterValue === ""){
      return false;
    }
    var win = cells.filter(function(cell){
      return cell.text() === filterValue;
    })
    return win.length === 3;
  })
  if(win.length === 1){
    var winningLetter = win[0][0].text();
    alert('winner is '+winningLetter);
    ////////////////////////////////////CLEAR/////////////////////////
    $('.square').empty();
    /////////////////////SCORE//////////////////////////////////////////
    var x = parseInt( $('#fieldSet2').text() );
    var o = parseInt( $('#fieldSet1').text() );
    if (winningLetter = ('X')) {
      x++;
    } else {
      o++;
    }
    $('#fieldSet2').text(o);
    $('#fieldSet1').text(x);
  }
//////////////////////////////CAT///////////////////////////////////////////
  if (catWon()) {
    $('.square').empty();
  }
};

function catWon(){
  if ($('.board td').text().length === 9) {
    return true
  }else{
    return false
  }
}
