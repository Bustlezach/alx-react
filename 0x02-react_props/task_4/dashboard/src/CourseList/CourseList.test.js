import React from "react";
import { shallow } from "enzyme";
import CourseList from './CourseList';


const wrapper = shallow(<CourseList />);
describe('CourseList Components', () => {
  it('renders CourseList component without crashing', () => {
    const result = wrapper.exists();
    expect(result).toBeTruthy();
  });
  it('renders the 5 different rows', () => {
    const courseList = wrapper.find('CourseListRow')
    const result = courseList.forEach(element => element);
    expect(result.length).toEqual(5);
  });
});