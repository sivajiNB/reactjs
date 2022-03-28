import React, { Component } from "react";

class Numbers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numArray: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      evenarray: [],
      oddarray: [],
    };
  }
  Even = () => {
    for (let i = 0; i < this.state.numArray.length; i++) {
      if (i % 2 === 0) {
        this.state.evenarray.push(i);
      }
      console.log(this.state.evenarray);
    }
  };
  Odd = () => {
    for (let i = 0; i < this.state.numArray.length; i++) {
      if (i % 2 != 0) {
        this.state.oddarray.push(i);
      }
      console.log(this.state.oddarray);
    }
  };
  render() {
    return (
      <div>
        <h1>{this.evenarray}</h1>
        <button onClick={() => this.Even()}>DisplayEven</button>
        <button onClick={() => this.Odd()}>DisplayOdd</button>
      </div>
    );
  }
}

export default Numbers;
