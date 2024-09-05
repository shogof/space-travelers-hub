import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchDragons = createAsyncThunk(
  'dragons/fetchData',
  async () => {
    try {
      const response = await axios.get('https://api.spacexdata.com/v3/dragons');
      return response.data;
    } catch (error) {
      throw new Error(error.message);
    }
  },
);

const initialState = {
  isLoading: false,
  error: null,
  dragons: [],
};

const DragonsSlice = createSlice({
  name: 'dragons',
  initialState,
  reducers: {
    reserveDragon: (state, action) => {
      state.dragons = state.dragons.map((item) => {
        if (item.id === action.payload) {
          return { ...item, reserved: true };
        }
        return item;
      });
    },
    cancelBooking: (state, action) => {
      state.dragons = state.dragons.map((item) => {
        if (item.id === action.payload) {
          return { ...item, reserved: false };
        }
        return item;
      });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchDragons.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchDragons.fulfilled, (state, action) => {
        const dragons = action.payload.map((dragon) => ({
          id: dragon.id,
          name: dragon.name,
          image: dragon.image || 'path/to/default-image.jpg', // Ensure image has a default value
          description: dragon.description,
          reserved: false,
        }));
        state.dragons = dragons;
        state.isLoading = false;
      })
      .addCase(fetchDragons.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default DragonsSlice.reducer;
export const { reserveDragon, cancelBooking } = DragonsSlice.actions;

"DragonsSlice.js"