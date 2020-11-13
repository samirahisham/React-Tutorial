import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { signup, login } from "../redux/actions";

const LoginForm = ({ registerFunction, loginFunction, userObj, errors }) => {
  const [user, setUser] = useState({
    password: "",
    password_2: "",
  });

  console.log("ERRRRRRRR", errors);
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
      <h1>SignUP</h1>
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
        <label>confirm password</label>

        <input
          name="password_confirmation"
          onChange={(event) =>
            setUser({ ...user, password_2: event.target.value })
          }
        />

        {user.password == user.password_2 ? (
          <></>
        ) : (
          <div>passwords do not match</div>
        )}

        <button type="submit">signup </button>
      </form>

      {/* <h1>Login</h1>

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
        {errors ? (
          <div style={{ color: "red", fontSize: "bold" }}>{errors.detail}</div>
        ) : (
          <></>
        )}
      </form> */}
    </div>
  );
};

const mapStateToProps = (state) => ({
  userObj: state.rootAuth.user,
  errors: state.rootErrors.errors,
});
const mapDispatchToProps = (dispatch) => {
  return {
    registerFunction: (userData) => dispatch(signup(userData)),
    loginFunction: (userData) => dispatch(login(userData)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
