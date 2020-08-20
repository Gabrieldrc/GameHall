import React from 'react';
import NavLink from './NavLink/NavLink';

const styleNav = {
  position: "fixed",
  backgroundColor: "olivedrab",
  borderBottom: "2px solid white",
  width: "100%",
};

const styleContainer = {
  width: "1200px",
  margin: "0rem auto",
};

const styleLinks = {
  float: "right",
};

const styleLogo = {
  fontFamily: "'Dancing Script', cursive",
  display: "inline-block",
  color: "blue",
  backgroundColor: "white",
  borderRadius: "50%",
  padding: "0.2rem",
  marginTop: "0.8rem",
};

class Nav extends React.Component {
  render() {
    const items = ["TicTacToe", "Hangman"];
    return(
      <div style={styleNav} className="nav">
        <div style={styleContainer}>
          <h2 style={styleLogo}>Gamehall</h2>
          <div style={styleLinks}>
            {items.map(item => {
              return <NavLink key={item}>{item}</NavLink>;
            })}
          <a href="https://github.com/Gabrieldrc/GameHall" target="_blank"><img src="./img/githubLogo.png" alt="github repository" key="githubLogo" title="github repository"></img></a>
          </div>
        </div>
      </div>
    );
  }
}

export default Nav;