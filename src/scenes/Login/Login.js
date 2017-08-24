// @flow

import React from 'react';
import cx from 'classnames';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { reduxForm } from 'redux-form';

import { Redirect } from 'react-router-dom';
import { Grid, Header, Message } from 'semantic-ui-react';
import LoginForm from './components/LoginForm';

import { auth } from './services/api';
import { authUser } from './services/session/actions';

import './styles.css';

type Props = {
  className?: string,
}

class Login extends React.Component<Props> {
  handleSubmit = async (credentials) => {
    try {
      await(auth.login(credentials));
      this.props.authUser();
    } catch (error) {
      console.log(error.message);
    }
  }

  render() {
    const { authenticated, className, location, ...rest } = this.props;
    const classes = cx('Login', className);
    const { from } = location.state || { from: '/' };

    if (authenticated) {
      return <Redirect to={from} />;
    }

    return (
      <div className={classes}>
        <Grid
          textAlign="center"
          verticalAlign="middle"
        >
          <Grid.Column style={{maxWidth:450}}>
            <Header as="h2" color="teal" textAlign="center">
              {' '}Log-in to your account
            </Header>
            <LoginForm {...rest} onSubmit={this.handleSubmit} />
            <Message>
              Join the fun!
            </Message>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  authenticated: state.auth,   
});

const mapDispatchToProps = dispatch => ({
  authUser: () => dispatch(authUser),
});

export default compose(
  reduxForm({ form: 'login' }),
  connect(mapStateToProps, mapDispatchToProps)
)(Login);

