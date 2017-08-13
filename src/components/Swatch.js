/* @flow */

import React from 'react';

const Swatch = ({ color, width, x}: { color: string, width: string, x: string }) =>
  <rect width={width}
        height="20"
        x={x}
        y="0"
        style={{ fill: color }} />

export default Swatch;

