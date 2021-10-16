import { combineReducers } from 'redux';

import counterReducer from './counter/counterSlice';
import firstNameReducer from './firstName/firstNameSlice';

const rootReducer = combineReducers({
  counter: counterReducer,
  firstName: firstNameReducer,
});

export default rootReducer;
