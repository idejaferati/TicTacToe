let board = [
<<<<<<< Updated upstream
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];

let player1 = "X";
let player2 = "0";

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  let w = width / 3;
  let h = height / 3;

  for (let j = 0; j < 3; j++) {
    for (let i = 0; i < 3; i++) {
      let x = w * i + w / 2;
      let y = h * j + h / 2;
      let spot = board[i][j];
      textSize(32);
      strokeWeight(4);
      if (spot == player2) {
        noFill();
        ellipse(x, y, w / 2);
      } else if (spot == player1) {
        let xr = w / 4;
        line(x - xr, y - xr, x + xr, y + xr);
        line(x + xr, y - xr, x - xr, y + xr);
      }
    }
  }
}
=======
    ['','',''],
    ['','',''],
    ['','',''],
   ];
   let players = ['X','0'];
   let currentPlayer ;
   function setup(){
    createCanvas(400, 400);
    if(random(1)<0.5){
    currentPlayer=players[0];
    }else{
    currentPlayer=players[1];
    }
    
   }
   function draw(){
    background(255);
    let w = width / 3;
    let h=height / 3;
    
    for (let j=0; j<3; j++){ 
    for(let i=0; i<3; i++){
    let x=w*i+w/2;
    let y=h*j+h/2;
    let spot=board[i][j];
    textSize(32);
    strokeWeight(4); 
    if (spot==players[1]){
    noFill();
    ellipseMode(CORNER);
    ellipse(x,y,w/2);
    }else if (spot==players[0]){
    let xr=w/4;
    line(x-xr,y-zr,x+xr,y+xr);
    line(x+xr,y-xr,x-xr,y+xr);
    }
    
    }
   }
  }
>>>>>>> Stashed changes
