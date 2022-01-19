import { spinner } from './action';

const InitialState = {
  is_loading: false
};

const  Spinner = (state = InitialState, action) => {
  switch (action.type) {
 
      case spinner.SPINNER_LOADING_TRUE:
        return {
          ...state,
         is_loading: true
        };
        case spinner.SPINNER_LOADING_FALSE:
        return {
          ...state,
         is_loading: false
        };

      default:
        return state;
    }
  }

  export default Spinner