import React from 'react';
import TictactoeComponent from './TictactoeComponent/TictactoeComponent';
import Tictactoe from '../../games/Tictactoe';
import Buttom from '../Buttom/Buttom';

const TictactoeContainerStyle = {
  padding: "5rem 1rem",
  display: "grid",
  gridTemplateColumns: "70% 30%",
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

const turnContainer = {
  margin: "auto",
  width: "700px",
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
      return <div style={middleTitleStyle}><h1>Tic-tac-toe</h1></div>;
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
        <div>
          <div style={turnContainer}>
            <Buttom funct={() => this.newTictactoeGame()} value="New Game" backgroundColor="mediumslateblue"/>
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
        <div className="instructions" style={instructionsStyle}>
          <h1 style={pInstructionsStyle}>Tic-tac-toe</h1>
          <p style={pInstructionsStyle}>
            "Tic-tac-toe" is a game for two players, X and O, who take turns marking the spaces in a 3×3 grid. The winner is the player who succeeds in placing three of their marks in:
          </p>
          <ul>
            <li>a horizontal row</li>
            <li>a vertical row</li>
            <li>a diagonal row</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default TictactoeContainer;