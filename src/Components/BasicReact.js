import React from "react";
import logo from "../logo.svg";

const BasicReact = () => {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>Seham</p>
      <a
        className="App-link"
        href="https://google.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
  );
};
export default BasicReact;
