import React, { Component } from "react";
import LifeCycleB from "./LifeCycleB";
//mounting
class LifeCycleA extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "SB",
    };
    console.log("lifecycleSA constructor");
  }
  static getDerivedStateFromProps(props, state) {
    console.log("lifecyclA getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("lifecycleA componentmount");
  }
  shouldComponentUpdate() {
    console.log("lifecycleA shouldComponentUpdate");
    return true;
  }
  getSnapshotBeforeUpdate() {
    console.log("lifecycleA getsnapshotbeforeupdate");
  }
  componentDidUpdate() {
    console.log("lifecycleA componentdidupdate");
  }
  render() {
    console.log("lifecycleA render");
    return (
      <div>
        <div>LifeCycleA</div>
        <LifeCycleB />
      </div>
    );
  }
}

export default LifeCycleA;
