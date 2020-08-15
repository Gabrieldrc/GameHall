import React from 'react';
import './App.css';
import Nav from '../Nav/Nav';
import TictactoeContainer from '../TictactoeContainer/TictactoeContainer';


class App extends React.Component {
  render() {
    return (
      <div className="bodyContainer">
        <Nav />
        <div className="App">
          <TictactoeContainer />
        </div>
      </div>
    );
  };
}

export default App;
