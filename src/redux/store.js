import { combineReducers, configureStore } from '@reduxjs/toolkit';
import missionsSlice from './missions/MissionSlice';
import dragonsSlice from './dragons/DragonsSlisc'; // Import DragonsSlice
import RocketsSlice from './Rockets/RocketsSlice';
import missionsReducer from './missions/MissionSlice';

// Combine all the slices into one rootReducer
const rootReducer = combineReducers({
  missions: missionsSlice.reducer || missionsReducer, // Ensure compatibility
  dragons: dragonsSlice, // Dragons slice added
  rockets: RocketsSlice,  // Rockets slice added
});

// Create the main store
const store = configureStore({
  reducer: rootReducer,
});

// Setup store with optional preloaded state
const setupStore = (preloadedState) => configureStore({
  reducer: rootReducer,
  preloadedState,
});

export default store;
export { setupStore };