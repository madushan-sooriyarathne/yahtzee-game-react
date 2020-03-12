import React, { Component } from "react";
import Option from "./Option";
import { nums, ofAKind, fullHouse, straight, yahtzee, chance } from "./Rules";
import { uuid } from "uuidv4";

import "./css/ScoreOptions.css";

export default class ScoreOptions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: [
        {
          name: "Ones",
          description: "1 point per 1",
          number: 1,
          marks: undefined,
          rule: nums,
          isSelected: false,
          id: uuid()
        },
        {
          name: "Twos",
          description: "2 point per 2",
          number: 2,
          marks: undefined,
          rule: nums,
          isSelected: false,
          id: uuid()
        },
        {
          name: "Threes",
          description: "3 point per 3",
          number: 3,
          marks: undefined,
          rule: nums,
          isSelected: false,
          id: uuid()
        },
        {
          name: "Fours",
          description: "4 point per 4",
          number: 4,
          marks: undefined,
          rule: nums,
          isSelected: false,
          id: uuid()
        },
        {
          name: "Fives",
          description: "5 point per 5",
          number: 5,
          marks: undefined,
          rule: nums,
          isSelected: false,
          id: uuid()
        },
        {
          name: "Sixes",
          description: "6 point per 6",
          number: 6,
          marks: undefined,
          rule: nums,
          isSelected: false,
          id: uuid()
        },
        {
          name: "Three Of A Kind",
          description: "Sum of all dice if 3 are same",
          number: 3,
          marks: undefined,
          rule: ofAKind,
          isSelected: false,
          id: uuid()
        },
        {
          name: "Four Of A Kind",
          description: "Sum of all dice if 4 are same",
          number: 4,
          marks: undefined,
          rule: ofAKind,
          isSelected: false,
          id: uuid()
        },
        {
          name: "Full House",
          description: "25 points for full house",
          number: undefined,
          marks: 25,
          rule: fullHouse,
          isSelected: false,
          id: uuid()
        },
        {
          name: "Small Straight",
          description: "30 points for small straight",
          number: 4,
          marks: 30,
          rule: straight,
          isSelected: false,
          id: uuid()
        },
        {
          name: "Large Straight",
          description: "40 points for large straight",
          number: 5,
          marks: 40,
          rule: straight,
          isSelected: false,
          id: uuid()
        },
        {
          name: "Yahtzee",
          description: "50 points for yahtzee",
          number: undefined,
          marks: 50,
          rule: yahtzee,
          isSelected: false,
          id: uuid()
        },
        {
          name: "Chance",
          description: "Sum of all dice",
          number: undefined,
          marks: undefined,
          rule: chance,
          isSelected: false,
          id: uuid()
        }
      ]
    };
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(marks, id) {
    this.setState(st => {
      let updatedOptions = st.options.map(option => {
        if (option.id === id) {
          return { ...option, isSelected: true };
        }
        return option;
      });

      return { options: updatedOptions };
    });
    this.props.handleMarks(marks);
  }

  render() {
    return (
      <div className="ScoreOptions">
        {this.state.options.map(option => (
          <Option
            key={option.id}
            id={option.id}
            name={option.name}
            marks={option.marks}
            number={option.number}
            rule={option.rule}
            select={this.handleSelect}
            diceValues={this.props.diceValues}
            isSelected={option.isSelected}
            description={option.description}
          />
        ))}
        {/* <Option /> */}
      </div>
    );
  }
}
