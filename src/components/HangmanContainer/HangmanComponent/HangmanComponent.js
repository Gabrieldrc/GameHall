import React from 'react';
import Buttom from '../../Buttom/Buttom';

const abcList = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','ñ','o','p','q','r','s','t','u','v','w','x','y','z'];

const abcContainerStyle = {
  width: "500px",
  margin: "auto",
};

const hangmanComponentContainerStyle = {
  display: "grid",
  gridTemplateRows: "10% 70% 30%",
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

class HangmanComponent extends React.Component {

  renderAbcButtoms() {
    let backgroundColor = "red";
    return abcList.map(letter => {
      backgroundColor === "red"? backgroundColor = "black": backgroundColor = "red";
      return <Buttom key={letter} value={letter} display="inline-block" 
        backgroundColor={backgroundColor}
        funct={event => {
          event.target.style.backgroundColor = "mediumblue";
          this.props.playALetter(letter);
        }}/>
    });
  }

  renderUnderscoreWord() {
    let underscoreStyle = {
      fontSize: "4rem",
      fontWeight: "700",
      color: "mintcream",
    };
    const {underscoreWord} = this.props;
    let index = 0;
    return underscoreWord.map(letter => {
      index++;
      return <h1 key={index+"Underscore"} style={underscoreStyle}>{letter}</h1>;
    });
  }

  renderHearts(lives) {
    let heartsLives = [];
    for (let index = 0; index < 6; index++) {
      if (index < lives.lives) {
        const key = "heartFull"+index;
        heartsLives.push(<img src="./svg/heartFull.svg" alt="heartFull" key={key} title="heartFull"></img>); 
      } else {
        const key = "heartEmpty"+index;
        heartsLives.push(<img src="./svg/heartEmpty.svg" alt="heartEmpty" key={key} title="heartEmpty"></img>); 
      }
    }
    return heartsLives;
  }

  render() {
    const {underscoreWord, lives, newGame, gameOver} = this.props;
    let underscoreContainerStyle = {
      margin: "6rem auto",
      textAlign: "center",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center", 
    };
    if (underscoreWord.length <= 5) {
      underscoreContainerStyle.width = "400px";
    } else underscoreContainerStyle.width ="700px";
    return (
      <div style={hangmanComponentContainerStyle}>
        <div style={turnContainer}>
          <Buttom funct={() => newGame()} value="New Game" backgroundColor="mediumslateblue"/>
          <h1 style={middleTitleStyle}>{(gameOver == "none")? "Hangman" : gameOver}</h1>
          <div>
            {this.renderHearts({lives}).map( heart => heart)}
          </div>
        </div>
        <div style={underscoreContainerStyle}>
        {this.renderUnderscoreWord()}
        </div>
        <div style={abcContainerStyle}>
          {this.renderAbcButtoms()}
        </div>
      </div>
    );
  }
}

export default HangmanComponent;