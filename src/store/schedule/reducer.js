
import { schedule } from './action';

const InitialState = {
  time_picker: false,
  date_picker: false,
  activities: [
    {
      name: 'spinning',
      val: false,

    },
    {
      name: 'surfing',
      val: false,
     
    },
    {
      name: 'weights',
      val: false,
   
    },
    {
      name: 'hiking',
      val: false,
   
    }
  ]
};

const Schedule = (state = InitialState, action) => {
  switch (action.type) {
    case schedule.IS_SCHEDULE_TIMEPICKER_TRUE:
      return {
        ...state,
        time_picker: true,
        date_picker: false
      };
    case schedule.IS_SCHEDULE_TIMEPICKER_FALSE:
      return {
        ...state,
        time_picker: false
      };
    case schedule.IS_SCHEDULE_DATEPICKER_TRUE:
      return {
        ...state,
        date_picker: true,
        time_picker: false
      };
    case schedule.IS_SCHEDULE_DATEPICKER_FALSE:
      return {
        ...state,
        date_picker: false,
        time_picker: false
      };
    case schedule.GET_ACTIVITY:
      const arr = state.activities.map(activity =>
        activity.name === action.payload
          ? { ...activity, val: activity.val ? false: true }
          : { ...activity, val: false }
      );
      return {
        ...state,
        activities: arr
      };
      case schedule.ERASE_ALL_ACTIVITIES:
        return {
          ...state,
          activities: [
            {
              name: 'spinning',
              val: false,
        
            },
            {
              name: 'surfing',
              val: false,
             
            },
            {
              name: 'weights',
              val: false,
           
            },
            {
              name: 'hiking',
              val: false,
           
            }
          ]
        };

    default:
      return state;
  }
};

export default Schedule;
