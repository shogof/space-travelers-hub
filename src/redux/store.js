import { combineReducers, configureStore } from '@reduxjs/toolkit';
import missionsSlice from './missions/missionsSlice';
import DragonsSlice from './dragons/DragonsSlisc'; // Import DragonsSlice

const rootReducer = combineReducers({
  missions: missionsSlice.reducer,
  dragons: DragonsSlice, // Replace rockets with dragons
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
