const initialXOBoard = (x, y) => (new Array(x).fill("").map(x => new Array(y).fill("")));

const initialGame = (player) => ({ player: ((player)?'O':'X'), round: 1});

const isEmpty = (board, x, y) => (board[x][y] && board[x][y] != (false || ""));

const move = (board, player, x, y) => (board[x][y] = player);

export { initialXOBoard, initialGame, isEmpty, move };
