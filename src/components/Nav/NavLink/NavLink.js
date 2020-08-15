import React from 'react';
import './NavLink.css';

let style = {
  padding: "2rem 0rem 1rem 0rem",
  display: "inline-block",
};

const styleLink = {
  padding: "2rem 2rem 1rem 2rem",
  color: "white",
  fontWeight: "500",
  textDecoration: "none",
};

class NavLink extends React.Component {
  render() {
    const string = this.props.children;
    const stringLowered = string.toLowerCase();
    const relativeLink = "#"+stringLowered;
    return(
      <div className="navLink" style={style}>
        <a href={relativeLink} style={styleLink}>{string}</a>
      </div>
    );
  }
}

export default NavLink;