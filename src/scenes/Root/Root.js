// @flow

import React from 'react';
import cx from 'classnames';

type Props = {
  className: string,
}

export const Root = (props: Props) => {
  const { className, ...rest } = props;
  const classes = cx('Root', className);

  return (
    <div {...rest} className={classes}>
    </div>
  );
}


export default Root;

