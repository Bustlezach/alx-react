import { shallow } from "enzyme";
import React from "react";
import Login from './Login';
import { StyleSheetTestUtils } from "aphrodite";


const wrapper = shallow(< Login />);
describe('Login component', () => {
  beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });
  afterAll(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });
  
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