/* @flow */

import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';

import asyncComponent from 'hocs/AsyncComponent.js';

import logo from './logo.svg';
import './App.css';

const AsyncHome = asyncComponent(() => import('containers/Home'));
const AsyncAbout = asyncComponent(() => import('containers/About'));

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Link to="/about">About</Link>
        <Switch>
          <Route exact path="/" component={AsyncHome} />
          <Route exact path="/about" component={AsyncAbout} />
        </Switch>
      </div>
    );
  }
}

export default App;

