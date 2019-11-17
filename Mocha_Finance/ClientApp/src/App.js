import React, { Component } from "react";
import { Route, Switch } from "react-router";
import Favorite from "./components/Favorite";
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";
import Predict from "./components/Predict";
import Register from "./components/Register";
import routes from "./routes";
import style from "./app.module.scss";
import FavouriteDetail from "./components/StockDetails";
import SearchResult from "./components/SearchResult";
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
          <Switch>
            <Route exact path={routes.home} component={Home} />
            <Route path={routes.favourite} component={Favorite} exact />
            <Route path={routes.predict} component={Predict} />
            <Route path={routes.login} component={Login} />
            <Route path={routes.register} component={Register} />
            <Route path={routes.search_result} component={SearchResult} />
            <Route
              path={`${routes.favourite}/:symbol`}
              component={FavouriteDetail}
            />
          </Switch>
        </div>
      </>
    );
  }
}

export default connect(null, { loadUser })(App);
