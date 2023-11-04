import React from "react";
import { shallow } from "enzyme";
import Footer from './Footer';

const wrapper = shallow(<Footer />);
describe('Footer components', () => {
  it('renders without crashing', () => {
    const result = wrapper.find('footer.App-footer').exists();
    expect(result).toBe(true);
  });
  it('renders the text “Copyright”', () => {
    const result = wrapper.find('footer.App-footer p').text();
    expect(result).toContain('Copyright');
  });
});