import { combineReducers } from 'redux';
import { countdown } from './timers/reducer';
import { connectRouter } from 'connected-react-router';

const rootReducer = (history) =>
  combineReducers({
    routing: connectRouter(history),
    countdown,
  });

export default rootReducer;
