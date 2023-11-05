import React from "react";
import { shallow } from "enzyme";
import NotificationItem from "./NotificationItem";

const wrapper = shallow(<NotificationItem type='default' value='test'/>);
describe('NotificationItem components', () => {
  it('renders without crashing', () => {
    const result = wrapper.exists();
    expect(result).toBe(true);
  });
  it('renders the correct html', () => {
    let result = wrapper.prop('data-notification-type');
    expect(result).toBe('default');
    result = wrapper.find('li').text();
    expect(result).toBe('test');
  });
  it('renders the correct html', () => {
    const wrappers = shallow(<NotificationItem  html={{ __html: '<u>test</u>' }}/>);
    const result = wrappers.prop('dangerouslySetInnerHTML');
    expect(result).toEqual({ __html: '<u>test</u>' });
  });
})

describe('markAsRead', () => {
  it('markAsRead message', () => {
    const id = 16;
    const markAsRead = jest.fn();
    const wrapper = shallow(
      <NotificationItem type='default' value='test' id={id} markAsRead={markAsRead} />
    );
    const listItem = wrapper.find('li').first();
    listItem.simulate('click');
    expect(markAsRead).toHaveBeenCalledWith(id);
  });
});