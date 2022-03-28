import React, { Component } from "react";

class LifeCycleB extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "SB",
    };
    console.log("lifecycleSB constructor");
  }
  static getDerivedStateFromProps(props, state) {
    console.log("lifecyclB getDerivedStateFromProps");
    return null;
  }
  componentDidMount() {
    console.log("lifecycleB componentmount");
  }
  shouldComponentUpdate() {
    console.log("lifecycleBshouldComponentUpdate");
    return true;
  }
  getSnapshotBeforeUpdate() {
    console.log("lifecycleB getsnapshotbeforeupdate");
  }
  componentDidUpdate() {
    console.log("lifecycleB componentdidupdate");
  }
  render() {
    console.log("lifecycleB render");
    return <div>lifecycle B</div>;
  }
}

export default LifeCycleB;
