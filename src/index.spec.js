import sessionStorage from 'sessionStorage';

import { initialXOBoard, initialGame, isEmpty, move, changeTurn, verifyBoard } from './index.js';

// beforeAll(() => {
//     sessionStorage.setItem('board', initialXOBoard(3,3));
//     sessionStorage.setItem('turn', initialGame(true));
// });

describe('TEST INITIAL BOARD & GAME', () => {

    test('should xo board to be 3x3', () => {
        const expected = [
            ["", "", ""],
            ["", "", ""],
            ["", "", ""]
        ];
        expect(initialXOBoard(3,3)).toEqual(expected);
    });

    test('should be initial game with \'O\' turn', () => {
        const expected = {
            player: 'O',
            round: 1
        };
        expect(initialGame(true)).toEqual(expected);
    });

    test('should be initial game with \'X\' turn', () => {
        const expected = {
            player: 'X',
            round: 1
        };
        expect(initialGame(false)).toEqual(expected);
    });

});

describe('TEST ISEMPTY', () => {

    const board = initialXOBoard(3, 3);

    test('should be empty on [0][0]', () => {
        expect(isEmpty(board, 0, 0)).toBeFalsy();
    });

    test('should be not empty on [0][0]', () => {
        board[0][0] = 'O';
        expect(isEmpty(board, 0, 0)).toBeTruthy();
    });

});

describe('TEST MOVE PLAYER', () => {

    const board = initialXOBoard(3, 3);

    test('should be return true with player \'O\' at [0][0]', () => {
        expect(move(board, 'O', 0, 0)).toBeTruthy();
    });

});

describe('TEST VERRIFY BOARD', () => {

    test('should be in game', () => {
        const board = initialXOBoard(3,3);
        board[0][0] = 'O';
        expect(verifyBoard(board, 'O')).toBe(false);
    });

    test('should be winner with horizontal', () => {
        const board = initialXOBoard(3,3);
        board[0][0] = 'O';
        board[1][0] = 'X';
        board[0][1] = 'O';
        board[2][1] = 'X';
        board[0][2] = 'O';
        expect(verifyBoard(board, 'O')).toBe(true);
    });

    test('should be winner with vertical', () => {
        const board = initialXOBoard(3,3);
        board[0][0] = 'O';
        board[1][0] = 'X';
        board[0][1] = 'O';
        board[2][1] = 'X';
        board[0][2] = 'O';
        expect(verifyBoard(board, 'O')).toBe(true);
    });

    test('should be winner with diagonal left -> right', () => {
        const board = initialXOBoard(3,3);
        board[0][0] = 'O';
        board[0][1] = 'X';
        board[1][1] = 'O';
        board[0][2] = 'X';
        board[2][2] = 'O';
        expect(verifyBoard(board, 'O')).toBe(true);
    });

    test('should be winner with diagonal right -> left', () => {
        const board = initialXOBoard(3,3);
        board[0][2] = 'O';
        board[0][1] = 'X';
        board[1][1] = 'O';
        board[1][2] = 'X';
        board[2][0] = 'O';
        expect(verifyBoard(board, 'O')).toBe(true);
    });

    test('should be draw', () => {
        const board = initialXOBoard(3,3);
        board[0][0] = 'O';
        board[0][1] = 'X';
        board[0][2] = 'X';
        board[1][0] = 'X';
        board[1][1] = 'X';
        board[1][2] = 'O';
        board[2][0] = 'O';
        board[2][1] = 'O';
        board[2][2] = 'X';
        const expected = { "status": "draw" };
        expect(verifyBoard(board, 'X')).toMatchObject(expected);
    });

});

describe('TEST CHANGE TURN', () => {

    test('should be turn \'X\' from \'O\' with round 2', () => {
        const current = { player: 'O', round: 1};
        const expected = { player: 'X', round: 2};
        expect(changeTurn(current)).toEqual(expected);
    });

    test('should be turn \'O\' from \'X\' with round 3', () => {
        const current = { player: 'X', round: 2};
        const expected = { player: 'O', round: 3};
        expect(changeTurn(current)).toEqual(expected);
    });

});
