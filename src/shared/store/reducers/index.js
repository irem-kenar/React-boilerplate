// import other reducers here
import { combineReducers } from 'redux';
import weatherReducer from './weather.reducer';

// add other reducers here
const rootReducer = combineReducers({
  weather: weatherReducer,
});

export default rootReducer;
