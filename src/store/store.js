import { configureStore } from '@reduxjs/toolkit';
import rootReducer, { createRootReducer } from './slices';

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  devTools: process.env.NODE_ENV === 'development',
});

store.lazyReducers = {};

export const withReducer = (name, lazyReducer) => (Component) => {
  store.lazyReducers[name] = lazyReducer;
  store.replaceReducer(createRootReducer(store.lazyReducers));

  return (props) => <Component {...props} />;
};

export default store;
