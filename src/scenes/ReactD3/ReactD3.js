// @flow

import React from 'react';
import cx from 'classnames';

import AppMenu from 'components/AppMenu';
import Colors from './components/Colors';

type Props = {
  className: string,
}

export const ReactD3 = (props: Props) => {
  const { className } = props;
  const classes = cx('ReactD3', className);

  return (
    <div className={classes}>
      <AppMenu />
      <svg width="600" height="100">
        <Colors width="600" />
        <Colors width="600" g={{transform: "translate(0,20)"}} />
      </svg>
    </div>
  );
}

export default ReactD3;

