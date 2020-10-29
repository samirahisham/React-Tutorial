import React from "react";
import customStyles from "../customStyles.css";
import Body from "./Body";
const Header = (props) => {
  console.log("PROPS", props);
  return (
    <>
      <div style={{ marginTop: 20, color: "green", fontWeight: "bold" }}>
        Hello
      </div>
      <Body name={"Seham"} age={23} />
    </>
  );
};

export default Header;
