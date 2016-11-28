$(function(){

var box = '.box',
	player = '#player',
	score = '.score',
	score1 = '#score1',
	score2 = '#score2',
	board = '.board',
	icon,
	player1 = 0,
	player2 = 0,
	p;


$(box).on('click',function(e){	
	if($(this).text() === ""){

	if($(player).text() === '1'){
		$(player).text('2');
	} else {$(player).text('1')};



	if($(player).text() === '1'){
		console.log('Set text O');
		$(this).text('O');
		icon = 'O';
		checkWin();
		tie();

		console.log(icon)
	} else {
		console.log('Set text X');
		$(this).text('X');
		icon = 'X';
		checkWin();
		tie();
		console.log(icon)
	}
};
});



function checkWin(){
	if($('#1').text() === icon && $('#2').text() === icon &&$('#3').text() === icon){
		win()
	}
	if($('#4').text() === icon && $('#5').text() === icon &&$('#6').text() === icon){	
		win()
	}
	if($('#7').text() === icon && $('#8').text() === icon &&$('#9').text() === icon){	
		win()
	}	
	if($('#1').text() === icon && $('#4').text() === icon &&$('#7').text() === icon){	
		win()
	}
	if($('#2').text() === icon && $('#5').text() === icon &&$('#8').text() === icon){	
		win()
	}
	if($('#3').text() === icon && $('#6').text() === icon &&$('#9').text() === icon){	
		win()
	}
	if($('#1').text() === icon && $('#5').text() === icon &&$('#9').text() === icon){	
		win()
	}
	if($('#3').text() === icon && $('#5').text() === icon &&$('#7').text() === icon){	
		win()
	}

}

function tie(){
	if($('#1').text() !== "" && $('#2').text() !== "" && $('#3').text() !== "" && $('#4').text() !== "" && $('#5').text() !== "" && $('#6').text() !== "" && $('#7').text() !== "" && $('#8').text() !== "" && $('#9').text() !== ""){
		$('#text').text('TIE');
		clear();
	}  
}


function win(){
		playerStatus();
		scored();
		$('#text').text('Player ' + p + ' has won!' );
		clear();
}

function clear(){
	$("#1").text("");
	$("#2").text("");
	$("#3").text("");
	$("#4").text("");
	$("#5").text("");
	$("#6").text("");
	$("#7").text("");
	$("#8").text("");
	$("#9").text("");

}

function playerStatus(){
	if (icon === "X"){
		p = '1';
	} else { p = '2'}
}

function scored(){
	if (p === '1'){
		player1++;
		$(score1).text(player1)

	} else {
		player2++;
		$(score2).text(player2)
	}
}










})


// 4. add alert when win
// 5. need logic to determine how to win - functions
// 6. check values in the boxes
