import React from "react";
import "./myStyle.css";
import styles from "./Style.module.css";

const mys = {
  color: "yellow",
  fontSize: "50px",
  backgroundColor: "red",
};
function StyleSheet(props) {
  return (
    <div>
      <h1 className="primary">hiii bujii</h1>
      <h1 style={({ color: "red" }, { backgroundColor: "blue" })}>
        this is sivaji
      </h1>
      <h1 style={mys}> this is css in react js</h1>
      <h1 className={styles.sucess}>hiii this is css module</h1>
    </div>
  );
}

export default StyleSheet;
