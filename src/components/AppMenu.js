import React from 'react';
import cx from 'classnames';
import { pure } from 'recompose';

import { Link } from 'react-router-dom';
import { Button, Container, Menu } from 'semantic-ui-react';

type Props = {
  className: string,
  items: Array<Object>,
}

export const AppMenu = (props: Props) => {
  const { className, items, ...rest } = props;
  const classes = cx('AppMenu', className);

  return (
    <Container {...rest} className={classes}>
      <Menu inverted size="large">
        <Menu.Item header content="m@rkus.ninja" />
        <Menu.Item as={Link} to="/" color="teal" active icon="home" content="Home" />
        <Menu.Item as={Link} to="/about" content="About" />
        <Menu.Item as={Link} to="/reactd3" content="ReactD3" />
        <Menu.Item position="right">
          <Button as={Link} to="/login" inverted>Log in</Button>
        </Menu.Item>
      </Menu>
    </Container>
  );
}


export default pure(AppMenu);

