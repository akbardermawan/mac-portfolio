import { createSlice } from "@reduxjs/toolkit";
import { navOffCode } from "../../../common/constants/index.js";

const DEFAULT_LOCATION = navOffCode[0];

const locationOffCdSlice = createSlice({
  name: "locationOffCode",
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
  locationOffCdSlice.actions;

export default locationOffCdSlice.reducer;
