import { configureStore } from '@reduxjs/toolkit';
import dragonsReducer from './Dragons/DragonsSlice'; // Correct the file name

const store = configureStore({
  reducer: {
    dragons: dragonsReducer,
  },
});

export default store;