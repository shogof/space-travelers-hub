import { combineReducers, configureStore } from '@reduxjs/toolkit';
import missionsSlice from './missions/MissionSlice';
import rocketsSlice from './Rockets/RocketsSlice';

const rootReducer = combineReducers({
  missions: missionsSlice.reducer,
  rockets: rocketsSlice.reducer,
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
