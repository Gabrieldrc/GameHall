import React from 'react';
import './App.css';
import Nav from '../Nav/Nav';
import TictactoeContainer from '../TictactoeContainer/TictactoeContainer';
import HangmanContainer from '../HangmanContainer/HangmanContainer';


class App extends React.Component {
  render() {
    return (
      <div className="bodyContainer">
        <Nav />
        <div className="App">
          <TictactoeContainer />
          <HangmanContainer />
        </div>
      </div>
    );
  };
}

export default App;
