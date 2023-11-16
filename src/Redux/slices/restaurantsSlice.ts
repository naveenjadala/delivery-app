import {createSlice} from '@reduxjs/toolkit';
import {getAllRestaurants} from '../../services/api';

interface restaurantsBody {
  createdAt?: string;
  id: number;
  name: string;
  location: string;
  rating: number | null;
}

interface responseBody {
  data: Array<restaurantsBody>;
  loading: 'idle' | 'pending' | 'succeeded' | 'failed';
  error: null | string
}

const initialState: responseBody = {
  data: [],
  loading: 'idle',
  error: null
};

export const restaurantsSlice = createSlice({
  name: 'restaurants',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getAllRestaurants.pending, (state, action) => {
        state.loading = 'pending';
      })
      .addCase(getAllRestaurants.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = 'succeeded';
      })
      .addCase(getAllRestaurants.rejected, (state, action) => {
        state.data = [];
        state.loading = 'failed';
        state.error = action.payload as string
      });
  },
});

export default restaurantsSlice.reducer;
