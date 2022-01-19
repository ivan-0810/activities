export const spinner = {
  SPINNER_LOADING_TRUE: 'SPINNER_LOADING_TRUE',
  SPINNER_LOADING_FALSE: 'SPINNER_LOADING_FALSE',
};

export const spinner_loading_true = () => async dispatch => {
  dispatch({
    type: spinner.SPINNER_LOADING_TRUE,
  });
};
export const spinner_loading_false = () => async dispatch => {
  dispatch({
    type: spinner.SPINNER_LOADING_FALSE,
  });
};
