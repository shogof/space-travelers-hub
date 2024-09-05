import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  missions: [],
  reservedMissions: [],
  status: 'idle',
  error: null,
};

export const fetchMissionsData = createAsyncThunk('missions/getData', async (_, { getState }) => {
  const { missions } = getState().missions;
  if (missions.length > 0) {
    return missions;
  }
  try {
    const response = await axios.get('https://api.spacexdata.com/v3/missions');
    const chosenData = response.data.map((mission) => ({
      id: mission.mission_id,
      mission_name: mission.mission_name,
      description: mission.description,
    }));
    return chosenData;
  } catch (error) {
    throw new Error('Failed to fetch missions data');
  }
});

const missionsSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {
    reserveMission: (state, action) => {
      const missionId = action.payload;
      if (!state.reservedMissions.includes(missionId)) {
        state.reservedMissions.push(missionId);
      }
    },
    leaveMission: (state, action) => {
      const missionId = action.payload;
      state.reservedMissions = state.reservedMissions.filter((id) => id !== missionId);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMissionsData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchMissionsData.fulfilled, (state, { payload }) => {
        state.status = 'success';
        state.missions = payload;
      })
      .addCase(fetchMissionsData.rejected, (state, action) => {
        state.status = 'error';
        state.error = action.error.message;
      });
  },
});

export const { reserveMission, leaveMission } = missionsSlice.actions;

export default missionsSlice.reducer;
