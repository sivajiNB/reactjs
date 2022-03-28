import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      comments: "",
      topic: "Reactjs",
    };
  }
  handleUserNameChange = (event) => {
    this.setState({
      username: event.target.value,
    });
  };
  handleCommentsChange = (event) => {
    this.setState({
      comments: event.target.value,
    });
  };
  handletopicChange = (event) => {
    this.setState({
      topic: event.target.value,
    });
  };
  handleSumbit = (event) => {
    alert(`${this.state.username} ${this.state.comments}${this.state.topic}`);
    event.preventDefault();
  };
  render() {
    return (
      <form onSubmit={this.handleSumbit}>
        <div>
          <label>UserName</label>
          <input
            type="text"
            value={this.state.username}
            onChange={this.handleUserNameChange}
          />
        </div>
        <div>
          <label>comments</label>
          <textarea
            value={this.state.comments}
            onChange={this.handleCommentsChange}
          ></textarea>
        </div>
        <div>
          <label>topic</label>
          <select value={this.state.topic} onChange={this.handletopicChange}>
            <option>Reactjs</option>
            <option>Angular</option>
            <option>php</option>
          </select>
        </div>
        <button type="sumbit">sumbit</button>
      </form>
    );
  }
}

export default Form;
