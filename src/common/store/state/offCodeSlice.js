import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isFullscreen: false,
};

const offCodeSlice = createSlice({
  name: "offCode",
  initialState,
  reducers: {
    toggleFullscreen: (state) => {
      state.isFullscreen = !state.isFullscreen;
    },

    setFullscreen: (state, action) => {
      state.isFullscreen = action.payload;
    },
  },
});

export const { toggleFullscreen, setFullscreen } = offCodeSlice.actions;

export default offCodeSlice.reducer;
