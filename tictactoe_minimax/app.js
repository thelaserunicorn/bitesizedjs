var board = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
];

var HUMAN = -1;
var COMP = +1;

/* state = current board state */
function gameOver(state, player){
    var win_state = [
        [state[0][0], state[0][1], state[0][2]],
		[state[1][0], state[1][1], state[1][2]],
		[state[2][0], state[2][1], state[2][2]],
		[state[0][0], state[1][0], state[2][0]],
		[state[0][1], state[1][1], state[2][1]],
		[state[0][2], state[1][2], state[2][2]],
		[state[0][0], state[1][1], state[2][2]],
		[state[2][0], state[1][1], state[0][2]],
    ];
    for (var i=0; i<8; i++){
        var line = win_state[i];
        var filled = 0;
        for (var j=0; j < 3; j++){
            if (line[j] == player){
                filled++;
            }
        }
        if (filled = 3){
            return true;
        }
    }
}
function gameOverAll(state) {
	return gameOver(state, HUMAN) || gameOver(state, COMP);
}

function emptyCells(state) {
	var cells = [];
	for (var x = 0; x < 3; x++) {
		for (var y = 0; y < 3; y++) {
			if (state[x][y] == 0)
				cells.push([x, y]);
		}
	}

	return cells;
}

function validMove(x, y){
    var empties = emptyCells(board);
    try{
        if (board[x][y]==0){
            return true;
        }
        else{
            return false;
        }
        
    } catch(e){
        return false;
    }
 }




function evaluate(state){
    var score = 0;
    if (gameOver(state, COMP)){
        score = +1;
    }
    else if (gameOver(state, HUMAN)){
        score = -1;
    }
    else{
        score = 0;
    }
    return score;
}