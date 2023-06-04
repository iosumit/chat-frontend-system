import {applyMiddleware, createStore} from 'redux';
import rootReducer from './reducers';
import thunk from 'redux-thunk';
import {configureStore} from '@reduxjs/toolkit';

const middleware = [thunk];

const store = configureStore(
  {reducer: rootReducer},
  applyMiddleware(...middleware),
);
// const store = configureStore(
//   {
//     rootReducer,
//   },
//   applyMiddleware(...middleware),
// );

export default store;