import { configureStore } from "@reduxjs/toolkit";
import { bookApi } from "./api";
import { cartSlice } from "./cart";

const isDevEnvironment = import.meta.env.DEV;

export const store = configureStore({
  reducer: {
    [bookApi.reducerPath]: bookApi.reducer,
    cart: cartSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(bookApi.middleware),
  devTools: isDevEnvironment,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
