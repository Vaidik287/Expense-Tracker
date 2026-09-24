import { configureStore } from "@reduxjs/toolkit";
import itemDataSlice from "./itemDataSlice";

const moneyTrackerStore = configureStore({
  reducer: {
    itemData: itemDataSlice.reducer,
  },
});

export default moneyTrackerStore;
