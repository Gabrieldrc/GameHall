import Hangman from '../games/Hangman';

let game;
beforeEach(() => {
    game = new Hangman();
});

test('setWord function should be defined', () => {
    expect(game.setWord("word")).toBeDefined();
});

test('setWord should not save more than one word', () => {
    expect(game.setWord("firstWord")).toBeTruthy();
    expect(game.setWord("secondWord")).toBeFalsy();
});

test('showUnderscores function should be defined', () => {
    expect(game.showUnderscores()).toBeDefined();
});

test('showUnderscores function should return an array of letter from the word', () => {
    const arrayReturned = ["_","_","_","_"];
    game.setWord("word")
    expect(game.showUnderscores()).toStrictEqual(arrayReturned);
});

test('playALetter function should be defined', () => {
    game.setWord("word")
    expect(game.playALetter("a")).toBeDefined();
});

test('playALetter function should return true if it plays', () => {
    game.setWord("word")
    expect(game.playALetter("a")).toBeTruthy();
});

test('playALetter function should return false if it plays a letter more than once', () => {
    game.setWord("word")
    expect(game.playALetter("a")).toBeTruthy();
    expect(game.playALetter("a")).toBeFalsy();
});

test('when it plays a letter, showUnderscores function should return an array of letter from the word', () => {
    const arrayReturned = ["_","_","r","_"];
    game.setWord("word");
    game.playALetter("r");
    expect(game.showUnderscores()).toStrictEqual(arrayReturned);
});

test('getLives function should be defined', () => {
    expect(game.getLives()).toBeDefined();
});

test('getLives should return 6 lives when the game starts', () => {
    expect(game.getLives()).toStrictEqual(6);
});

test('getLives should reduce 1 lives when a letter played is not on the guess word', () => {
    game.setWord("word");
    game.playALetter("x");
    expect(game.getLives()).toStrictEqual(5);
});

test('won function should be defined', () => {
    expect(game.won()).toBeDefined();
});

test('won should return false if showUnderscores function shows an underscore', () => {
    game.setWord("h");
    expect(game.won()).toBeFalsy();
});

test('won should return true if showUnderscores function does NOT shows underscores', () => {
    game.setWord("word");
    game.playALetter("w");
    game.playALetter("o");
    game.playALetter("r");
    game.playALetter("d");
    expect(game.won()).toBeTruthy();
});

test('lost function should be defined', () => {
    expect(game.lost()).toBeDefined();
});

test('lost should return false if getLives function returns a positive number', () => {
    game.setWord("h");
    expect(game.lost()).toBeFalsy();
});

test('lost should return true if getLives function returns cero', () => {
    game.setWord("word");
    game.playALetter("q");
    game.playALetter("e");
    game.playALetter("t");
    game.playALetter("y");
    game.playALetter("u");
    game.playALetter("i");
    expect(game.lost()).toBeTruthy();
});

test('gameOver function should be defined', () => {
    expect(game.gameOver()).toBeDefined();
});

test('gameOver returns true if won is true, otherwise false', () => {
    game.setWord("word");
    expect(game.gameOver()).toBeFalsy();
    game.playALetter("w");
    game.playALetter("o");
    game.playALetter("r");
    game.playALetter("d");
    expect(game.gameOver()).toBeTruthy();
});

test('gameOver returns true if lost is true, otherwise false', () => {
    game.setWord("word");
    expect(game.gameOver()).toBeFalsy();
    game.playALetter("q");
    game.playALetter("e");
    game.playALetter("t");
    game.playALetter("y");
    game.playALetter("u");
    game.playALetter("i");
    expect(game.gameOver()).toBeTruthy();
});

test('playALetter returns false if gameOver is true', () => {
    game.setWord("word");
    game.playALetter("w");
    game.playALetter("o");
    game.playALetter("r");
    game.playALetter("d");
    expect(game.playALetter("x")).toBeFalsy();
});

test('setWord and returns false if recieve numbers or special characters', () => {
    expect(game.setWord("1234asdsdf")).toBeFalsy();
    expect(game.setWord("asdsdf")).toBeTruthy();
    expect(game.setWord("asds&#df")).toBeFalsy();
});