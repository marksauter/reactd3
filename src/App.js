/* @flow */

import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import AppMenu from './AppMenu';

import asyncComponent from 'components/AsyncComponent';

import './App.css';

const AsyncReactD3 = asyncComponent(() => import('scenes/ReactD3'));
const AsyncAbout = asyncComponent(() => import('scenes/About'));

class App extends Component {
  static Menu = AppMenu;

  render() {
    return (
      <div className="App">
        <AppMenu />
        <Switch>
          <Route exact path="/" component={AsyncReactD3} />
          <Route exact path="/about" component={AsyncAbout} />
        </Switch>
      </div>
    );
  }
}

export default App;

