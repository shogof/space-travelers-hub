import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchRockets = createAsyncThunk(
  'rockets/fetchData',
  async () => {
    try {
      const response = await axios.get('https://api.spacexdata.com/v4/rockets');
      return response.data;
    } catch (error) {
      throw new Error(error.message);
    }
  },
);

const initialState = {
  isLoading: false,
  error: null,
  rockets: [],
};

const RocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {
    reserveRocket: (state, action) => {
      const rocket = state.rockets.find((item) => item.id === action.payload);
      if (rocket) {
        rocket.reserved = true;
      }
    },
    cancelBooking: (state, action) => {
      const rocket = state.rockets.find((item) => item.id === action.payload);
      if (rocket) {
        rocket.reserved = false;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRockets.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchRockets.fulfilled, (state, action) => {
        const rockets = action.payload.map((rocket) => {
          const existingRocket = state.rockets.find((item) => item.id === rocket.id);
          return {
            id: rocket.id,
            name: rocket.name,
            image: rocket.flickr_images[0],
            description: rocket.description,
            reserved: existingRocket ? existingRocket.reserved : false,
          };
        });
        state.rockets = rockets;
        state.isLoading = false;
      })
      .addCase(fetchRockets.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default RocketsSlice.reducer;
export const { reserveRocket, cancelBooking } = RocketsSlice.actions;
