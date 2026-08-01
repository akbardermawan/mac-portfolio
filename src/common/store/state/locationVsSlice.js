import { createSlice } from "@reduxjs/toolkit";
import { locations } from "../../../common/constants/index.js";

// ❗ fix typo: harusnya locations.work
const DEFAULT_LOCATION = locations.homevs;

const locationVsSlice = createSlice({
  name: "locationVs",
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

export const { setActiveLocation, resetActiveLocation } =
  locationVsSlice.actions;

export default locationVsSlice.reducer;
