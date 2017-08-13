/* @flow */

import React, { Component } from 'react';
import d3 from 'd3';

import Swatch from 'components/Swatch';

type Props = { width: number };
type State = {};

class Colors extends Component {
  colors = d3.schemeCategory20;
  width = d3
    .scaleBand()
    .domain(d3.range(20));

  componentWillMount() {
    this.updateD3(this.props);
  }

  componentWillUpdate(newProps: Props) {
    this.updateD3(newProps);
  }

  updateD3(props: Props) {
    this.width.range([0, props.width]);
  }

  render() {
    return (
      <g>
        {d3.range(20).map(i =>
          <Swatch color={this.colors[i]}
                  width={this.width.step()}
                  x={this.width(i)} />
        )}
      </g>
    );
  }

}

export default Colors;

