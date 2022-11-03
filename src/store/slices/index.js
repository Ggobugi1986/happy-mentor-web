import { combineReducers } from '@reduxjs/toolkit';
import uiReducer from './uiSlice';

const rootReducer = combineReducers({
  ui: uiReducer,
});

export const createRootReducer = (lazyReducers) => {
  const rootReducer = combineReducers({
    ui: uiReducer,
    ...lazyReducers,
  });

  return rootReducer;
};

export default rootReducer;
