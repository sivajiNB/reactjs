import React, { Component } from "react";

class userGreet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: false,
    };
  }
  render() {
    if (isLogin) {
      return <h1>welcome mamma</h1>;
    } else {
      return <h1>get out</h1>;
    }
  }
}
//render(){
//return this.state.isLogIn ?(<div></div>):(<div></div>)
//
//
//
//
// ****another way
// let message
//if(this.state.isLogin){
//message=<div> welcom mamma</div>
//}
//else
// {
//   message=<div>welcome sivaji<div>
//}

export default userGreet;
