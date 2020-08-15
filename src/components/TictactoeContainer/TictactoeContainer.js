import React from 'react';
import TictactoeComponent from './TictactoeComponent/TictactoeComponent';
import Tictactoe from '../../games/Tictactoe';

const TictactoeContainerStyle = {
  padding: "1rem",
};

const newGameButtom = {
  backgroundColor: "mediumslateblue",  
  color: "white",
  padding: "0.2rem 0.5rem",
  cursor: "pointer",
  width: "fit-content",
  borderRadius: "5rem",
  fontSize: "1.5rem",
};

const turnContainer = {
  margin: "auto",
  width: "700px",
//   backgroundColor: "white",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center", 
};

const middleTitleStyle = {
  color: "moccasin",
  fontFamily: "'Raleway', sans-serif",
  fontWeight: "100",
};
const turnStyle = {
  color: "palegreen",
  display: "inline",
};

const xStyle = {
  color: "orangered",
  display: "inline",//   fontSize: "0.8rem",
};

const oStyle = {
  color: "orange",
  display: "inline",//   fontSize: "0.8rem",
};

class TictactoeContainer extends React.Component {
  constructor(props) {
    super(props);
    this.tictactoeGame = new Tictactoe();
    this.state = {
      board: this.tictactoeGame.showBoard(),
    };
    this.newTictactoeGame = this.newTictactoeGame.bind(this);
    this.playOnGrid = this.playOnGrid.bind(this);
  }
  
  newTictactoeGame() {
    const newGame = new Tictactoe();
    this.tictactoeGame = newGame;
    this.setState({
      board: this.tictactoeGame.showBoard()
    });
  }

  playOnGrid(row, col) {
    this.tictactoeGame.play(row, col);
    this.setState({
        board: this.tictactoeGame.showBoard()
    });
  }

  gameOver() {
    if (!this.tictactoeGame.gameOver()) {
      return <div style={middleTitleStyle}><h1>Tictactoe</h1></div>;
    }
    if (!this.tictactoeGame.wonX() && !this.tictactoeGame.wonO()) {
      return <div style={middleTitleStyle}><h1>GAME OVER!</h1></div>;
    }
    if (this.tictactoeGame.wonX()) {
      return <div style={middleTitleStyle}><h1>X Won!</h1></div>;
    }
    if (this.tictactoeGame.wonO()) {
      return <div style={middleTitleStyle}><h1>O Won!</h1></div>;
    }
  }

  render() {
    return(
      <div style={TictactoeContainerStyle} id="tictactoe">
        <div style={turnContainer}>
          <div style={newGameButtom} onClick={() => this.newTictactoeGame()}>New Game</div>
          {this.gameOver()}
          <div>
            <h1 style={turnStyle}>TURN: </h1>
            {(this.tictactoeGame.getTurn() === 'X')? <h1 style={xStyle}>X</h1>:<h1 style={oStyle}>O</h1>}
          </div>
        </div>
        <TictactoeComponent 
          board={this.state.board}
          playOnGrid={this.playOnGrid}/>
      </div>
    );
  }
}

export default TictactoeContainer;