import courseReducer from './courseReducer';
import {
  SELECT_COURSE,
  UNSELECT_COURSE,
  FETCH_COURSE_SUCCESS,
} from '../actions/courseActionTypes';

describe('courseReducer', () => {
  it('should return the initial state (empty array)', () => {
    const initialState = courseReducer(undefined, {});
    expect(initialState).toEqual([]);
  });

  it('should handle FETCH_COURSE_SUCCESS and return the data passed', () => {
    const courses = [{ id: 1, name: 'Course 1' }, { id: 2, name: 'Course 2' }];
    const action = { type: FETCH_COURSE_SUCCESS, data: courses };
    const nextState = courseReducer([], action);

    // Ensure each course has isSelected set to false
    const expectedState = courses.map(course => ({ ...course, isSelected: false }));

    expect(nextState).toEqual(expectedState);
  });

  it('should handle SELECT_COURSE and update the right item', () => {
    const initialState = [
      { id: 1, name: 'Course 1', isSelected: false },
      { id: 2, name: 'Course 2', isSelected: false },
    ];

    const action = { type: SELECT_COURSE, index: 1 };
    const nextState = courseReducer(initialState, action);

    const expectedState = [
      { id: 1, name: 'Course 1', isSelected: true },
      { id: 2, name: 'Course 2', isSelected: false },
    ];

    expect(nextState).toEqual(expectedState);
  });

  it('should handle UNSELECT_COURSE and update the right item', () => {
    const initialState = [
      { id: 1, name: 'Course 1', isSelected: true },
      { id: 2, name: 'Course 2', isSelected: false },
    ];

    const action = { type: UNSELECT_COURSE, index: 1 };
    const nextState = courseReducer(initialState, action);

    const expectedState = [
      { id: 1, name: 'Course 1', isSelected: false },
      { id: 2, name: 'Course 2', isSelected: false },
    ];

    expect(nextState).toEqual(expectedState);
  });
});
