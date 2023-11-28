import { SELECT_COURSE,
   UNSELECT_COURSE, 
   FETCH_COURSE_SUCCESS 
  } from '../actions/courseActionTypes'

const initialState = [];

function courseReducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_COURSE_SUCCESS:
      return action.data.map((course) => ({
        ...course,
        isSelected: false,
      }));
    case SELECT_COURSE:
      return state.map((course, index) => {
        const current = {
          ...course,
        };
        if (course.id == action.index) current.isSelected = true;

        return current;
      });
      case UNSELECT_COURSE:
        return state.map((course) => {
          const current = {
            ...course,
          };
          if (course.id == action.index) current.isSelected = false;
  
          return current;
        });
  
      default:
        break;
    }
    return state;
  };
  
  export default courseReducer;