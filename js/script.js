

    function win() {

    }


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


        console.log(icon)
    } else {
        console.log('Set text X');
        $(this).text('X');
        icon = 'X';
        checkWin();

        console.log(icon)
    }
};
});



function checkWin(){
    if($('#item1').text() === icon && $('#item2').text() === icon &&$('#item3').text() === icon){
        win()
    }
    if($('#item4').text() === icon && $('#item5').text() === icon &&$('#item6').text() === icon){
        win()
    }
    if($('#item7').text() === icon && $('#item8').text() === icon &&$('#item9').text() === icon){
        win()
    }
    if($('#item1').text() === icon && $('#item4').text() === icon &&$('#item7').text() === icon){
        win()
    }
    if($('#item2').text() === icon && $('#item5').text() === icon &&$('#item8').text() === icon){
        win()
    }
    if($('#item3').text() === icon && $('#item6').text() === icon &&$('#item9').text() === icon){
        win()
    }
    if($('#item1').text() === icon && $('#item5').text() === icon &&$('#item9').text() === icon){
        win()
    }
    if($('#item3').text() === icon && $('#item5').text() === icon &&$('#item7').text() === icon){
        win()
    }

}


function win(){
        playerStatus();
        scored();
        $('#text').text('Player ' + p + ' has won!' );
        clear();
}

function clear(){
    $("#item1").text("");
    $("#item2").text("");
    $("#item3").text("");
    $("#item4").text("");
    $("#item5").text("");
    $("#item6").text("");
    $("#item7").text("");
    $("#item8").text("");
    $("#item9").text("");

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
