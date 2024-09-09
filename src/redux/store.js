import { combineReducers, configureStore } from '@reduxjs/toolkit';
import RocketsSlice from './Rockets/RocketsSlice';
import missionsReducer from './missions/MissionSlice';

// Combine reducers if you have multiple slices
const rootReducer = combineReducers({
  rockets: RocketsSlice,
  missions: missionsReducer,
});

const store = configureStore({
  reducer: rootReducer, // Use rootReducer to combine reducers
});

const setupStore = (preloadedState) => configureStore({
  reducer: rootReducer, // Ensure consistency with rootReducer
  preloadedState,
});

export default store;
export { setupStore };
