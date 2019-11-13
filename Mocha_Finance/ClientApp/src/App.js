import React, { Component } from "react";
import { Route } from "react-router";
import Favorite from "./components/Favorite";
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";
import Predict from "./components/Predict";
import Register from "./components/Register";
import routes from "./routes";
import style from "./app.module.scss";
import { connect } from "react-redux";
import { loadUser } from "./actions/authActions";
import store from "./store";

class App extends Component {
  displayName = App.name;

  componentDidMount() {
    store.dispatch(loadUser());
  }
  render() {
    return (
      <>
        <Header />
        <div className={style.wrapper}>
          <Route exact path={routes.home} component={Home} />
          <Route path={routes.favorite} component={Favorite} />
          <Route path={routes.predict} component={Predict} />
          <Route path={routes.login} component={Login} />
          <Route path={routes.register} component={Register} />
        </div>
      </>
    );
  }
}

export default connect(null, { loadUser })(App);
