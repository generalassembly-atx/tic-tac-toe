$(document).ready(function() {
	$('.board').on('click', 'td', playerClicked);
	// Player Tracker:
	player = 0;
	// On click add x or o class based on player
	// And change Current Player indicator
	function playerClicked() {
		$('.winner').slideUp()
		if ($(this).hasClass('x')) {
			// alert('Cell is already occupied');
		} else if ($(this).hasClass('o')) {
			// alert('Cell is already occupied');
		} else if (player === 0) {
			$('h2').find('span').removeClass('text-danger')
			$('h2').find('span').addClass('text-primary');
			$(this).addClass('x');
			$('h2').find('span').text('2');
			isWinner();
			player = 1;
		} else if (player === 1){
			$('h2').find('span').addClass('text-danger')
			$(this).addClass('o');
			$('h2').find('span').text('1');
			isWinner();
			player = 0
		}
	}

	function isWinner() {

		function oWin() {
			var $p2 = $('#p2');
			$p2.html(parseInt($p2.html()) + 1);
			resetBoard();
			$('.winner').text('Player 2 Wins!').slideDown();
		}
		function xWin() {
			var $p1 = $('#p1');
			$p1.html(parseInt($p1.html()) + 1);
			resetBoard();
			$('.winner').text('Player 1 Wins!').slideDown();
		}
		function resetBoard() {
			$('.board').find('td').removeClass('x o');
		}

		if ($('#row1 .x').length === 3 || $('#row2 .x').length === 3 || $('#row3 .x').length === 3) {
			xWin();
		} else if ($('#row1 .o').length === 3 || $('#row2 .o').length === 3 || $('#row3 .o').length === 3) {
			oWin();
		} else if ($('.col1.x').length === 3 || $('.col2.x').length === 3 || $('.col3.x').length === 3) {
			xWin();
		} else if ($('.col1.o').length === 3 || $('.col2.o').length === 3 || $('.col3.o').length === 3) {
			oWin();
		} else if ($('.d1.o').length === 3 || $('.d2.o').length === 3) {
			oWin();
		} else if ($('.d1.x').length === 3 || $('.d2.x').length === 3) {
			xWin();
		} else if ($(".board td.o, .board td.x").length == $(".board td").length) {
			resetBoard();

		}
	}
});
