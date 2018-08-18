const initialXOBoard = (x, y) => (new Array(x).fill("").map(x => new Array(y).fill("")));

const initialGame = (player) => ({ player: ((player)?'O':'X'), round: 1});

const isEmpty = (board, x, y) => (board[x][y] && board[x][y] != (false || ""));

const move = (board, player, x, y) => (board[x][y] = player);

const changeTurn = ({player, round}) => ({player: (player === 'O') ? 'X':'O',round: round+=1});

const verifyBoard = (board, player) => {
    let status = true;
    
    // first diagonal
    for (let i=0;i<board.length;i++) {
        status = status && (board[i][i] == player);
    }
    if(status) return status;

    // second diagonal
    status = true;
    for (let i=0;i<board.length;i++) {
        const l = board.length - 1;
        status = status && (board[l-i][i] == player);
    }
    if(status) return status;

    for (let i=0;i<board.length;i++) {
        status = true;

        // horizontal
        for (let x=0;x<board[i].length;x++) {
            status = status && (board[i][x] == player);
        }
        if(status) return status;

        // vertical
        for (let x=0;x<board[i].length;x++) {
            status = status && (board[x][i] == player);
        }
        if(status) return status;

    }

    // draw
    let block = true;
    for(let x=0;x<board.length;x++) {
        for(let y=0;y<board[x].length;y++) {
            block = block && (board[x][y] != '');
        }
    }
    if(block) return { "status": "draw" };

    return false;

};

export { initialXOBoard, initialGame, isEmpty, move, changeTurn, verifyBoard };
