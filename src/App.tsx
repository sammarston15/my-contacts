import React from 'react';
import { Switch, Route, Link, withRouter } from 'react-router-dom';
import Home from './components/home';
import Login from './components/Login';
import {connect} from 'react-redux';
import './reset.css';
import './App.css';

const App: React.FC = () => {
 

  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Login}/>
        <Route path='/home' component={Home} />
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
