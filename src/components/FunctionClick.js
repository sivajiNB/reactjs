import React from "react";

function FunctionClick(props) {
  function ss() {
    console.log("button is clicked");
  }
  return (
    <div>
      <button onClick={ss}>Click</button>
    </div>
  );
}

export default FunctionClick;
