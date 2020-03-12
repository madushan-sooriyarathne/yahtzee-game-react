import React, { Component } from "react";
import Dice from "./Dice";

import './css/DiceBoard.css';

export default class DiceBoard extends Component {
  constructor(props) {
    super(props);

    this.handleFreeze = this.handleFreeze.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleFreeze(id) {
    this.props.freeze(id);
  }

  handleClick(event) {
    this.props.handleButtonClick();
  }

  render() {
    return (
      <div className="DiceBoard">
        <div className="DiceBoard-deck">
        {this.props.dices.map(dice => (
          <Dice
            id={dice.id}
            key={dice.id}
            diceFace={dice.diceFace}
            isFreezed={dice.isFreezed}
            handleFreeze={this.handleFreeze}
          />
        ))}
        </div>
        <button
          onClick={this.handleClick}
          className={
            this.props.isOutOfMoves ? "DiceBoard-btn disabled" : "DiceBoard-btn"
          }
          disabled={this.props.isOutOfMoves}
        >{`${this.props.movesLeft} Moves Left`}</button>
      </div>
    );
  }
}
