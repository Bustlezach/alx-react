import React from "react";
import { shallow } from "enzyme";
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Notifications from './Notifications';

Enzyme.configure({ adapter: new Adapter() });

let wrapper = shallow(<Notifications />);
describe('Notifications component', () => {
  it('Renders without crashing', () => {
    expect(wrapper.exists()).toBe(true);
  });
  it('renders NotificationItem elements', () => {
    wrapper = shallow(<Notifications displayDrawer={true} />);
    const nItem = wrapper.find('NotificationItem');
    expect(nItem).toBeTruthy();
    expect(nItem.first().html()).toEqual(
      '<li data-notification-type="default">New course available</li>'
    );
  });
  it('renders the text Here is the list of notifications', () => {
    wrapper = shallow(<Notifications displayDrawer={true} />);
    const result = wrapper.find('.Notifications p').text();
    expect(result).toBe('Here is the list of notifications');
  });
  it('menuItem with displayDrawer false', () => {
    const wrapper = shallow(<Notifications />);
    const mItem = wrapper.find('div.menuItem');
    expect(mItem).toHaveLength(1);
  });

  it('Notification with displayDrawer false', () => {
    const wrapper = shallow(<Notifications />);
    const dNoti = wrapper.find('div.Notifications');
    expect(dNoti).toHaveLength(0);
  });

  it('menuItem with displayDrawer true', () => {
    const wrapper = shallow(<Notifications displayDrawer />);
    const mItem = wrapper.find('div.menuItem');
    expect(mItem).toHaveLength(1);
  });

  it('displayDrawer is true', () => {
    const wrapper = shallow(<Notifications displayDrawer />);
    const dNoti = wrapper.find('div.Notifications');
    expect(dNoti).toHaveLength(1);
  });
});