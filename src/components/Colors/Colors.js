/* @flow */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as d3 from 'd3';

import { reverseSwatches } from './state/actions';

import Swatch from 'components/Swatch';

class Colors extends Component {
  static defaultProps = {
    width: 0,
    reversed: false,
  };

  colors = d3.schemeCategory20;
  width = d3
    .scaleBand()
    .domain(d3.range(20));

  componentWillMount() {
    this.updateD3(this.props);
  }

  componentWillUpdate(newProps) {
    this.updateD3(newProps);
  }

  updateD3(props) {
    const range = props.reversed
      ? [0, props.width]
      : [props.width, 0];
    this.width.range(range);
  }

  handleClick = () => {
    this.props.reverseSwatches();
  }

  render() {
    return (
      <g onClick={this.handleClick} {...this.props}>
        {d3.range(20).map(i =>
          <Swatch key={i}
                  color={this.colors[i]}
                  width={this.width.step()}
                  x={this.width(i)} />
        )}
      </g>
    );
  }

}

const mapStateToProps = state => ({
  reversed: state.colors.reversed,
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({ reverseSwatches }, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Colors);

