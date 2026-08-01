import { configureStore } from "@reduxjs/toolkit";
import windowReducer from "./state/windowSlice.js";
import locationReducer from "./state/locationSlice.js";
import safariReducer from "./state/safariSlice.js";
import visualStudioReducer from "./state/visualStudioSlice.js";
import locationVsReducer from "./state/locationVsSlice.js";

const store = configureStore({
  reducer: {
    window: windowReducer,
    location: locationReducer,
    safari: safariReducer,
    visualStudio: visualStudioReducer,
    locationVs: locationVsReducer,
  },
});

export default store;
