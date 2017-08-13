/* @flow */

import React, { Component } from 'react';

const asyncComponent = (importComponent: Function) => {

  class AsyncComponent extends Component {
    state = {
      component: () => null,
    };

    componentDidMount() {
      (async () => {
        const { default: component } = await importComponent();

        this.setState({
          component
        });
      })();
    }

    render() {
      const C = this.state.component;

      return C
        ? <C {...this.props} />
        : null;
    }

  }

  return AsyncComponent;
}

export default asyncComponent;

