import React, { Component } from "react";
class Message extends Component {
  constructor() {
    super();
    this.state = {
      Message: "welcom visitor",
    };
  }
  ChangeMessage() {
    this.setState({
      Message: "thank you for subscribing",
    });
  }
  render() {
    return (
      <div>
        <h1>{this.state.Message}</h1>
        <button onClick={() => this.ChangeMessage()}>subscribe</button>
      </div>
    );
  }
}
export default Message;
