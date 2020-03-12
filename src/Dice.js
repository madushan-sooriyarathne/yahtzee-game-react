import React, { Component } from "react";
import { uuid } from "uuidv4";
import "./css/Dice.css";
import dice1 from "./img/dice-1.svg";
import dice2 from "./img/dice-2.svg";
import dice3 from "./img/dice-3.svg";
import dice4 from "./img/dice-4.svg";
import dice5 from "./img/dice-5.svg";
import dice6 from "./img/dice-6.svg";

import dice1Freezed from "./img/dice-1-freezed.svg";
import dice2Freezed from "./img/dice-2-freezed.svg";
import dice3Freezed from "./img/dice-3-freezed.svg";
import dice4Freezed from "./img/dice-4-freezed.svg";
import dice5Freezed from "./img/dice-5-freezed.svg";
import dice6Freezed from "./img/dice-6-freezed.svg";

export default class Dice extends Component {
  static defaultProps = {
    diceFace: 1,
    isFreezed: false,
    id: uuid(),
    diceImg: [dice1, dice2, dice3, dice4, dice5, dice6],
    diceImgFreezed: [dice1Freezed, dice2Freezed, dice3Freezed, dice4Freezed, dice5Freezed, dice6Freezed]
  };

  

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.props.handleFreeze(this.props.id);
  }

  render() {
    return (
      <div className="Dice" >
        <img
        className={this.props.isFreezed? "Dice-img freezed": "Dice-img"} 
        onClick={this.handleClick}
        src={this.props.isFreezed?this.props.diceImgFreezed[this.props.diceFace - 1]:this.props.diceImg[this.props.diceFace - 1]}
        alt={`dice-${this.props.diceFace}`}></img>
      </div>
    );
  }
}
