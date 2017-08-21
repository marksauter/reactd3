// @flow

import React from 'react';
import isEmpty from 'lodash/isEmpty';

import { pure, compose } from 'recompose';
import { withRouter } from 'react-router-dom';

import { Button } from 'semantic-ui-react';

import LinkFrom from 'components/LinkFrom';
import type { Location } from 'lib/reactRouterUtils';

type Props = {
  className: string,
  location: Location,
}

export const BackButton = (props: Props) => {
  const { className, location, ...rest } = props;

  if (isEmpty(location.state) || isEmpty(location.state.from)){
    return null;
  }

  return (
    <Button
      as={LinkFrom}
      to={location.state.from}
      icon="chevron left"
      {...rest}
    />
  );
}

export default compose(
  withRouter,
  pure
)(BackButton);

