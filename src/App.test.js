import React from 'react';
import { shallow } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import App, { initialState } from '../';

const mockStore = configureStore();

describe('App --- shallow render', () => {
  const store = mockStore(initialState);

  it('renders without crashing', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>
    );
    expect(wrapper.find(App).length).toEqual(1);
  });
});
