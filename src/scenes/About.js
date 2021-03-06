// @flow

import React from 'react';
import cx from 'classnames';

import AppMenu from 'components/AppMenu';

type Props = {
  className: string,
}

export const About = (props: Props) => {
  const { className } = props;
  const classes = cx('About', className);

  return (
    <div className={classes}>
      <AppMenu />
      About
    </div>
  );
}

export default About;

