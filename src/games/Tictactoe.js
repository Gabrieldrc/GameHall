
class Tictactoe {
  constructor() {
    this._board = [[' ',' ',' '],[' ',' ',' '],[' ',' ',' ']];
    this._x = true;
  }
  showBoard() {
    return this._board;
  }
  play(row, col) {
    if (this._board[row][col] !== ' ' || this.gameOver()) {
      return false;
    }
    if (this._x) {
      this._board[row][col] = 'X';
      this._x = !this._x;
    } else {
      this._board[row][col] = 'O';
      this._x = !this._x;
    }
    return true;
  }
  _won(sign) {
    return (this._board[0][0] === sign && this._board[0][1] === sign && this._board[0][2] === sign)
        || (this._board[1][0] === sign && this._board[1][1] === sign && this._board[1][2] === sign)
        || (this._board[2][0] === sign && this._board[2][1] === sign && this._board[2][2] === sign)
        || (this._board[0][0] === sign && this._board[1][0] === sign && this._board[2][0] === sign)
        || (this._board[0][1] === sign && this._board[1][1] === sign && this._board[2][1] === sign)
        || (this._board[0][2] === sign && this._board[1][2] === sign && this._board[2][2] === sign)
        || (this._board[0][0] === sign && this._board[1][1] === sign && this._board[2][2] === sign)
        || (this._board[0][2] === sign && this._board[1][1] === sign && this._board[2][0] === sign);
  }
  wonX() {
    return this._won('X');
  }
  wonO() {
    return this._won('O');
  }
  gameOver() {
    if (this.wonX() || this.wonO() || this.boarIsFull()) {
      return true;
    }
    return false;
  }

  boarIsFull() {
    for (let row = 0, size = this._board.length; row < size; row++) {
      for (let col = 0, sizeCol = this._board[row].length; col < sizeCol; col++) {
        if (this._board[row][col] === ' ') {
          return false;
        }   
      }
    }
    return true;
  }

  getTurn() {
    return this._x? 'X' : 'O';
  }
}

export default Tictactoe;