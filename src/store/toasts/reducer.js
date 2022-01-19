import { toast } from './action';

const InitialState = {
  success: {
    show: false,
    message: ''
  },
  error: {
    show: false,
    message: ''
  }
};

const Toast = (state = InitialState, action) => {
  switch (action.type) {
    case toast.SHOW_SUCCESS:
      return {
        ...state,
        success: {
          show: true,
          message: action.payload
        }
      };
    case toast.HIDE_SUCCESS:
      return {
        ...state,
        success: {
          show: false,
          message: ''
        }
      };
      case toast.SHOW_ERROR:
        return {
          ...state,
          error: {
            show: true,
            message: action.payload
          }
        };
        case toast.HIDE_ERROR:
          return {
            ...state,
            error: {
              show: false,
              message: ''
            }
          };

    default:
      return state;
  }
};

export default Toast;
