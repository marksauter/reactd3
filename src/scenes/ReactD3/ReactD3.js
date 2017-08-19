/* @flow */

import React from 'react';

import Colors from './components/Colors';

const ReactD3 = () =>
  <svg width="600" height="100">
    <Colors width="600" />
    <Colors width="600" g={{transform: "translate(0,20)"}} />
  </svg>

export default ReactD3;

