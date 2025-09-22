import { combineReducers } from 'redux';
import ui from '../modules/ui';
import lotto from '../modules/lotto';

const createReducer = () =>
  combineReducers({
    ui,
    lotto,
  });

export default createReducer;
