import { shallow } from "enzyme";
import React from "react";
import Login from './Login';


const wrapper = shallow(< Login />);
describe('Login component', () => {
  it('render without crashing', () => {
    const result = wrapper.find('main.body').exists();
    expect(result).toBe(true);
  });
  it('components renders two input tags', () => {
    const result = wrapper.find('main.body input');
    expect(result).toHaveLength(2);
  });
  it('components renders two label tags', () => {
    const result = wrapper.find('main.body label');
    expect(result).toHaveLength(2);
  });
});