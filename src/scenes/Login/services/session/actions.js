// @flow

export const AUTHENTICATE_USER = 'AUTHENTICATE_USER';

export const types = {
  AUTHENTICATE_USER,
}

export type User = {
  email: string,
};

export type AuthUserAction = {
  type: typeof AUTHENTICATE_USER,
};

export type Action = AuthUserAction;

export const authUser: AuthUserAction = {
  type: 'AUTHENTICATE_USER',
};

export const actions = {
  authUser,
}

