import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./src/features/cartSlice";
import userSlice from "./src/features/userSlice";
const store = configureStore({
  reducer: {
    cart: cartSlice,
    user: userSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(),
});

export default store;
