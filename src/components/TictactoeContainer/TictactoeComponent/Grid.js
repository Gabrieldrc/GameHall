import React from 'react';

class Grid extends React.Component{
  changeBackground(event) {
    event.target.style.background = "rgba(224, 224, 224, 0.8)";
  }

  returnBackground(event) {
    event.target.style.background = "rgba(255, 255, 255, 0.8)";
  }

  render() {
    const style = {
      backgroundColor: "rgba(255, 255, 255, 0.8)",
      border: "1px solid rgba(0, 0, 0, 0.8)",
      padding: "20px",
      fontSize: "30px",
      textAlign: "center",
      cursor: "pointer",
      width: "3rem",
      height: "3rem",
    };
    const {row, col, playOnGrid} = this.props;
    return (<div style={style}
      onMouseOver={this.changeBackground}
      onMouseLeave={this.returnBackground}
      onClick={() => {
        playOnGrid(row,col)
      }}>{this.props.value}</div>);
  }
}

export default Grid;