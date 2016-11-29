
$(function (){
var counter = 0;
var player = $('#current');
var playerWin = $('#current').text();
var scoreCounter = 0;
var score = 0;

$('.board tbody td').on('click', clickCounter);

function clickCounter(event) {
 counter++;
if (spaceTaken(this) === false){

 if (counter % 2 === 0) {
   $('#current').text(2);
   $(this).text('O');
 } else {
   $('#current').text(1);
   $(this).text('X');
  }
 }
 if(isWinner()){
   $('#winner').text('Player ' + player.text() + ' wins!');
 }
 $(this).off('click', function(){
   alert("Hey buddy, frig off!")
 });

}




function spaceTaken(t){
 if($(t).text() !== ''){
   return true;
 } else {
   return false;
 }
}

function isWinner(){
 var combos = [
   ['#td1','#td1','#td2','#td2','#td3'],
   ['#td4','#td4','#td5','#td5','#td6'],
   ['#td7','#td7','#td8','#td8','#td9'],
   ['#td1','#td1','#td4','#td4','#td7'],
   ['#td2','#td2','#td5','#td5','#td8'],
   ['#td3','#td3','#td6','#td6','#td9'],
   ['#td1','#td1','#td5','#td5','#td9'],
   ['#td3','#td3','#td5','#td5','#td7'],

 ];
 var winner = false;
if (counter >= '9'){
  $('#winner').text("It's a cat's game!");
  $('.board tbody td').empty();
  counter = 0
}

 combos.forEach(function(combo,i){
   var win = ($(combo[0]).text() && ($(combo[1]).text()) === $(combo[2]).text()) && ($(combo[3]).text()=== $(combo[4]).text());
   //console.log(win);
   if(win){
     winner = true;

   }
 });

 return winner;
}
$(isWinner).text()

$('#reset').click(function(){
 location.reload();
});





});









// $('.box').on('click', function(e){
//   $(this)
// });
