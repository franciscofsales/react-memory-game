import { combineReducers } from 'redux';
import tiles from './tiles';
import loading from './loading';

const rootReducer = combineReducers({
  tiles: tiles,
  loading: loading
});

export default rootReducer;
