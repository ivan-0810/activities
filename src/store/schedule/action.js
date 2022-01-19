export const schedule = {
   IS_SCHEDULE_TIMEPICKER_TRUE: 'IS_SCHEDULE_TIMEPICKER_TRUE',
   IS_SCHEDULE_TIMEPICKER_FALSE: 'IS_SCHEDULE_TIMEPICKER_FALSE',
   IS_SCHEDULE_DATEPICKER_TRUE: 'IS_SCHEDULE_DATEPICKER_TRUE',
   IS_SCHEDULE_DATEPICKER_FALSE: 'IS_SCHEDULE_DATEPICKER_FALSE',
   GET_ACTIVITY: 'GET_ACTIVITY',
   ERASE_ALL_ACTIVITIES: 'ERASE_ALL_ACTIVITIES',
  };
  
  export const is_schedule_timepicker_true = () => async dispatch => {
    dispatch({
      type:schedule.IS_SCHEDULE_TIMEPICKER_TRUE,
    });
  };
  export const is_schedule_timepicker_false = () => async dispatch => {
    dispatch({
      type:schedule.IS_SCHEDULE_TIMEPICKER_FALSE,
    });
  };
  export const is_schedule_datepicker_true = () => async dispatch => {
    dispatch({
      type: schedule.IS_SCHEDULE_DATEPICKER_TRUE,
    });
  };
  export const is_schedule_datepicker_false = () => async dispatch => {
    dispatch({
      type: schedule.IS_SCHEDULE_DATEPICKER_FALSE,
    });
  };

  export const getActivity = data => async dispatch => {
    dispatch({
      type: schedule.GET_ACTIVITY,
      payload:data
    });
  };
  export const erase_all_activities = () => async dispatch => {
    dispatch({
      type: schedule.ERASE_ALL_ACTIVITIES,
    });
  };
 