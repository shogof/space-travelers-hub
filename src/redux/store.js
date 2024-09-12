import { combineReducers, configureStore } from '@reduxjs/toolkit';
import dragonsSlice from './dragons/DragonsSlisc';
import RocketsSlice from './Rockets/RocketsSlice';
import missionsReducer from './missions/MissionSlice';

const rootReducer = combineReducers({
  missions: missionsReducer.reducer || missionsReducer,
  dragons: dragonsSlice,
  rockets: RocketsSlice,
});

const store = configureStore({
  reducer: rootReducer,
});

const setupStore = (preloadedState) => configureStore({
  reducer: rootReducer,
  preloadedState,
});

export default store;
export { setupStore };
