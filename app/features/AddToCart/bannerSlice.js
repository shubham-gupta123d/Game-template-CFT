import { createSlice } from '@reduxjs/toolkit';

const bannerSlice = createSlice({
  name: 'banner',
  initialState: {
    selectedBanner: null,
  },
  reducers: {
    setBanner: (state, action) => {
      state.selectedBanner = action.payload;
    },
  },
});

export const { setBanner } = bannerSlice.actions;
export default bannerSlice.reducer;
