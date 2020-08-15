import Tictactoe from '../games/Tictactoe';

let game;
beforeEach(() => {
    game = new Tictactoe();
});

test('the showBoard function should be defined', () => {    
    expect(game.showBoard()).toBeDefined();
});

test('the showBoard function return an empty matrix 3x3', () => {    
    const board = [[' ',' ',' '],[' ',' ',' '],[' ',' ',' ']];
    expect(game.showBoard()).toStrictEqual(board);
});

test('play function should be defined', () => {    
    expect(game.play(2,4)).toBeDefined();
});

test('play function returns true if it does', () => {
    expect(game.play(0,0)).toBeTruthy();
});

test('play function returns updates de board and always is X first', () => {
    const boardReturned = [['X',' ',' '],[' ',' ',' '],[' ',' ',' ']];
    game.play(0,0);
    expect(game.showBoard()).toStrictEqual(boardReturned);
});

test('play function altern from X first to O', () => {
    const boardReturned = [['X',' ',' '],['O',' ',' '],[' ',' ',' ']];
    game.play(0,0);
    game.play(1,0);
    expect(game.showBoard()).toStrictEqual(boardReturned);
});
   
test('play function return false when the grid is not empty and Not update the board', () => {
    const boardReturned = [['X',' ',' '],[' ',' ',' '],[' ',' ',' ']];
    game.play(0,0);
    expect(game.play(0,0)).toBeFalsy();
    expect(game.showBoard()).toStrictEqual(boardReturned);
});

test('there should be a wonX function', () => {
    expect(game.wonX()).toBeDefined();
});

test('false when there are No matches', () => {
    //Plays the X
    game.play(0,0);
    //Plays the O
    game.play(1,0);
    //Plays the X
    game.play(0,1);
    //Plays the O
    game.play(1,1);
    //Plays the X
    game.play(2,2);
    expect(game.wonX()).toBeFalsy();
});

// X Rows

test('true whenthere are just X on first row', () => {
    //Plays the X
    game.play(0,0);
    //Plays the O
    game.play(1,0);
    //Plays the X
    game.play(0,1);
    //Plays the O
    game.play(1,1);
    //Plays the X
    game.play(0,2);
    expect(game.wonX()).toBeTruthy();
});

test('true whenthere are just X on second row', () => {
    //Plays the X
    game.play(1,0);
    //Plays the O
    game.play(0,0);
    //Plays the X
    game.play(1,1);
    //Plays the O
    game.play(0,1);
    //Plays the X
    game.play(1,2);
    expect(game.wonX()).toBeTruthy();
});

test('true whenthere are just X on third row', () => {
    //Plays the X
    game.play(2,0);
    //Plays the O
    game.play(0,0);
    //Plays the X
    game.play(2,1);
    //Plays the O
    game.play(0,1);
    //Plays the X
    game.play(2,2);
    expect(game.wonX()).toBeTruthy();
});

// X Col

test('true whenthere are just X on first col', () => {
    //Plays the X
    game.play(0,0);
    //Plays the O
    game.play(0,1);
    //Plays the X
    game.play(1,0);
    //Plays the O
    game.play(1,1);
    //Plays the X
    game.play(2,0);
    expect(game.wonX()).toBeTruthy();
});

test('true whenthere are just X on second col', () => {
    //Plays the X
    game.play(0,1);
    //Plays the O
    game.play(0,0);
    //Plays the X
    game.play(1,1);
    //Plays the O
    game.play(0,2);
    //Plays the X
    game.play(2,1);
    expect(game.wonX()).toBeTruthy();
});

test('true whenthere are just X on third col', () => {
    //Plays the X
    game.play(0,2);
    //Plays the O
    game.play(0,0);
    //Plays the X
    game.play(1,2);
    //Plays the O
    game.play(0,1);
    //Plays the X
    game.play(2,2);
    expect(game.wonX()).toBeTruthy();
});

test('there should be a wonO function', () => {
    expect(game.wonO()).toBeDefined();
});

// O Rows

test('true whenthere are just O on first row', () => {
    //Plays the X
    game.play(2,2);
    //Plays the O
    game.play(0,0);
    //Plays the O
    game.play(1,0);
    //Plays the X
    game.play(0,1);
    //Plays the O
    game.play(1,1);
    //Plays the X
    game.play(0,2);
    expect(game.wonO()).toBeTruthy();
});

test('true whenthere are just O on second row', () => {
    //Plays the X
    game.play(2,2);
    //Plays the O
    game.play(1,0);
    //Plays the O
    game.play(0,0);
    //Plays the X
    game.play(1,1);
    //Plays the O
    game.play(0,1);
    //Plays the X
    game.play(1,2);
    expect(game.wonO()).toBeTruthy();
});

test('true whenthere are just O on third row', () => {
    //Plays the X
    game.play(1,1);
    //Plays the O
    game.play(2,0);
    //Plays the O
    game.play(0,0);
    //Plays the X
    game.play(2,1);
    //Plays the O
    game.play(0,1);
    //Plays the X
    game.play(2,2);
    expect(game.wonO()).toBeTruthy();
});

// O Col

test('true whenthere are just O on first col', () => {
    //Plays the X
    game.play(2,2);
    //Plays the O
    game.play(0,0);
    //Plays the O
    game.play(0,1);
    //Plays the X
    game.play(1,0);
    //Plays the O
    game.play(1,1);
    //Plays the X
    game.play(2,0);
    expect(game.wonO()).toBeTruthy();
});

test('true whenthere are just O on second col', () => {
    //Plays the X
    game.play(2,2,);
    //Plays the O
    game.play(0,1);
    //Plays the O
    game.play(0,0);
    //Plays the X
    game.play(1,1);
    //Plays the O
    game.play(0,2);
    //Plays the X
    game.play(2,1);
    expect(game.wonO()).toBeTruthy();
});

test('true whenthere are just O on third col', () => {
    //Plays the X
    game.play(1,1);
    //Plays the O
    game.play(0,2);
    //Plays the O
    game.play(0,0);
    //Plays the X
    game.play(1,2);
    //Plays the O
    game.play(0,1);
    //Plays the X
    game.play(2,2);
    expect(game.wonO()).toBeTruthy();
});

//

test('there should be a gameOver function', () => {
    expect(game.gameOver()).toBeDefined();
});

test('gameOver function returns false if no one won jet', () => {
    expect(game.gameOver()).toBeFalsy();
});

test('gameOver function returns false if there is no more place to play', () => {
    game.play(0,0);
    game.play(0,1);
    game.play(0,2);
    game.play(1,0);
    game.play(1,1);
    game.play(1,2);
    game.play(2,0);
    game.play(2,1);
    game.play(2,2);
    expect(game.gameOver()).toBeTruthy();
});

test('gameOver function returns true if X won', () => {
    //Plays the X
    game.play(0,1);
    //Plays the O
    game.play(0,0);
    //Plays the X
    game.play(1,1);
    //Plays the O
    game.play(0,2);
    //Plays the X
    game.play(2,1);
    expect(game.gameOver()).toBeTruthy();
});

test('gameOver function returns true if O won', () => {
    //Plays the X
    game.play(1,1);
    //Plays the O
    game.play(0,2);
    //Plays the O
    game.play(0,0);
    //Plays the X
    game.play(1,2);
    //Plays the O
    game.play(0,1);
    //Plays the X
    game.play(2,2);
    expect(game.gameOver()).toBeTruthy();
});

test('there should be a getTurn function', () => {
    expect(game.getTurn()).toBeDefined();
});

test('getTurn function returns X if its turn to X, otherwise returns O', () => {
    expect(game.getTurn()).toStrictEqual('X');
    game.play(0,0);
    expect(game.getTurn()).toStrictEqual('O');
});