import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./src/features/userSlice";
const store = configureStore({
  reducer: {
    user: userSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(),
});

export default store;
