import React from 'react';
import Grid from './Grid';

const styleBox = {
  display: "grid",
  gridTemplateColumns: "auto auto auto",
  padding: "0.5rem",
  backgroundColor: "burlywood",
  width: "fit-content",
  margin: "auto",
  // height: "20rem",
};

class TictactoeComponent extends React.Component{
  render() {
    const board = this.props.board;
    return (
      <div style={styleBox}>
        <Grid key="R0C0" row={0} col={0} value={board[0][0]} playOnGrid={this.props.playOnGrid}/>
        <Grid key="R0C1" row={0} col={1} value={board[0][1]} playOnGrid={this.props.playOnGrid}/>
        <Grid key="R0C2" row={0} col={2} value={board[0][2]} playOnGrid={this.props.playOnGrid}/>
        <Grid key="R1C0" row={1} col={0} value={board[1][0]} playOnGrid={this.props.playOnGrid}/>
        <Grid key="R1C1" row={1} col={1} value={board[1][1]} playOnGrid={this.props.playOnGrid}/>
        <Grid key="R1C2" row={1} col={2} value={board[1][2]} playOnGrid={this.props.playOnGrid}/>
        <Grid key="R3C0" row={2} col={0} value={board[2][0]} playOnGrid={this.props.playOnGrid}/>
        <Grid key="R3C1" row={2} col={1} value={board[2][1]} playOnGrid={this.props.playOnGrid}/>
        <Grid key="R3C2" row={2} col={2} value={board[2][2]} playOnGrid={this.props.playOnGrid}/>
      </div>
    );
  }
}

export default TictactoeComponent;