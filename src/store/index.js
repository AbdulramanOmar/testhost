import { configureStore } from "@reduxjs/toolkit";
import programReducer from "./programSlice";
import podcastReducer from "./podcastSlice";
const store = configureStore({
  reducer: {
    data: programReducer,
    podcasts: podcastReducer,
  },
});

export default store;
