import React, { FC } from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import styles from "./App.module.scss";
import { Home } from "../home/home";
import { Login } from "../login/Login";
import NewContact from '../newContact/NewContact'
import EditContact from "../editContact/EditContact";

export const App: FC = () => (
  <Router>
    <div className={styles.App}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/new" component={NewContact} />
        <Route path='/contact/:contactIndex' component={EditContact} />
      </Switch>
    </div>
  </Router>
);
