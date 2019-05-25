import React from "react";
import ReactDOM from "react-dom";
import ButtonCounter from "./button-counter";

const App = () => {
  return (
    <div>
      <h1>It's Working !</h1>
      <ButtonCounter />
    </div>
  );
};

const element = document.getElementById("root");
ReactDOM.render(<App />, element);
