import { shallow } from 'enzyme';
import React from 'react';
import Header from './Header';

const wrapper = shallow(<Header />);
describe('Header components', () => {
  it('renders without crashing', () => {
    const result = wrapper.find('header.header').exists();
    expect(result).toBe(true);
  });
  it('renders img', () => {
    const result = wrapper.find('header.header img');
    expect(result.exists()).toBe(true);
  });
  it('renders h1', () => {
    const result = wrapper.find('header.header h1');
    expect(result.exists()).toBe(true);
  });
});