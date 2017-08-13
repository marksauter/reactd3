/* @flow */

import React from 'react';

const Swatch = ({ color: string, width: string, x: string }): func =>
  <rect width={width}
        height="20"
        x={x}
        y="0"
        style={{ fill: color }} />

export default Swatch;

