$(function(){

var currentPlayer = true;

var player1 = "X",
		player2 = "O";
var player1Win = "XXX";
var player2Win = "OOO";
var player1_score = 0;
var player2_score = 0;
var turns = 0, maxTurns = 9;


$('.player1_score').text(player1_score);
$('.player2_score').text(player2_score);

$('td').on('click', function(){
	if ($(this).text()) {
		return;
	}
	if (turns++ >= maxTurns) {
		alert("We have a cat's game!");
	};
	if (currentPlayer === true){
		$(this).text(player1);
		$('span').text("2");
		currentPlayer = false;
	} else {
		$(this).text(player2);
		$('span').text("1");
		currentPlayer = true;
	}
	if (turns >= maxTurns) {
		alert("We have a cat's game!");
		$('.board td').empty();
		$('span').text("1");
		currentPlayer = true;
		turns = 0;
	}
	checkWinner();
});

$('#btn-show').click(function() {
	$('.board td').empty();
	$('span').text("1");
	currentPlayer = true;
	turns = 0;
    // location.reload();
});

function checkWinner(e){
/* rows */
	if($('.row1 td').text() === player1Win){
		$('.player1_score').text(player1_score + 1);
		player1_score = player1_score + 1;
		$('.board td').empty();
		$('span').text("1");
		currentPlayer = true;
		turns = 0;
		alert("player 1 is the winner");
	} else if
		($('.row1 td').text() === player2Win){
			$('.player2_score').text(player2_score + 1);
			player2_score = player2_score + 1;
			$('.board td').empty();
			$('span').text("1");
			currentPlayer = true;
			turns = 0;
			alert("player 2 is the winner");
	} else if
		($('.row2 td').text() === player1Win){
			$('.player1_score').text(player1_score + 1);
			player1_score = player1_score + 1;
			$('.board td').empty();
			$('span').text("1");
			currentPlayer = true;
			turns = 0;
			alert("player 1 is the winner");
	} else if
		($('.row2 td').text() === player2Win){
			$('.player2_score').text(player2_score + 1);
			player2_score = player2_score + 1;
			$('.board td').empty();
			$('span').text("1");
			currentPlayer = true;
			turns = 0;
			alert("player 2 is the winner");
	} else if
		($('.row3 td').text() === player1Win){
			$('.player1_score').text(player1_score + 1);
			player1_score = player1_score + 1;
			$('.board td').empty();
			$('span').text("1");
			currentPlayer = true;
			turns = 0;
			alert("player 1 is the winner");
	} else if
		($('.row3 td').text() === player2Win){
			$('.player2_score').text(player2_score + 1);
			player2_score = player2_score + 1;
			$('.board td').empty();
			$('span').text("1");
			currentPlayer = true;
			turns = 0;
			alert("player 2 is the winner");

/* columns */
		} else if
			($('.c1').text() === player1Win){
				$('.player1_score').text(player1_score + 1);
				player1_score = player1_score + 1;
				$('.board td').empty();
				$('span').text("1");
				currentPlayer = true;
				turns = 0;
				alert("player 1 is the winner");
		} else if
			($('.c1').text() === player2Win){
				$('.player2_score').text(player2_score + 1);
				player2_score = player2_score + 1;
				$('.board td').empty();
				$('span').text("1");
				currentPlayer = true;
				turns = 0;
				alert("player 2 is the winner");
		} else if
			($('.c2').text() === player1Win){
				$('.player1_score').text(player1_score + 1);
				player1_score = player1_score + 1;
				$('.board td').empty();
				$('span').text("1");
				currentPlayer = true;
				turns = 0;
				alert("player 1 is the winner");
		} else if
			($('.c2').text() === player2Win){
				$('.player2_score').text(player2_score + 1);
				player2_score = player2_score + 1;
				$('.board td').empty();
				$('span').text("1");
				currentPlayer = true;
				turns = 0;
				alert("player 2 is the winner");
		} else if
			($('.c3').text() === player1Win){
				$('.player1_score').text(player1_score + 1);
				player1_score = player1_score + 1;
				$('.board td').empty();
				$('span').text("1");
				currentPlayer = true;
				turns = 0;
				alert("player 1 is the winner");
		} else if
			($('.c3').text() === player2Win){
				$('.player2_score').text(player2_score + 1);
				player2_score = player2_score + 1;
				$('.board td').empty();
				$('span').text("1");
				currentPlayer = true;
				turns = 0;
				alert("player 2 is the winner");

/* diagonals */
		} else if
			($('#d1, #d2, #d3').text() === player1Win){
				$('.player1_score').text(player1_score + 1);
				player1_score = player1_score + 1;
				$('.board td').empty();
				$('span').text("1");
				currentPlayer = true;
				turns = 0;
				alert("player 1 is the winner");
		} else if
			($('#d1, #d2, #d3').text() === player2Win){
				$('.player2_score').text(player2_score + 1);
				player2_score = player2_score + 1;
				$('.board td').empty();
				$('span').text("1");
				currentPlayer = true;
				turns = 0;
				alert("player 2 is the winner");

		} else if
			($('#d4, #d2, #d5').text() === player1Win){
				$('.player1_score').text(player1_score + 1);
				player1_score = player1_score + 1;
				$('.board td').empty();
				$('span').text("1");
				currentPlayer = true;
				turns = 0;
				alert("player 1 is the winner");
		} else if
			($('#d4, #d2, #d5').text() === player2Win){
				$('.player2_score').text(player2_score + 1);
				player2_score = player2_score + 1;
				$('.board td').empty();
				$('span').text("1");
				currentPlayer = true;
				turns = 0;
				alert("player 2 is the winner");
		}
	}
});

// (td and scores)
// add identifiers to html elements
// add event handlers
// declare a winner function
// change current player on click
// add x or o in boxes
// check if a tie (cats game)
// make square unclickable if already checked
// add a reset on winner or tie
