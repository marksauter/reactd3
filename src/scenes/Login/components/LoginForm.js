// @flow

import React from 'react';
import cx from 'classnames';

import { Field } from 'redux-form';
import { Button, Form, Segment } from 'semantic-ui-react';

import FormInput from 'components/FormInput';

type Props = {
  className: string,
  handleSubmit: Function,
  onSubmit: Function,
}

export const LoginForm = (props: Props) => {
  const { className, handleSubmit, onSubmit } = props;
  const classes = cx('LoginForm', className);

  return (
    <Form onSubmit={ handleSubmit(onSubmit) } className={classes}>
      <Segment stacked>
        <Field
          component={FormInput}
          name="email"
          fluid
          icon="user"
          iconPosition="left"
          placeholder="E-mail address"
        />
        <Field
          component={FormInput}
          name="password"
          type="password"
          fluid
          icon="lock"
          iconPosition="left"
          placeholder="Password"
        />

        <Button color="teal" fluid size="large">Login</Button>
      </Segment>
    </Form>
  );
}


export default LoginForm;

