import sessionStorage from 'sessionStorage';

import { initialXOBoard, initialGame, isEmpty, move } from './index.js';

beforeAll(() => {
    sessionStorage.setItem('board', initialXOBoard(3,3));
    sessionStorage.setItem('turn', initialGame(true));
});

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
