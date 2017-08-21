// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import PrivateRoute from 'components/PrivateRoute';

import asyncComponent from 'components/AsyncComponent';

import 'semantic-ui-css/semantic.min.css';

const AsyncHome = asyncComponent(() => import('scenes/Home'));
const AsyncReactD3 = asyncComponent(() => import('scenes/ReactD3'));
const AsyncAbout = asyncComponent(() => import('scenes/About'));
const AsyncLogin = asyncComponent(() => import('scenes/Login'));

class App extends Component {
  render() {
    const { auth } = this.props;

    return (
      <Switch>
        <PrivateRoute
          auth={auth}
          redirect="/login"
          exact
          path="/"
          component={AsyncHome}
        />
        <PrivateRoute
          auth={auth}
          redirect="/login"
          exact
          path="/about"
          component={AsyncAbout}
        />
        <PrivateRoute
          auth={auth}
          redirect="/login"
          exact
          path="/reactd3"
          component={AsyncReactD3}
        />
        <Route exact path="/login" component={AsyncLogin} />
      </Switch>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
})

export default connect(mapStateToProps)(App);

