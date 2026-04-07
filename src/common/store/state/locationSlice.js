import { createSlice } from "@reduxjs/toolkit";
import { locations } from "../../../common/constants/index.js";

// ❗ fix typo: harusnya locations.work
const DEFAULT_LOCATION = locations.work;

const locationSlice = createSlice({
  name: "location",
  initialState: {
    activeLocation: DEFAULT_LOCATION,
  },
  reducers: {
    setActiveLocation: (state, action) => {
      state.activeLocation = action.payload;
    },
    resetActiveLocation: (state) => {
      state.activeLocation = DEFAULT_LOCATION;
    },
  },
});

export const { setActiveLocation, resetActiveLocation } = locationSlice.actions;

export default locationSlice.reducer;
