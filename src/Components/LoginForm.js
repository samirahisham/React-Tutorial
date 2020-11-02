import React, { useState } from "react";
import { connect } from "react-redux";
import { signup } from "../redux/actions";

const LoginForm = ({ registerFunction }) => {
  const [user, setUser] = useState(null);
  console.log("User", user);
  const handleUserName = (event) =>
    setUser({ ...user, username: event.target.value });
  const handleSubmit = (event) => {
    event.preventDefault();
    registerFunction(user);
    console.log("SUBMIT");
  };
  return (
    <div>
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
        <button type="submit">login </button>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    registerFunction: (userData) => dispatch(signup(userData)),
  };
};
export default connect(null, mapDispatchToProps)(LoginForm);
