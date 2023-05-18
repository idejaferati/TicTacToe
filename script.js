// Game state
    let board = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
let gameStatus = 'ongoing';

// Winning combinations
const winningCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6] // Diagonals
];

// Function to make a move
function makeMove(index) {
    if (gameStatus === 'ongoing' && board[index] === '') {
        board[index] = currentPlayer;
        drawBoard();
        checkWinner();
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
}

// Function to check for a winner
function checkWinner() {
    for (let combination of winningCombinations) {
        const [a, b, c] = combination;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            gameStatus = 'finished';
            document.getElementById('game-status').textContent = `${board[a]} wins!`;
            break;
        }
    }
    if (gameStatus === 'ongoing' && !board.includes('')) {
        gameStatus = 'finished';
        document.getElementById('game-status').textContent = 'It\'s a tie!';
    }
}

// Function to draw the game board
function drawBoard() {
    const cells = document.getElementsByClassName('cell');
    for (let i = 0; i < cells.length; i++) {
        cells[i].textContent = board[i];
    }
}

// Function to reset the game
function resetGame() {
    board = ['', '', '', '', '', '', '', '', ''];
    currentPlayer = 'X';
    gameStatus = 'ongoing';
    drawBoard();
    document.getElementById('game-status').textContent = '';
}

// Initialize the game
drawBoard();