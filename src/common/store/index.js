import { configureStore } from "@reduxjs/toolkit";
import windowReducer from "./state/windowSlice.js";
import locationReducer from "./state/locationSlice.js";
import safariReducer from "./state/safariSlice.js";
import visualStudioReducer from "./state/visualStudioSlice.js";
import locationVsReducer from "./state/locationVsSlice.js";
import locationOffCdReducer from "./state/locationOffCdSlice.js";
import offCodeSlice from "./state/offCodeSlice.js";

const store = configureStore({
  reducer: {
    window: windowReducer,
    location: locationReducer,
    safari: safariReducer,
    visualStudio: visualStudioReducer,
    locationVs: locationVsReducer,
    locationOffCd: locationOffCdReducer,
    offCode: offCodeSlice,
  },
});

export default store;
