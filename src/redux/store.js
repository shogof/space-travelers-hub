import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import missionsSlice from './missions/missionsSlice';
import rocketsReducer from './Rockets/RocketsSlice';
import dragonsReducer from './Dragons/DragonsSlice.js';

const rootReducer = combineReducers({
  missions: missionsSlice,
  rockets: rocketsReducer,
  dragons: dragonsReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
