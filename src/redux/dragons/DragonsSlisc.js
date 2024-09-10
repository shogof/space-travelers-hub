import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Fetch dragons data from an API
export const fetchDragons = createAsyncThunk(
  'dragons/fetchData',
  async () => {
    try {
      const response = await axios.get('https://api.spacexdata.com/v4/dragons');
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
      const updatedDragons = state.dragons.map((dragon) => (
        dragon.id === action.payload ? { ...dragon, reserved: true } : dragon
      ));
      return { ...state, dragons: updatedDragons };
    },
    cancelBooking: (state, action) => {
      const updatedDragons = state.dragons.map((dragon) => (
        dragon.id === action.payload ? { ...dragon, reserved: false } : dragon
      ));
      return { ...state, dragons: updatedDragons };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchDragons.pending, (state) => ({
        ...state,
        isLoading: true,
        error: null,
      }))
      .addCase(fetchDragons.fulfilled, (state, action) => {
        const dragons = action.payload.map((dragon) => {
          const existingDragon = state.dragons.find(
            (item) => item.id === dragon.id,
          );
          return {
            id: dragon.id,
            name: dragon.name,
            image: dragon.flickr_images[0], // Assuming there's an image
            description: dragon.description,
            reserved: existingDragon ? existingDragon.reserved : false,
          };
        });
        return { ...state, dragons, isLoading: false };
      })
      .addCase(fetchDragons.rejected, (state, action) => ({
        ...state,
        isLoading: false,
        error: action.error.message,
      }));
  },
});

export default DragonsSlice.reducer;
export const { reserveDragon, cancelBooking } = DragonsSlice.actions;