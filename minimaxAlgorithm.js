function bestMove() {
    let bestScore = -Infinity;
    let move;

  
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
  
    if (isFirstMove) {
        move = randomAvailableMove();
    } else {
//  Use minimax algorithm with alpha-beta pruning
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (board[i][j] == '') {
                    board[i][j] = playerX;
                    const score = minimax(board, 0, false, -Infinity, Infinity);
                    board[i][j] = '';
            if (score > bestScore) {
              bestScore = score;
              move = { i, j };
            }
          }
        }
      }
    }

    // if (!move) {
    //     move = randomAvailableMove();
    // }
  
    board[move.i][move.j] = playerX;
    currentPlayer = player0;
  }

const scores = {
    X: 10,
    0: -10,
    tie: 0
};

function randomAvailableMove() {
    let availableMoves = [];
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
              if (board[i][j] == '') {
          availableMoves.push({ i, j });
        }
      }
    }
    move = random(availableMoves);
    return move;
}

function minimax(board, depth, isMaximizing, alpha, beta) {
    const result = checkWinner();
    if (result !== null) {
        return scores[result];
    }

    if (isMaximizing) {
        let bestScore = -Infinity;
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (board[i][j] == '') {
                    board[i][j] = playerX;
                    const score = minimax(board, depth + 1, false, alpha, beta);
                    board[i][j] = '';
                    bestScore = max(score, bestScore);
                    alpha = max(alpha, score);
                    if (beta <= alpha) {
                        break;
                    }
                }
            }
        }
        return bestScore;
    } else {
        let bestScore = Infinity;
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (board[i][j] == '') {
                    board[i][j] = player0;
                    const score = minimax(board, depth + 1, true, alpha, beta);
                    board[i][j] = '';
                    bestScore = min(score, bestScore);
                    beta = min(beta, score);
                    if (beta <= alpha) {
                        break;
                    }
                }
            }
        }
        return bestScore;
    }
}