import { createStore, applyMiddleware, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import thunkMiddleware from 'redux-thunk';
import activities from './activities/reducer';
import schedule from './schedule/reducer';
import toasts from './toasts/reducer';

const bindMiddleware = middleware => {
  if (process.env.NODE_ENV !== 'production') {
    const { composeWithDevTools } = require('redux-devtools-extension');
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

const combinedReducer = combineReducers({
  form: formReducer,
  activities,
  schedule,
  toasts
});

export default function configureStore() {

  return {
    ...createStore(
      combinedReducer,
      bindMiddleware([thunkMiddleware])
    ),
  
  };
}
