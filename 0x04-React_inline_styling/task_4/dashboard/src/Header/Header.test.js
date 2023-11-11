import { shallow } from 'enzyme';
import React from 'react';
import Header from './Header';
import { StyleSheetTestUtils } from "aphrodite";

const wrapper = shallow(<Header />);
describe('Header components', () => {
  beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });
  afterAll(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it('renders without crashing', () => {
    const result = wrapper.exists();
    expect(result).toBe(true);
  });
  it('renders img', () => {
    const result = wrapper.find('div img');
    expect(result.exists()).toBe(true);
  });
  it('renders h1', () => {
    const result = wrapper.find('div h1');
    expect(result.exists()).toBe(true);
  });
});