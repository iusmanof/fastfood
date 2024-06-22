import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../slices/couterSlice";
import filterSlice from "../slices/filterSlice";
import cartSlice  from "../slices/cart/selectors";
import pizzaSlice from "../slices/pizzaSlice";
import { useDispatch } from "react-redux";

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    filter: filterSlice,
    cart: cartSlice,
    pizza: pizzaSlice,
  },
});

export type AppStore = typeof store
export type AppDispatch = AppStore['dispatch']
export const useAppDispatch = () => useDispatch<AppDispatch>();
export type RootState = ReturnType<typeof store.getState>;
