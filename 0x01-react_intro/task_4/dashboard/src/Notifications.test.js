import React from "react";
import { shallow } from "enzyme";
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Notifications from './Notifications'

Enzyme.configure({ adapter: new Adapter() });

describe('Notifications component', () => {
  it('Renders without crashing', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.exists()).toBe(true);
  });
  it('renders three list items', () => {
    const wrapper = shallow(<Notifications />);
    const result = wrapper.find('.Notifications').find('ul').find('li');
    expect(result).toHaveLength(3);
  });
  it('renders the text Here is the list of notifications', () => {
    const wrapper = shallow(<Notifications />);
    const result = wrapper.find('.Notifications').find('p').text();
    expect(result).toBe('Here is the list of notifications');
  });
});