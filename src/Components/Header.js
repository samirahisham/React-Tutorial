import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import customStyles from "../customStyles.css";
import { logout } from "../redux/actions/authActions";
import Body from "./Body";
const Header = ({ userObj, logoutFunction }) => {
  console.log("PROPS", userObj);
  if (!userObj) return <Redirect to="/" />;
  return (
    <>
      <div style={{ marginTop: 20, color: "green", fontWeight: "bold" }}>
        Hello
      </div>
      <Body name={userObj.username} age={25} />
      <button onClick={() => logoutFunction()}>LOG ME OUT !!!!</button>
    </>
  );
};

const mapStateToProps = (state) => ({
  userObj: state.rootAuth.user,
});

const mapDispatchToProps = (dispatch) => {
  return {
    logoutFunction: () => dispatch(logout()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Header);
