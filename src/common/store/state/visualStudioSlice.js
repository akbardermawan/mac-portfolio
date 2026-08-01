import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isFullscreen: false,
};

const visualStudioSlice = createSlice({
  name: "visualStudio",
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

export const { toggleFullscreen, setFullscreen } = visualStudioSlice.actions;

export default visualStudioSlice.reducer;
