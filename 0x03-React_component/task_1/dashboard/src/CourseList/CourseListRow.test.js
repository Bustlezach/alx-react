import React from "react";
import { shallow } from "enzyme";
import CourseListRow from './CourseListRow';

let wrapper = shallow(<CourseListRow textFirstCell='test'/>);
describe('CourseListRow Components', () => {
  it('renders without crashing', () => {
    const result = wrapper.exists();
    expect(result).toBeTruthy();
  });
  it('renders one cell with colspan = 2', () => {
    wrapper = shallow(<CourseListRow isHeader={true} textFirstCell='text' textSecondCell={null}/>);
    const result = wrapper.find('th');
    expect(result).toHaveLength(1);
    expect(result.prop('colspan')).toEqual('2');
  });
  it('renders correctly two td elements within a tr element', () => {
    wrapper = shallow(<CourseListRow isHeader={false} textFirstCell='text' textSecondCell='subtext'/>);
    const result = wrapper.find('td');
    expect(result).toHaveLength(2);
  });
});