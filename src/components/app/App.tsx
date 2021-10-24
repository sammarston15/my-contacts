import React, { FC } from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import styles from "./App.module.scss";
import { Home } from "../home/home";
import { Login } from "../login/Login";

export const App: FC = () => (
  <Router>
    <div className={styles.App}>
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/">
          <Login />
        </Route>
      </Switch>
    </div>
  </Router>
);
