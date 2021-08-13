const readlineSync = require('readline-sync');

console.log("スペースもしくはEnterで石置けます")
console.log("やめたい時はqを押す")
console.log("白の番")

class Board {
  drawBoard() {
    const board = 
    `
      -----------------
      | | | | | | | | |
      -----------------
      | | | | | | | | |
      -----------------
      | | | | | | | | |
      -----------------
      | | | |o|x| | | |
      -----------------
      | | | |x|o| | | |
      -----------------
      | | | | | | | | | 
      -----------------
      | | | | | | | | | 
      -----------------
      | | | | | | | | |
      -----------------
    `
    return board;
  }
}

const board = new Board
console.log(board.drawBoard());


const MAX = 60, MIN = 0;
let cursor = 30, place, key;
console.log(`\n\n${(new Array(20)).join(' ')}[Y] <- -> [X]  決定: [q]\n`);
while (true) {
    console.log('\x1B[1A\x1B[K|' + (new Array(cursor + 1)).join('-')
                + 'O'
                + (new Array(MAX - cursor + 1)).join('-') + '| '
                + 'now:' + cursor);
  const key = readlineSync.keyIn('',
    {hideEchoBack: true, mask: '', limit: 'yxpq'});
  if (key === 'y') { if (cursor > MIN) { cursor-=2; } }
  else if (key === 'x') { if (cursor < MAX) { cursor+=2; } }
  else if (key === 'q') { break; }
}
console.log(`\nあなたが決めた値: ${cursor}`);