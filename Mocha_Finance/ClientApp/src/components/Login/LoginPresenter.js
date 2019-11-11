import React from "react";
import style from "./login.module.scss";
import { NavLink } from "react-router-dom";
import routes from "../../routes";

const LoginPresenter = ({ msg, handleInput, handleSubmit }) => {
  return (
    <div className={style.container}>
      <div className={style.title}>
        <h5>Sign in to Mocha Finance</h5>
        <h6 style={{ textAlign: "center" }}>using your Mocha account</h6>
      </div>
      <form onSubmit={handleSubmit}>
        <InputControl
          label="Email"
          htmlFor="inputEmail"
          inputType="email"
          inputName="email"
          onChangeMethod={handleInput}
          placeholder="Enter Email"
        />
        <InputControl
          label="Password"
          htmlFor="inputPassword"
          inputType="password"
          inputName="password"
          onChangeMethod={handleInput}
          placeholder="Enter Password"
        />
        <div className={style.message}>
          <span>{msg}</span>
        </div>
        <div className={`form-group ${style.registerLink}`}>
          <NavLink to={routes.register}>You don't have an account?</NavLink>
        </div>
        <div className={`form-group ${style.submitBtn}`}>
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

const InputControl = ({
  label,
  htmlFor,
  inputType,
  inputName,
  onChangeMethod,
  placeholder
}) => (
  <div className="form-group">
    <label htmlFor={htmlFor}>{label}:</label>
    <input
      type={inputType}
      name={inputName}
      className="form-control"
      onChange={onChangeMethod}
      placeholder={placeholder}
    />
  </div>
);

export default LoginPresenter;
