import React, { Component } from "react";
import { Route } from "react-router";
import Favorite from "./components/Favorite";
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";
import Predict from "./components/Predict";
import Register from "./components/Register";
import routes from "./routes";

export default class App extends Component {
  displayName = App.name;

  render() {
    return (
      <>
        <Header />
        <div style={main_component_style}>
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

const main_component_style = {
  padding: "0 150px"
};
