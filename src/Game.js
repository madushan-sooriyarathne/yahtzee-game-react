import React, { Component } from "react";
import DiceBoard from "./DiceBoard";
import TotalScoreBoard from "./TotalScoreBoard";
import ScoreOptions from "./ScoreOptions";
import { randomDiceFace } from "./helpers";
import { uuid } from "uuidv4";

import "./css/Game.css";

export default class Game extends Component {
  static defaultProps = {
    noOfChances: 2,
    noOfDices: 5
  };

  constructor(props) {
    super(props);
    this.state = {
      dices: Array.from({ length: this.props.noOfDices }).map(dice => ({
        diceFace: randomDiceFace(),
        isFreezed: false,
        id: uuid()
      })),
      noOfMoves: 0,
      totalMarks: 0,
      shuffleDices: false
    };
    this.buttonClick = this.buttonClick.bind(this);
    this.handleMarks = this.handleMarks.bind(this);
    this.freeze = this.freeze.bind(this);
  }

  buttonClick() {
    // Shuffle the deck and update the number of moves - only if there is any moves left
    if (this.state.noOfMoves < this.props.noOfChances) {
      this.setState(st => {
        let updatedDiceList = st.dices.map(dice => {
          if (!dice.isFreezed) {
            return { ...dice, diceFace: randomDiceFace() };
          }
          return dice;
        });
        return { noOfMoves: st.noOfMoves + 1, dices: updatedDiceList };
      });
    }
  }

  freeze(id) {
    this.setState(st => {
      let updatedDiceList = st.dices.map(dice => {
        if (dice.id === id) {
          return { ...dice, isFreezed: !dice.isFreezed };
        }
        return dice;
      });
      return { dices: updatedDiceList };
    });
  }

  handleMarks(marks) {
    this.setState(st => {
      const newTotal = st.totalMarks + marks;

      // Re Shuffle the deck
      const shuffledDeck = st.dices.map(dice => ({
        ...dice,
        diceFace: randomDiceFace(),
        isFreezed: false
      }));
      return { totalMarks: newTotal, dices: shuffledDeck, noOfMoves: 0 };
    });
  }

  render() {
    let dices = this.state.dices.map(dice => {
      return {
        diceFace: dice.diceFace,
        isFreezed: dice.isFreezed,
        id: dice.id
      };
    });
    return (
      <div className="Game">
        <h1 className="Game-heading">
          {"yahtzee!".split("").map(el => (
            <span className="heading-letter">{el}</span>
          ))}
        </h1>
        <DiceBoard
          dices={dices}
          freeze={this.freeze}
          handleButtonClick={this.buttonClick}
          isOutOfMoves={this.state.noOfMoves === this.props.noOfChances}
          movesLeft={this.props.noOfChances - this.state.noOfMoves}
        />
        <ScoreOptions
          handleMarks={this.handleMarks}
          diceValues={this.state.dices.map(dice => dice.diceFace)}
        />
        <TotalScoreBoard score={this.state.totalMarks} />
      </div>
    );
  }
}
