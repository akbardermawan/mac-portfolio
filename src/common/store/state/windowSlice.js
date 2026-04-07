import { createSlice } from "@reduxjs/toolkit";
import { INITIAL_Z_INDEX, WINDOW_CONFIG } from "../../constants/index.js";

const initialState = {
  windows: WINDOW_CONFIG,
  nextZIndex: INITIAL_Z_INDEX + 1,
};

const windowSlice = createSlice({
  name: "window",
  initialState,
  reducers: {
    openWindow: (state, action) => {
      const { windowKey, data } = action.payload;
      const win = state.windows[windowKey];
      if (!win) return;

      win.isOpen = true;
      win.zIndex = state.nextZIndex;
      win.data = data ?? win.data;

      state.nextZIndex++;
    },

    closeWindow: (state, action) => {
      const windowKey = action.payload;
      const win = state.windows[windowKey];
      if (!win) return;

      win.isOpen = false;
      win.data = null;
    },

    focusWindow: (state, action) => {
      const windowKey = action.payload;
      const win = state.windows[windowKey];
      if (!win) return;

      win.zIndex = state.nextZIndex;
      state.nextZIndex++;
    },
    toggleWindow: (state, action) => {
      const windowKey = action.payload;
      const win = state.windows[windowKey];
      if (!win) return;

      // 🔁 TOGGLE
      if (win.isOpen) {
        win.isOpen = false;
        win.data = null;
      } else {
        win.isOpen = true;
        win.zIndex = state.nextZIndex;
        state.nextZIndex++;
      }
    },
  },
});

export const { openWindow, closeWindow, focusWindow, toggleWindow } =
  windowSlice.actions;

export default windowSlice.reducer;
