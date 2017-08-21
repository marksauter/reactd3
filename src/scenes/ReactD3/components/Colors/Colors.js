// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as d3 from 'd3';

import * as actions from './state/actions';

import Swatch from 'components/Swatch';

type Props = {
  width: number,
  reversed: boolean,
};

export class Colors extends Component {
  static defaultProps = {
    width: 0,
  };

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
      <g onClick={this.handleClick} {...this.props.g}>
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
  reversed: state.reactd3.colors.reversed,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ ...actions }, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Colors);

