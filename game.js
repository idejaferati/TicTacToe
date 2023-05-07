<<<<<<< Updated upstream
let board = [  ['', '', ''],
    ['', '', ''],
    ['', '', '']
=======
let board = [ ['','',''],
 ['','',''],
 ['','',''],
>>>>>>> Stashed changes
];

let players = ['X', 'O'];
let currentPlayer;
let available = [];

function setup() {
<<<<<<< Updated upstream
    createCanvas(400, 400);
    currentPlayer = random(players);
}

function draw() {
    background(255);
    let w = width / 3;
    let h = height / 3;

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
            strokeWeight(4);
            if (spot == players[1]) {
                noFill();
                ellipseMode(CORNER);
                ellipse(x, y, w / 2);
            } else if (spot == players[0]) {
                let xr = w / 4;
                line(x - xr, y - xr, x + xr, y + xr);
                line(x + xr, y - xr, x - xr, y + xr);
            }

        }
=======
  createCanvas(400, 400);
  currentPlayer = floor(random(players.length));
  

  for (let j = 0; j < 3; j++) { 
    for (let i = 0; i < 3; i++) {
      available.push([i, j]);
    }
  }
}

function nextTurn() {
  let index = floor(random(available.length));
  let spot = available.splice(index, 1);
  let i = spot[0][0];
  let j = spot[0][1];

  board[i][j] = players[currentPlayer];
  currentPlayer = (currentPlayer + 1) % players.length;
}

function draw() {
  background(255);
  let w = width / 3;
  let h = height / 3;
 
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
      strokeWeight(4); 

      if (spot == players[1]) {
        noFill();
        ellipseMode(CORNER);
        ellipse(x, y, w / 2);
      } else if (spot == players[0]) {
        let xr = w / 4;
        line(x - xr, y - xr, x + xr, y + xr);
        line(x + xr, y - xr, x - xr, y + xr);
      }
>>>>>>> Stashed changes
    }
  }

  nextTurn();
}