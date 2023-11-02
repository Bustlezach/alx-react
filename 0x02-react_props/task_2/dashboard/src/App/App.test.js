import React from "react";
import { shallow } from "enzyme";
import Enzyme from 'enzyme';
import App from './App';

import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

const wrapper = shallow(<App />);
describe('App component', () => {
  it('renders without crashing', () => {
    expect(wrapper.exists()).toBe(true);
  });
  it('contains Notifications component', () => {
    const result = wrapper.find('Notifications').exists();
    expect(result).toBe(true);
  });
  it('contains Header component', () => {
    const result = wrapper.find('Header').exists();
    expect(result).toBe(true);
  });
  it('contains Login component', () => {
    const result = wrapper.find('Login').exists();
    expect(result).toBe(true);
  });
  it('contains Footer component', () => {
    const result = wrapper.find('Footer').exists();
    expect(result).toBe(true);
  });
});