import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../slices/couterSlice.js";
import filterSlice from "../slices/filterSlice.js";
import cartSlice from "../slices/cartSlice.js";
import pizzaSlice from "../slices/pizzaSlice.js";


export const store = configureStore({
    reducer: {
      counter: counterSlice,
      filter: filterSlice,
      cart: cartSlice,
      pizza: pizzaSlice
    },
  })