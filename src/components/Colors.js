/* @flow */

import React, { Component } from 'react';
import d3 from 'd3';

class Colors extends Component {
  colors = d3.schemeCategory20;
  width = d3
    .scaleBand()
    .domain(d3.range(20));
};
