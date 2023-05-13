function bestMove() {
  let bestScore = -Infinity;
  let move;

  // Check if it is the first move
  let isFirstMove = true;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (board[i][j] !== '') {
        isFirstMove = false;
        break;
      }
    }
    if (!isFirstMove) {
      break;
    }
  }

  // Play in a random place if it is the first move
  if (isFirstMove) {
    let availableMoves = [];
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (board[i][j] == '') {
          availableMoves.push({ i, j });
        }
      }
    }
    move = random(availableMoves);
  } else {
    // Otherwise, use minimax algorithm
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (board[i][j] == '') {
          board[i][j] = ai;
          let score = minimax(board, 0, false);
          board[i][j] = '';
          if (score > bestScore) {
            bestScore = score;
            move = { i, j };
          }
        }
      }
    }
  }

  board[move.i][move.j] = ai;
  currentPlayer = person;
}


let scores = {
    X:10,
    0:-10,
    tie:0
}
function minimax(board, depth,isMaximizing){
    let result = checkWinner();
    if(result !== null){
        return scores[result];
    }
    if(isMaximizing){
        let bestScore=-Infinity;
        for(let i=0; i<3; i++) {
            for (let j = 0; j < 3; j++) {
                if (board[i][j] == '') {
                    board[i][j] = ai;
                    let score = minimax(board, depth + 1, false);
                    board[i][j] = '';
                    bestScore = max(score, bestScore);
                }
            }
        }
            return bestScore;
        } else {
            let bestScore=Infinity;
            for(let i=0; i<3; i++) {
                for (let j = 0; j < 3; j++) {
                    if (board[i][j] == '') {
                        board[i][j] = person;
                        let score = minimax(board, depth + 1, true);
                        board[i][j] = '';
                        bestScore =min(score,bestScore);
                    }
                }
            }
            return bestScore;

    }
    return 1;
}

