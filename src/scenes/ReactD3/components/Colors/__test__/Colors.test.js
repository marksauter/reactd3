import React from 'react';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

import ConnectedColors, { Colors } from '../';
import { reverseSwatches } from '../';
import { initialState } from '../';

const mockStore = configureStore();

// Snapshot for Colors
describe('Colors --- Snapshot', () => {
  it('matches snapshot', () => {
    const renderedValue = renderer.create(<Colors width="600" />).toJSON();
    expect(renderedValue).toMatchSnapshot();
  });
});
//***********************************************************************
describe('Colors --- shallow render', () => {
  const width = 600;
  const wrapper = shallow(<Colors width={width} />);
  
  it('renders component', () => {
    expect(wrapper.length).toEqual(1);
  });
});
//***********************************************************************
describe('Colors --- shallow + mock store', () => {
  const store = mockStore({ colors: initialState });
  const wrapper = shallow(<ConnectedColors width="600" store={store} />);

  it('renders connected component', () => {
    expect(wrapper.length).toEqual(1);
  });

  it('state mapped to props', () => {
    expect(wrapper.prop('reversed')).toEqual(initialState.reversed);
  });
});
//***********************************************************************
describe('Colors --- mount + Provider', () => {
  const store = mockStore({ colors: initialState });
  const wrapper = mount(
    <Provider store={store}>
      <ConnectedColors width="600" />
    </Provider>
  );

  it('renders connected component', () => {
    expect(wrapper.find(ConnectedColors).length).toEqual(1);
  });

  it('state mapped to props', () => {
    expect(wrapper.find(Colors).prop('reversed')).toEqual(initialState.reversed);
  });
});
