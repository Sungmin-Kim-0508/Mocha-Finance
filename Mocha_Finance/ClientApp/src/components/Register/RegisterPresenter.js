import React from "react";
import style from "./register.module.scss";
import { NavLink } from "react-router-dom";
import routes from "../../routes";

const RegisterPresenter = ({ msg, handleInput, handleSubmit }) => {
  return (
    <div className={style.container}>
      <div className={style.title}>
        <h5>Sign up for Mocha Finance</h5>
        <h6 style={{ textAlign: "center" }}>Create a Mocha email address</h6>
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
          inputName="password1"
          onChangeMethod={handleInput}
          placeholder="Enter Password"
        />
        <InputControl
          label="Password"
          htmlFor="inputPassword"
          inputType="password"
          inputName="password2"
          onChangeMethod={handleInput}
          placeholder="Enter Password Again"
        />
        <div>
          <span>{msg}</span>
        </div>
        <div className={`form-group ${style.loginLink}`}>
          <NavLink to={routes.login}>You have an account already?</NavLink>
        </div>
        <div className={`form-group ${style.submitBtn}`}>
          <button type="submit" className="btn btn-primary">
            Create Account
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

export default RegisterPresenter;
