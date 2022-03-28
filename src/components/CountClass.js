import React, { Component } from "react";

class CountClass extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
  countIncrement = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  render() {
    return (
      <div>
        <button onClick={this.countIncrement}>count {this.state.count}</button>
      </div>
    );
  }
}

export default CountClass;
