export const toast = {
  SHOW_SUCCESS: 'SHOW_SUCCESS',
  HIDE_SUCCESS: 'HIDE_SUCCESS',
  SHOW_ERROR: 'SHOW_ERROR',
  HIDE_ERROR: 'HIDE_ERROR'
};

export const showSucces = data => async dispatch => {
  dispatch({
    type: toast.SHOW_SUCCESS,
    payload: data
  });
};

export const hideSuccess = () => async dispatch => {
  dispatch({
    type: toast.HIDE_SUCCESS
  });
};

export const showError = data => async dispatch => {
  dispatch({
    type: toast.SHOW_ERROR,
    payload: data
  });
};

export const hideError = () => async dispatch => {
  dispatch({
    type: toast.HIDE_ERROR
  });
};
