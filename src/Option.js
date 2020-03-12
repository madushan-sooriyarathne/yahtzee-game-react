import React, { Component } from "react";
import "./css/Option.css";

export default class Option extends Component {
  constructor(props) {
    super(props);
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(event) {
    if (!this.props.isSelected) {
      console.log(
        this.props.rule(
          this.props.number,
          this.props.diceValues,
          this.props.marks
        )
      );
      this.props.select(
        this.props.rule(
          this.props.number,
          this.props.diceValues,
          this.props.marks
        ),
        this.props.id
      );
    }
  }
  render() {
    return (
      <p
        className={this.props.isSelected ? "Option selected" : "Option"}
        disable={this.props.isSelected.toString()}
        onClick={this.handleSelect}
      >
        <span className="Option-name">{this.props.name}</span>
        <span className="Option-description">{this.props.description}</span>
      </p>
    );
  }
}
