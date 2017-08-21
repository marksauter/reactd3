// @flow

import React from 'react';

import { Form } from 'semantic-ui-react';

type Props = {
  input: Object,
  meta: Object,
}

const FormInput = (props: Props) => {
  const { input, meta, ...rest } = props;

  return (
    <Form.Input {...input} {...rest} />
  );
}

export default FormInput;

