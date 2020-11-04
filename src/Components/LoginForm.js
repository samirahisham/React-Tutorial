import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { signup, login } from "../redux/actions";

const LoginForm = ({ registerFunction, loginFunction, userObj }) => {
  const [user, setUser] = useState(null);
  console.log("User", user);
  const handleUserName = (event) =>
    setUser({ ...user, username: event.target.value });
  const handleSubmit = (event) => {
    event.preventDefault();
    registerFunction(user);
    console.log("SUBMIT");
  };
  useEffect(() => {
    console.log("The Logged in user is", userObj);
  }, [userObj]);
  const handleLoginSubmit = (event) => {
    event.preventDefault();
    loginFunction(user);
    console.log("SUBMIT LOGIN");
  };
  if (userObj) return <Redirect to="/header" />;
  return (
    <div>
      {/* <h1>SignUP</h1>
      <form onSubmit={handleSubmit}>
        <label> username</label>
        <input name="username" onChange={handleUserName} />
        <label> password</label>

        <input
          name="password"
          onChange={(event) =>
            setUser({ ...user, password: event.target.value })
          }
        />
        <button type="submit">signup </button>
      </form> */}

      <h1>Login</h1>

      <form onSubmit={handleLoginSubmit}>
        <label> username</label>
        <input name="username" onChange={handleUserName} />
        <label> password</label>

        <input
          name="password"
          onChange={(event) =>
            setUser({ ...user, password: event.target.value })
          }
        />
        <button type="submit">login </button>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => ({
  userObj: state.rootAuth.user,
});
const mapDispatchToProps = (dispatch) => {
  return {
    registerFunction: (userData) => dispatch(signup(userData)),
    loginFunction: (userData) => dispatch(login(userData)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
