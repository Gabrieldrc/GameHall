import React from 'react';

class Buttom extends React.Component {
  render() {
    const {funct, value, color, backgroundColor, margin, display, fontSize} = this.props;
    const buttomStyle = {
      backgroundColor: backgroundColor? backgroundColor : "black",  
      color: color? color : "white",
      padding: "0.2rem 0.5rem",
      cursor: "pointer",
      width: "fit-content",
      borderRadius: "5rem",
      fontSize: fontSize? fontSize : "1.5rem",
    };
    if (margin) {
      buttomStyle.margin = margin;
    }
    if (display) {
      buttomStyle.display = display;
    }
    return (
      <div style={buttomStyle} onClick={funct}>{value}</div>
    );
  }
}

export default Buttom;