
export const activities = {
  GET_SCHEDULE_ACTIVITIES: 'GET_SCHEDULE_ACTIVITIES',
}

export const get_schedule_activites = data =>async (dispatch) => {
  return dispatch({
    type: activities.GET_SCHEDULE_ACTIVITIES,
    payload: data,
  })
}
