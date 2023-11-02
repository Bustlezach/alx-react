import React from "react";
import { shallow } from "enzyme";
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Notifications from './Notifications';

Enzyme.configure({ adapter: new Adapter() });

const wrapper = shallow(<Notifications />);
describe('Notifications component', () => {
  it('Renders without crashing', () => {
    expect(wrapper.exists()).toBe(true);
  });
  it('renders NotificationItem elements', () => {
    const nItem = wrapper.find('NotificationItem');
    expect(nItem).toBeTruthy();
    expect(nItem.first().html()).toEqual(
      '<li data-notification-type="default">New course available</li>'
    );
  });
  it('renders the text Here is the list of notifications', () => {
    const result = wrapper.find('.Notifications p').text();
    expect(result).toBe('Here is the list of notifications');
  });
});