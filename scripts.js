$(document).ready(function(){

    let turn = "X";

    $(".turn").html(turn);

    // generate board
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            $(".board").append( $("<div class='square'></div>") );
        }
    }

    // place X or O on board
    $(".square").click(function() {
        if( $(this).is(":empty") ) {
            if (turn === "X") {
                $(this).html("<div class='x'>X</div>");
                turn = "O";
                $(".turn").html(turn);
            }
            else if (turn === "O") {
                $(this).html("<div class='o'>O</div>");
                turn = "X";
                $(".turn").html(turn);
            }
        }
    });

});