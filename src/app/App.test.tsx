import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import App from './App';

let wrapper: ShallowWrapper;

describe('App', () => {
  it('should render the header', () => {
    wrapper = shallow(<App />);

    expect(wrapper.find('.App-header')).toHaveLength(1);
  });
});
