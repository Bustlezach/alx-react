import React from "react";
import { shallow } from "enzyme";
import Enzyme from 'enzyme';
import App from './App';

import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

let wrapper = shallow(<App />);
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
    const result = wrapper.find('Login');
    expect(result).toHaveLength(1);;
  });
  it('contains Footer component', () => {
    const result = wrapper.find('Footer');
    expect(result).toHaveLength(1);
  });
  it('renders CourseList is not displayed when islogged is false', () => {
    wrapper = shallow(<App isLoggedIn={false}/>)
    const courseList = wrapper.find('CourseList');
    expect(courseList.exists()).toBeFalsy();
  });
  it('when isLoggedIn is true', () => {
    const wrapper = shallow(<App isLoggedIn={true} />);
    const login = wrapper.find('Login').exists();
    const course = wrapper.find('CourseList').exists();
    expect(login).toBeFalsy();
    expect(course).toBeTruthy();
  });
});
