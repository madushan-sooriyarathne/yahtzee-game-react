import React, { Component } from "react";
import "./css/TotalScoreBoard.css";

export default class TotalScoreBoard extends Component {
  render() {
    return (
      <div className="TotalScoreBoard">
        <p className="TotalScoreBoard-title">Total Score</p>
        <h1 className="TotalScoreBoard-score">{this.props.score}</h1>
      </div>
    );
  }
}
