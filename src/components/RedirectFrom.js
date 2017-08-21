// @flow

import React from 'react';
import { pure, compose } from 'recompose';
import { Redirect, withRouter } from 'react-router-dom';

import type { Location } from 'lib/reactRouterUtils';
import { from, cleanProps } from 'lib/reactRouterUtils';

type Props = {
  to: string,
  location: Location,
}

export const RedirectFrom = (props: Props) => {
  const { to, location, ...rest } = props;
  const fromTo = from(location);

  return (
    <Redirect to={fromTo(to)} {...cleanProps(rest)} />
  );
}


export default compose(
  withRouter,
  pure,
)(RedirectFrom);

