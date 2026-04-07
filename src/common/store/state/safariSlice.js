import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isFullscreen: false,
};

const safariSlice = createSlice({
  name: "safari",
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

export const { toggleFullscreen, setFullscreen } = safariSlice.actions;

export default safariSlice.reducer;
