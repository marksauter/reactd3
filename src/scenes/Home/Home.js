// @flow

import React from 'react';
import cx from 'classnames';

import AppMenu from 'components/AppMenu';

type Props = {
  className: string,
}

export const Home = (props: Props) => {
  const { className } = props;
  const classes = cx('Home', className);

  return (
    <div className={classes}>
      <AppMenu />
      Home
    </div>
  );
}


export default Home;

