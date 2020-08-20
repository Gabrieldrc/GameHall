import React from 'react';
import Hangman from '../../games/Hangman';
import Buttom from '../Buttom/Buttom';
import HangmanComponent from './HangmanComponent/HangmanComponent';

const hangmanContainerStyle = {
  padding: "5rem 1rem",
  display: "grid",
  gridTemplateColumns: "30% 70%",
};
const instructionsStyle = {
  backgroundColor: "mediumpurple",
  border: "5px solid black",
  textAlign: "justified",
  padding: "1rem",
  color: "papayawhip",
};

const pInstructionsStyle = {
  margin: "1rem",
};

const gameModeSelectionStyle = {
  verticalAlign: "middle",
  textAlign: "center",
  color: "white",
};

class HangmanContainer extends React.Component {
  constructor(props) {
    super(props);
    this.hangmanGame = new Hangman();
    this.state = {
      gameMode: "none",
      underscoreWord: this.hangmanGame.showUnderscores(),
      word: "",
      gameStatus: "none",
      lives: 0,
      gameOver: "none"
    };
    this.newHangmanGame = this.newHangmanGame.bind(this);
    this.playALetter = this.playALetter.bind(this);
    this.setGameMode = this.setGameMode.bind(this);
    this.setTheWord = this.setTheWord.bind(this);
  }
      
  newHangmanGame() {
    const newGame = new Hangman();
    this.hangmanGame = newGame;
    this.setState({
      gameMode: "none",
      underscoreWord: this.hangmanGame.showUnderscores(),
      word: "",
      gameStatus: "none",
      lives: 6,
      gameOver: "none",
    });
  }
    
  playALetter(letter) {
    this.hangmanGame.playALetter(letter);
    if (this.hangmanGame.gameOver()) {
      this.setState({
        underscoreWord: this.hangmanGame.showUnderscores(),
        lives: this.hangmanGame.getLives(),
        gameOver: this.hangmanGame.won()? "You Won!" : "Game over!"
      });
    } else {
      this.setState({
          underscoreWord: this.hangmanGame.showUnderscores(),
          lives: this.hangmanGame.getLives(),
      });
    }
  }
  
  gameMode() {
    if (this.state.gameMode === "none") {
      return (<div>
        <div style={gameModeSelectionStyle}>
          <h1>Select game mode:</h1>
          <Buttom key="solo" funct={() => console.log("solo")} value="Solo" margin="2rem auto"/>
          <Buttom key="multiplayer" funct={() => this.setGameMode("multiplayer")} value="Multiplayer" margin="2rem auto"/>
        </div>
      </div>);
    } else if (this.state.gameMode === "multiplayer") {
      return (
        <div style={gameModeSelectionStyle}>
          <h1>Write a word</h1>
          <input type="password" onChange={event => this.inputTheWord(event.target.value)}/>
          <Buttom key="submitWord" funct={() => this.setTheWord()} value value="submit" margin="2rem auto"/>
        </div>
      );
    }
  }

  setGameMode(gameMode) {
    if (gameMode !== "none" && gameMode !== "solo" && gameMode !== "multiplayer") {
      return;
    }
    this.setState({
      gameMode: gameMode
    });
  }

  inputTheWord(word) {
    this.setState({
      word: word
    });
  }

  setTheWord() {
    if (this.state.word === "") {
      return;
    }
    const returned = this.hangmanGame.setWord(this.state.word.toLowerCase());
    if (returned) {
      this.setState({
        gameStatus: "start",
        underscoreWord: this.hangmanGame.showUnderscores(),
        lives: this.hangmanGame.getLives()
      });
    }
  }

  gameStatus() {
    if (this.state.gameStatus === "none") {
      return this.gameMode();
    }
    if (this.state.gameStatus === "start") {
      if (this.state.gameMode === "multiplayer") {
        return <HangmanComponent 
          underscoreWord={this.state.underscoreWord}
          lives={this.state.lives}
          playALetter={this.playALetter}
          newGame={this.newHangmanGame}
          gameOver={this.state.gameOver}/>;
      }
      return <div style={gameModeSelectionStyle}><h1>Solo</h1></div>;
    }
    return <div style={gameModeSelectionStyle}><h1>Error</h1></div>;
  }
    //   gameOver() {
    //     return <p className={middleTitleStyle} >hola</p>;
    //   }
  render() {
    return(
      <div style={hangmanContainerStyle} className="hangman" id="hangman">
        <div className="instructions" style={instructionsStyle}>
          <h1 style={pInstructionsStyle}>Hangman</h1>
          <p style={pInstructionsStyle}>
            "Hangman" is a game about guess what is the word wroted in the underscores choosing letters.
            If you choose a letter that is not on the hidden word, you'll lose a live. You have just 6 live.
            Use it wisely. If you loose all your lives, loose. On the other hand, if you guess what word is hidden, you win.
          </p>
          <p style={pInstructionsStyle}>You have two options how to play:</p>
          <ul>
            <li>Against the computer</li>
            <li>Against a friend</li>
          </ul>
        </div>
        {this.gameStatus()}
      </div>
    );
  }
}

export default HangmanContainer;