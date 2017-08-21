// @flow

import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import RedirectFrom from 'components/RedirectFrom';

type Props = {
  auth: boolean,
  component: Class<Component<*,*,*>>,
  redirect: string,
}

export const PrivateRoute = (props: Props) => {
  const { auth, component: Component, redirect, ...rest } = props;

  return (
    <Route {...rest} render={props =>
      auth
      ? <Component {...props} />
      : <RedirectFrom to={redirect} />
    }
    />
  );
}

export default PrivateRoute;
 
