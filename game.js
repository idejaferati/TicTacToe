let board = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];

let w; //= width / 3;
let h; //= height / 3;

const playerX = "X";
const player0 = "0";

let currentPlayer = player0;
let playerLabel;

let restartButton;
let resultP;

let isGameOver = false; // Flag variable to track game over state

let playSwitch;

function setup() {
  createCanvas(400, 400);
  w = width / 3;
  h = height / 3;

  playerLabel = createP("");
  playerLabel.class("player"); 
  setPlayerLabel();

  resultP = createP("");
  resultP.class("result"); // Assign the "result" class to the element

  bestMove();
  playSwitch = document.getElementById('playSwitch');
  playSwitch.addEventListener('change', togglePlayMode);

  restartButton = document.getElementById('restartButton');
  // Add a click event listener to the restart button
  restartButton.addEventListener("click", resetGame);
}

function setPlayerLabel() {
  if (checkWinner() !== null || isBoardFull()) {
    playerLabel.html("Game is finished");
  } else if (currentPlayer === player0) {
    playerLabel.html("Player O, it's your turn");
  } else {
    playerLabel.html("Player X, it's your turn");
  }
}

function equals3(a, b, c) {
  return a == b && b == c && a != "";
}

function checkWinner() {
  let winner = null;

  // horizontal
  for (let i = 0; i < 3; i++) {
    if (equals3(board[i][0], board[i][1], board[i][2])) {
      winner = board[i][0];
      break;
    }
  }

  // vertical
  for (let i = 0; i < 3; i++) {
    if (equals3(board[0][i], board[1][i], board[2][i])) {
      winner = board[0][i];
      break;
    }
  }

  // diagonal
  if (equals3(board[0][0], board[1][1], board[2][2])) {
    winner = board[0][0];
  }

  if (equals3(board[2][0], board[1][1], board[0][2])) {
    winner = board[2][0];
  }

  let openSpots = 0;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (board[i][j] == "") {
        openSpots++;
      }
    }
  }

  if (winner == null && openSpots == 0) {
    return "tie";
  } else {
    return winner;
  }
}

function togglePlayMode() {
  resetGame();
}

function resetGame() {
  // Reset the game state here
  board = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];

  isGameOver = false;

  resultP.html(""); // Clear the result label

  if (playSwitch.checked) {
    bestMove();
  }

  currentPlayer = player0;

  setPlayerLabel();

  loop();
}

function handleMove(i, j) {
  if (!isGameOver && board[i][j] === "") {
    board[i][j] = currentPlayer;
    if (currentPlayer === player0) {
      currentPlayer = playerX;
    } else {
      currentPlayer = player0;
    }
    setPlayerLabel();

    if (playSwitch.checked) {
      if (!isGameOver) {
        playerLabel.html("Computer is thinking...");
          setTimeout(() => {
            if (!(checkWinner() !== null || isBoardFull())) {
              bestMove();
              setPlayerLabel();
            }
          }, 600);
      }
    }

    if (checkWinner() !== null || isBoardFull()) {
      isGameOver = true;
      setPlayerLabel();
    }
  }
}

function mousePressed() {  
  if (mouseX >= 0 && mouseX <= width && mouseY >= 0 && mouseY <= height) {
    if (playSwitch.checked) {
      if (currentPlayer === player0 && !isGameOver) {
        const i = floor(mouseX / w);
        const j = floor(mouseY / h);
        handleMove(i, j);
      }
    } else {
      if (!isGameOver) {
        const i = floor(mouseX / w);
        const j = floor(mouseY / h);
        handleMove(i, j);
      }

      if (checkWinner() !== null || isBoardFull()) {
        isGameOver = true;
        setPlayerLabel();
      }
    }
    return;
  }

  // Check if the restart button is clicked
  const buttonRect = restartButton.getBoundingClientRect();
  const buttonCondition = mouseX >= buttonRect.left &&
                          mouseX <= buttonRect.right &&
                          mouseY >= buttonRect.top &&
                          mouseY <= buttonRect.bottom;

  const switchRect = playSwitch.getBoundingClientRect();
  const switchCondition = mouseX >= switchRect.left &&
                        mouseX <= switchRect.right &&
                        mouseY >= switchRect.top &&
                        mouseY <= switchRect.bottom;

  if (
    buttonCondition || switchCondition
  ) {
    resetGame();
    return;
  }
}

function draw() {
  background(255);
  strokeWeight(8);

  line(w, 0, w, height);
  line(w * 2, 0, w * 2, height);
  line(0, h, width, h);
  line(0, h * 2, width, h * 2);

  for (let j = 0; j < 3; j++) {
    for (let i = 0; i < 3; i++) {
      let x = w * i + w / 2;
      let y = h * j + h / 2;
      let spot = board[i][j];
      textSize(32);
      strokeWeight(15);
      if (spot == player0) {
        noFill();
        ellipse(x, y, w / 2);
      } else if (spot == playerX) {
        let xr = w / 4;
        line(x - xr, y - xr, x + xr, y + xr);
        line(x + xr, y - xr, x - xr, y + xr);
      }
    }
  }

  const result = checkWinner();
  if (result != null) {
    noLoop();

    if (result == "tie") {
      resultP.html("Tie!");
    } else {
      resultP.html(`Player ${result == "0" ? 'O' : "X"} wins!`);
    }
  }
}

function isBoardFull() {
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (board[i][j] === "") {
        return false;
      }
    }
  }
  return true;
}
