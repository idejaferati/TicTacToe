function bestMove(){

    let bestScore = -Infinity;
    let move;
    for(let i=0; i<3; i++){
        for(let j=0; j<3; j++){
            //me kqyr a eshte i lir katrori
            if(board[i][j] == ''){
                board[i][j]=ai;
                let score=minimax(board,0,true);
                board[i][j]='';
                if(score>bestScore){
                    bestScore=score;
                    move={i,j};
                }
            }
        }
    }

    board[move.i][move.j]=ai;
    currentPlayer=person;
}

let scores = {
    X:1,
    0:-1,
    tie:0
}

function minimax(board, depth,isMaximizing){
    let result = checkWinner();
    if(result !== null){
        let score=scores[result]
        return true;
    }
    if(isMaximizing){

    }
    return 1;
}
