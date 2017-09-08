/* @flow */

import React, { Component } from 'react';
import { Dimmer, Loader, Segment } from 'semantic-ui-react';

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
        : <Segment>
            <Dimmer active>
              <Loader />
            </Dimmer>
          </Segment>;
    }

  }

  return AsyncComponent;
}

export default asyncComponent;

