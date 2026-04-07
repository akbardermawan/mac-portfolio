import { configureStore } from "@reduxjs/toolkit";
import windowReducer from "./state/windowSlice.js";
import locationReducer from "./state/locationSlice.js";
import safariReducer from "./state/safariSlice.js";

const store = configureStore({
  reducer: {
    window: windowReducer,
    location: locationReducer,
    safari: safariReducer,
  },
});

export default store;
