$(document).ready(function() {

var count = 0;
        $('td').on('click', function(){
            if (count % 2 === 0) {
              $(this).text('X');
              $('span').text("1");
              checkForWin('X');
            } else {
           //player 2's turn (O)
              $(this).text('O');
              $('span').text('2');
              checkForWin('O');
            }
          count++;

      });


      function checkForWin() {
          if ($('#1').text() === $('#2').text() && $('#2').text() === $('#3').text()) {
            console.log('win');
          }



      }





});
