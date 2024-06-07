import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../redux/slices/couterSlice.js";
import filterSlice from "../redux/slices/filterSlice.js";
import cartSlice from "../redux/slices/cartSlice.js";
import pizzaSlice from "./slices/pizzaSlice.js";


export const store = configureStore({
    reducer: {
      counter: counterSlice,
      filter: filterSlice,
      cart: cartSlice,
      pizza: pizzaSlice
    },
  })