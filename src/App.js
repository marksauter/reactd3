/* @flow */

import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import asyncComponent from 'components/AsyncComponent';

import './styles.css';
import 'semantic-ui-css/semantic.min.css';

const AsyncReactD3 = asyncComponent(() => import('scenes/ReactD3'));
const AsyncAbout = asyncComponent(() => import('scenes/About'));

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={AsyncReactD3} />
        <Route exact path="/about" component={AsyncAbout} />
      </Switch>
    );
  }
}

export default App;

