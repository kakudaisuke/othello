class Board {
  constructor() {
    this.grid = [
      [0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0],
      [0,0,0,-1,1,0,0,0],
      [0,0,0,1,-1,0,0,0],
      [0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0],
    ]
  }
  draw() {
    let board = "\n  12345678 \n";
    board += "  -------- \n";
    for (let x = 0; x < 8; x++ ) {
      board += `${x+1}|`;
      for (let y = 0; y < 8; y++) {
        if (this.grid[x][y] === 0) {
          board += " ";
        } else if (this.grid[x][y] === 1) {
          board += "o";
        } else if (this.grid[x][y] === -1) {
          board += "x";
        }
      }
      board += "|\n"
    }
    board += "  -------- \n";
    console.log(board);
  }
}

const board = new Board;
board.draw();

class Stone {
  constructor(row, col) {
    this.row = row;
    this.col = col;
  }
  place(row, col) {
    const b = new Board();
    b.grid[row][col] = 1;
    b.draw();
  }
}

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

for (let i = 0; i < 5; i++) {
  readline.question(`${i+1}回目です。どこに置きますか？ `, (params) => {
    const [ row, col ] = params;
    console.log(`${row}, ${col}に置きます。`);
    const stone = new Stone;
    stone.place(row - 1, col - 1);
    readline.close();
  });
}

