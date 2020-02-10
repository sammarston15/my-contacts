import React from 'react';
import { Switch, Link, withRouter } from 'react-router-dom';
import Home from './components/home';
import {connect} from 'react-redux';
import './reset.css';
import './App.css';

const App: React.FC = () => {
 

  return (
    <div className="App">
      <Switch>
        <Home />
      </Switch>
      
    </div>
  );
}


const mapStateToProps = (state: any) => {
  return {
    user: state.user,
    isLoggedIn: state.isLoggedIn
  }
}


export default connect(mapStateToProps, {})(withRouter(App));
