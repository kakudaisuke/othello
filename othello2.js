class Board {
  constructor() {
    this.height = 8;
    this.width = 8;
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

class Stone {
  constructor(row, col) {
    this.row = row;
    this.col = col;
  }
  place(n, row, col) {
    // もしマスの外だったら置けない
    if (row >= 8 || row <= -1 || col >= 8 || row <= -1) {
      console.log("そこには置けないよ(>_<)");
      return;
    } 
    else if (board.grid[row][col] !== 0) {
      // 空のマスでないと置けない
      console.log("そこには置けないよ(>_<)");
      return;
    }
    // 偶数回ならo、奇数回ならxを置く
    if (n % 2 === 0) {
      board.grid[row][col] = 1;
    } else {
      board.grid[row][col] = -1;
    }
  }
}


const readline = require('readline');

const main = async () => {
  for (let n = 0; n < 60; n++) {
    const answer = await prompt(`どこに置きますか？（例）3,4  `);
    if (answer === "q") {
      console.log("ゲームを終了します。");
      break;
    } else {
      const [ row, col ] = answer.split(",");
      console.log(`${row}, ${col}に置きます。\n`);
      const stone = new Stone;
      stone.place(n, row - 1, col - 1);
    }
    // 次のターンのボードを表示する
    console.log("\n");
    board.draw();
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

// 初回のボード描画
const board = new Board;
board.draw();

// 起動
(async () => {
  await main();
})();
