

class Hangman {
  _word = "";
  _lettersPlayed = [];
  _lives = 6;
  setWord(word) {
    if (this._word !== "") {
      return false;
    }
    if ( word.match(/[^A-Za-z]/g)) {
      return false;
    }
    this._word = word.toLowerCase();
    return true;
  }

  showUnderscores() {
    let array = [];
    for (let index = 0, size = this._word.length; index < size; index++) {
      if (this._lettersPlayed.find(letterPlayed => letterPlayed === this._word[index]) !== undefined) {
        array.push(this._word[index]);
      } else array.push("_");
    }
    return array;
  }

  playALetter(letter) {
    if (this._lettersPlayed.find(letterPlayed => letterPlayed === letter) !== undefined) {
      return false;
    }
    if (this.gameOver()) {
      return false;
    }
    this._lettersPlayed.push(letter);
    return true;
  }

  getLives() {
    let lives = this._lives;
    for (let index = 0, size = this._lettersPlayed.length; index < size; index++) {
      if (this._word.search(this._lettersPlayed[index]) === -1) {
        lives -= 1;
      }
    }
    return lives;
  }

  won() {
    if (this.showUnderscores().find(element => element === "_") !== undefined) {
        return false;
    }
    return true;
  }

  lost() {
    return this.getLives() === 0;
  }

  gameOver() {
    return (this.won() || this.lost());
  }
}

export default Hangman;