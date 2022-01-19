import { activities } from './action';

const InitialState = {};

const  Activities = (state = InitialState, action) => {
  switch (action.type) {
    case activities.GET_SCHEDULE_ACTIVITIES:
      return {
        ...state,
       ...action.payload
      };
    default:
      return state;
  }
  
}

export default Activities;
