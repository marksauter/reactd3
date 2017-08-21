// @flow

export type Location = {
  key: string,
  pathname: string,
  search: string,
  hash: string,
  state: Object,
}

export const from = (from: Location) => (to: string) => ({
  ...from,
  pathname: to,
  state: {
    from: from.pathname,
  },
});

export const cleanProps = (props: Object) => {
  const rest = { ...props };
  delete rest.match;
  delete rest.location;
  delete rest.history;
  delete rest.staticContext;
  return rest;
}; 

