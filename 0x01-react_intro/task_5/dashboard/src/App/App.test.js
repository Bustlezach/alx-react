import React from "react";
import { shallow } from "enzyme";
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';

Enzyme.configure({ adapter: new Adapter() });

describe('App component', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toBe(true);
  });

  it('renders a div with the class App-header', () => {
    const wrapper = shallow(<App />);
    const finder = wrapper.find('.App-header');
    expect(finder.exists()).toBe(true);
  });
  it('renders a div with the class App-body', () => {
    const wrapper = shallow(<App />);
    const finder = wrapper.find('.App-body');
    expect(finder.exists()).toBe(true);
  });
  it('renders a div with the class App-footer', () => {
    const wrapper = shallow(<App />);
    const finder = wrapper.find('.App-footer');
    expect(finder.exists()).toBe(true);
  });
});