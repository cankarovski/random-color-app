import React, { Component } from "react";
import "./RandomColor.css";

// based on theory, optimum threshold is 186
const TEXTCOLOR_THRESHOLD = 150;

class RandomColor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: { red: 68, green: 68, blue: 68 },
      textColor: "#FFFFFF",
    };
    this.randomColor = this.randomColor.bind(this);
  }
  randomColor() {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);

    this.setState({ color: { red, green, blue } }, this.colorText);
  }
  colorText() {
    if (
      this.state.color.red * 0.299 +
        this.state.color.green * 0.587 +
        this.state.color.blue * 0.114 >
      TEXTCOLOR_THRESHOLD
    ) {
      this.setState({ textColor: "#000000" });
    } else {
      this.setState({ textColor: "#FFFFFF" });
    }
  }
  render() {
    return (
      <div
        className="RandomColor"
        style={{
          backgroundColor: `rgb(${this.state.color.red}, ${this.state.color.green}, ${this.state.color.blue})`,
          color: this.state.textColor,
        }}
      >
        <div className="RandomColor-text">
          RED: <span>{this.state.color.red}&nbsp;</span> GREEN:{" "}
          <span>{this.state.color.green}&nbsp;</span> BLUE:{" "}
          <span>{this.state.color.blue}</span>
        </div>
        <button className="RandomColor-button" onClick={this.randomColor}>
          Random Color
        </button>
      </div>
    );
  }
}

export default RandomColor;
