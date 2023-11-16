import {configureStore} from '@reduxjs/toolkit';
import { combineReducers } from 'redux'
import restaurantsSlice from './slices/restaurantsSlice';


const preloadedState = {};

const reducer = combineReducers({
    restaurants: restaurantsSlice

})

export const store = configureStore({
  preloadedState,
  reducer,
  //   devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
