import { fetchShowcases } from '@/helper/api';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { toast } from 'secptrum-ui';

const initialState: ShowStateType = {
  projects: [],
  isfetching: false,
  fetchError: '',
};

export const loadShowCases = createAsyncThunk(
  'showcase/load',
  async (_, { rejectWithValue }) => {
    try {
      const showcases = await fetchShowcases();
      return showcases;
    } catch (error: unknown) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const errorMsg = (error as any).response?.data;
      toast.error(errorMsg, { transition: 'dropIn' });
      return rejectWithValue(errorMsg ?? 'Server error');
    }
  }
);

const showcaseSlice = createSlice({
  name: 'showcases',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(loadShowCases.pending, (state) => {
      return { ...state, isfetching: true };
    });
    builder.addCase(loadShowCases.fulfilled, (state, action) => {
      return { ...state, isfetching: false, projects: action.payload };
    });
    builder.addCase(loadShowCases.rejected, (state, action) => {
      return { ...state, isfetching: false, fetchError: action.payload };
    });
  },
});

export default showcaseSlice.reducer;
