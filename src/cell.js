import React, { Component } from "react";

export default class cell extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: props.value,
    };
  }

  newColor = () => {
    this.setState({
      color: "#333",
    });
  };
  render() {
    return (
      <div
        className="cell"
        style={{ backgroundColor: this.state.color }}
        onClick={this.newColor}
      ></div>
    );
  }
}
