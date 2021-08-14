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
  update() {

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


const readline = require('readline');

const main = async () => {
  for (;;) {
    const answer = await prompt(`どこに置きますか？（例）3,4  `);
    if (answer === "q") {
      console.log("ゲームを終了します。");
      break;
    } else {
      const [ row, col ] = answer.split(",");
      console.log(`${row}, ${col}に置きます。`);
      const stone = new Stone;
      stone.place(row - 1, col - 1);
    }
    console.log("\n");
  }
};

const prompt = async (msg) => {
  console.log(msg);
  const answer = await question('> ');
  return answer;
};

const question = (question) => {
  const readlineInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  return new Promise((resolve) => {
    readlineInterface.question(question, (answer) => {
      resolve(answer);
      readlineInterface.close();
    });
  });
};

// 起動
(async () => {
  await main();
})();

