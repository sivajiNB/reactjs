import React from "react";
import App from "../App";
//function Greet() {
// return <h1>hello snb</h1>;
//}
const Greet = (props) => {
  console.log(props);
  return (
    <h1>
      welcome {props.name} also known as {props.heroName}
    </h1>
  );
};
export default Greet;
